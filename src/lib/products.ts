import type { CollectionEntry } from "astro:content";

export type ProductEntry = CollectionEntry<"products">;
export type ProductCategory = ProductEntry["data"]["category"];
export type ProductSpecification = ProductEntry["data"]["keyStats"][number];

export const categoryMeta = {
  motorcycle: { label: "Motos", route: "/motos/" },
  atv: { label: "ATV", route: "/atv/" },
  "side-by-side": { label: "Side-by-Side", route: "/side-by-side/" },
} as const satisfies Record<ProductCategory, { label: string; route: string }>;

export const usageLabels: Record<string, string> = {
  sport: "Sport",
  naked: "Naked",
  adventure: "Adventure",
  heritage: "Heritage",
  recreation: "Recreación",
  utility: "Utility",
  work: "Trabajo",
};

export const getProductHref = (product: ProductEntry) =>
  `${categoryMeta[product.data.category].route}${product.data.slug}/`;

export const isVerifiedSpecification = (
  specification: ProductSpecification,
): specification is Extract<ProductSpecification, { status: "available" }> =>
  specification.status === "available" &&
  specification.verification.status === "verified";

export const getVerifiedStats = (product: ProductEntry, maximum = 5) =>
  product.data.keyStats.filter(isVerifiedSpecification).slice(0, maximum);

export const formatSpecification = (
  specification: Extract<ProductSpecification, { status: "available" }>,
) =>
  `${specification.displayValue ?? specification.value}${specification.unit ? ` ${specification.unit}` : ""}`;

export const getVerifiedDisplacement = (product: ProductEntry) => {
  const stat = product.data.keyStats.find(
    (item) => item.key === "displacement" && isVerifiedSpecification(item),
  );
  return stat?.status === "available" && typeof stat.value === "number"
    ? stat.value
    : undefined;
};

export const getPublicPrice = (product: ProductEntry) =>
  product.data.price?.verification.status === "verified"
    ? product.data.price
    : undefined;

export const getRelatedProducts = (
  product: ProductEntry,
  products: ProductEntry[],
  maximum = 3,
) => {
  const explicit = new Set(product.data.relatedProducts);
  return products
    .filter(
      (candidate) =>
        candidate.id !== product.id &&
        candidate.data.category === product.data.category,
    )
    .sort((a, b) => {
      const score = (candidate: ProductEntry) =>
        (explicit.has(candidate.data.slug) ? 4 : 0) +
        (candidate.data.family === product.data.family ? 2 : 0) +
        (candidate.data.usage.some((usage) =>
          product.data.usage.includes(usage),
        )
          ? 1
          : 0);
      return score(b) - score(a);
    })
    .slice(0, maximum);
};
