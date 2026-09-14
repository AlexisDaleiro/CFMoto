import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, relative, sep } from "node:path";

const dist = new URL("../dist/", import.meta.url);
const root =
  dist.pathname.startsWith("/") && /^[A-Za-z]:/.test(dist.pathname.slice(1))
    ? decodeURIComponent(dist.pathname.slice(1))
    : decodeURIComponent(dist.pathname);

if (!existsSync(root)) {
  console.error("dist/ no existe. Ejecutá el build antes de esta auditoría.");
  process.exit(1);
}

const walk = (directory) =>
  readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });

const files = walk(root);
const htmlFiles = files.filter((file) => extname(file) === ".html");
const knownFiles = new Set(
  files.map((file) => `/${relative(root, file).split(sep).join("/")}`),
);

const routeForFile = (file) => {
  const path = `/${relative(root, file).split(sep).join("/")}`;
  if (path === "/index.html") return "/";
  if (path.endsWith("/index.html")) return path.slice(0, -"index.html".length);
  return path;
};

const knownRoutes = new Set(htmlFiles.map(routeForFile));
const failures = [];
const warnings = [];
let internalLinks = 0;
let images = 0;

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const route = routeForFile(file);
  const ids = [...html.matchAll(/\sid=["']([^"']+)["']/g)].map(
    (match) => match[1],
  );
  const duplicateIds = [
    ...new Set(ids.filter((id, index) => ids.indexOf(id) !== index)),
  ];
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  const title = html.match(/<title>(.*?)<\/title>/is)?.[1]?.trim();
  const description = html.match(
    /<meta\s+name=["']description["'][^>]*content=["']([^"']*)["']/i,
  )?.[1];
  const robots = html.match(
    /<meta\s+name=["']robots["'][^>]*content=["']([^"']*)["']/i,
  )?.[1];

  if (h1Count !== 1) failures.push(`${route}: ${h1Count} elementos h1`);
  if (duplicateIds.length)
    failures.push(`${route}: IDs duplicados (${duplicateIds.join(", ")})`);
  if (!title) failures.push(`${route}: falta title`);
  if (!description) failures.push(`${route}: falta meta description`);
  if (!robots?.includes("noindex"))
    warnings.push(`${route}: no está protegido con noindex`);

  for (const match of html.matchAll(/<img\b([^>]*)>/gi)) {
    images += 1;
    const attributes = match[1];
    if (!/\balt=["'][^"']*["']/i.test(attributes))
      failures.push(`${route}: imagen sin alt`);
    if (
      !/\bwidth=["']\d+["']/i.test(attributes) ||
      !/\bheight=["']\d+["']/i.test(attributes)
    ) {
      failures.push(`${route}: imagen sin dimensiones reservadas`);
    }
  }

  for (const match of html.matchAll(/\bhref=["']([^"']+)["']/gi)) {
    const href = match[1];
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    internalLinks += 1;
    const pathname = decodeURI(href.split(/[?#]/)[0]);
    if (!pathname || pathname === "/") continue;
    if (knownRoutes.has(pathname) || knownFiles.has(pathname)) continue;
    const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;
    if (!knownRoutes.has(normalized))
      failures.push(`${route}: enlace roto ${href}`);
  }
}

const report = {
  pages: htmlFiles.length,
  internalLinks,
  images,
  failures,
  warnings,
};

const representativeRoutes = [
  "/",
  "/motos/",
  "/motos/450sr/",
  "/comparar/",
  "/service/",
  "/cotizar/",
  "/experiencia/racing/",
];

report.assets = representativeRoutes.map((route) => {
  const file =
    route === "/"
      ? join(root, "index.html")
      : join(root, route.slice(1), "index.html");
  const html = readFileSync(file, "utf8");
  const css = [...html.matchAll(/href=["'](\/_astro\/[^"']+\.css)["']/g)].map(
    (match) => match[1],
  );
  const js = [...html.matchAll(/src=["'](\/_astro\/[^"']+\.js)["']/g)].map(
    (match) => match[1],
  );
  const assetSize = (asset) => statSync(join(root, asset.slice(1))).size;
  const inlineJs = [
    ...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi),
  ].reduce((total, match) => total + Buffer.byteLength(match[1]), 0);
  return {
    route,
    cssBytes: css.reduce((total, asset) => total + assetSize(asset), 0),
    externalJsBytes: js.reduce((total, asset) => total + assetSize(asset), 0),
    inlineJsBytes: inlineJs,
  };
});

console.log(JSON.stringify(report, null, 2));
process.exitCode = failures.length > 0 ? 1 : 0;
