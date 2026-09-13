# Technical Architecture

Phase 4 implementation baseline for the CFMOTO Uruguay Astro project.

## Runtime and framework

- **Astro 7.3.2**, pinned exactly in `package.json` and locked by npm.
- **Node >=22.12.0**; validated locally with Node 24.19.0.
- **TypeScript 6.x**, constrained to `^6.0.0` because `@astrojs/check` currently accepts TypeScript 5/6; strict Astro config.
- **npm 11.17.0** in the validation environment; one `package-lock.json` only.
- Static output and trailing-slash URL policy align with the architecture docs.

Astro 7 was selected after checking current official release/docs. It uses the current Content Layer (`src/content.config.ts`, `glob`, `astro/zod`) and responsive `astro:assets` API. No legacy content collection API is used.

## Architecture

```text
src/
├── components/
│   ├── primitives/    # minimal semantic, zero-hydration foundations
│   └── seo/           # head metadata foundation
├── config/            # global site configuration, not CMS data
├── content/
│   ├── products/      # draft schema fixtures
│   └── schemas.ts     # executable content contracts
├── layouts/           # BaseLayout
├── pages/
│   ├── dev/           # removable noindex test harness
│   └── index.astro    # intentionally minimal placeholder
└── styles/            # reset, tokens, typography, global, utilities
```

Folders are created only when used. Future product/location/editorial components should follow documented taxonomy, not generic Box/Flex abstractions.

## Rendering and JavaScript policy

- Static HTML by default.
- Current pages/components contain no client directives or framework hydration. Phase 5 adds one minified 568-byte inline script per prototype page for the native mobile Header dialog, scroll lock and focus restoration.
- Native links, buttons, layout and content never require a UI framework.
- A future island must document problem, no-JS baseline, payload budget, owner and deletion condition.
- No React, Vue, Svelte, state manager, analytics, map, carousel, forms framework, API route, database or CMS.

Astro dev tooling injects scripts only in development; production output is checked separately.

## CSS strategy

Native modern CSS, organized as:

- `reset.css`: minimal box/media/form/reset and reduced-motion baseline.
- `tokens.css`: Phase 3 values and responsive root/grid variables.
- `typography.css`: documented role utilities.
- `global.css`: body, surfaces, focus, selection and skip link.
- `utilities.css`: containers, section densities, Stack, Cluster, grid and visually hidden.

Component-exclusive styles stay colocated in `.astro`. Semantic tokens are the only component color/foundation input. No Tailwind or component framework.

## Design token implementation

Phase 3 values are represented as custom properties. `--color-brand-cyan: #00b7e5` is explicitly provisional; replacement occurs once at that primitive and semantic roles inherit it. Primary text uses `--color-on-brand` near-black. Light/dark are surfaces, not themes.

Grid variables change at 480/768/1024/1280/1600px; containers cap readable/standard/wide/product content. Spacing uses 4px-derived tokens. Motion uses 0/120/220/420ms and reduced-motion removes nonessential spatial effects.

## Fonts

The Astro 7 Fonts API uses its Fontsource provider to fetch/cache and emit local WOFF2 assets for provisional Barlow Condensed Variable and Inter Variable. Runtime does not contact Google Fonts/Fontsource. BaseLayout preloads only the UI face; display uses normal discovery.

Fonts remain non-official candidates. Fallback stacks are always present. When client fonts arrive, update central font config/tokens after license, glyph, numeral, metrics and payload validation.

## Layout primitives

- `Container`: readable/standard/wide/product/full.
- `Section`: semantic section/article with immersive/editorial/functional density and page/light/dark surface.
- `Stack` and `Cluster`: constrained gap variants from token scale.
- `Button`: link or button semantics with primary/secondary/tertiary/ghost only.
- `TextLink` and `Badge`: minimal approved variants.

They hide repetition, not semantics. No ProductCard, ProductHero, compare, header/footer, forms or dealer component is implemented in Phase 4.

## Content architecture

Astro Content Layer currently defines only `products`, because product validation is needed immediately and real Location/editorial content is not available. The Zod 4 schema covers stable identity/category, draft/publication status, narrative fields, structured price, structured specifications/key stats/compare attributes, role-based images/rights, colors, CTAs and verification metadata.

Three draft/needsReview identity fixtures exercise motorcycle/ATV/Side-by-Side. Routes do not consume or publish them. Detailed contract: `CONTENT_MODEL.md`.

## Image strategy

- Optimizable product/editorial images: `src/assets` and imported `Image`/`Picture` from `astro:assets`.
- Exact URL files: `public`, with explicit dimensions when used through `Image`.
- Default image layout is `constrained` with Astro responsive styles enabled; product/hero code chooses `full-width` only when composition requires.
- Local source assets allow intrinsic dimensions; alt remains mandatory. Hero/LCP loading/fetch priority is selected per real page, not globally.
- `PrototypeHeroMedia` is the first justified wrapper: it selects separate generated desktop/mobile proposal assets through `<picture>` art direction while retaining Astro optimization. It is prototype-specific and must not become the generic production image API.
- No logo was invented and no random photography downloaded.

## SEO foundation

`SEO.astro` supports title, description, canonical, robots, OpenGraph type and optional image. `BaseLayout` sets `lang="es-UY"`, viewport and generator.

`siteConfig.baseUrl` is null and indexing defaults false. Consequently no false canonical or production sitemap is emitted. Phase 4 pages explicitly noindex. When domain/environment ownership is known, production must set one verified base URL, enable indexing only for production and then add the official sitemap integration.

Product/Article/LocalBusiness structured data is intentionally deferred until real templates/data exist.

## Accessibility foundation

- Skip link targets the real main landmark.
- Global `:focus-visible` implements 2px/2px ring for light and dark surfaces.
- Minimum control heights and 44px target token.
- Semantic dynamic primitives and link/button distinction.
- Rem/fluid type, 320px minimum canvas, readable line length and responsive margins.
- Reduced-motion override removes nonessential animation/scrolling without hiding content.
- Selection uses accessible near-black on cyan.

The test harness was checked for language, landmarks, noindex and keyboard skip-link focus. CDP viewport emulation verified no horizontal overflow at 320, 390, 768, 1024, 1280, 1440 and 1920px; grid variables resolved to 4/8/12 as specified. Phase 5 must continue device, 200% zoom and screen-reader verification with actual compositions.

## Security and deployment boundary

- No `set:html`, API routes, form handlers, secrets or third parties.
- CSP is not enabled prematurely because external assets/integrations and hosting are unresolved.
- Deployment must eventually configure CSP, HSTS, Referrer-Policy, Permissions-Policy, X-Content-Type-Options and frame restrictions at the platform edge; start from real origins and test preview separately.
- Preview environments remain noindex through environment-aware config when infrastructure is chosen.

## Initial performance budget

Budgets are gates to measure, not claimed Lighthouse results:

| Resource | Foundation | Initial page expectation |
|---|---|---|
| Authored client JS | 568 bytes inline/page on Phase 5 routes | native Header behavior only; no framework hydration |
| Framework/UI JS | none | none until feature evidence |
| Global CSS | ~11.5 KB uncompressed current build | target <30 KB compressed foundation + primitives before page CSS review |
| Page-specific preview CSS | ~7.1 KB uncompressed | development-only; not a production page budget |
| Fonts | 10 local WOFF2 files / ~267 KB current build; UI only preloaded | audit glyph coverage and remove unused variants once content/brand fonts are final |
| Hero image | none in foundation | page-specific responsive asset; target decided from real source/LCP baseline |

Core Web Vitals goals remain LCP ≤2.5s, INP ≤200ms and CLS ≤0.1 at the 75th percentile once production traffic/testing exists. Lighthouse 95+ remains an objective, not a Phase 4 result.

Phase 5 build measurement: four CSS chunks total ~35.3KB uncompressed; the Header script is 568 bytes minified inline per prototype route; nine responsive WebP outputs total ~592.8KB across the build (a browser selects one hero candidate per slot); fonts remain ~267.2KB across ten WOFF2 files. These are build inventory numbers, not transferred-page totals or Lighthouse claims.

## Tooling and quality

- `astro check` for Astro/TypeScript diagnostics and Content Layer validation.
- Prettier 3 + official Astro plugin for source/config formatting only; docs are excluded from routine formatting scope.
- `npm run build` verifies static output and font emission.
- `npm run validate` chains check, format check and build.

Astro telemetry may need `ASTRO_TELEMETRY_DISABLED=1` in restricted CI/sandbox environments that cannot write user config. This is environment handling, not an application variable, so no `.env.example` was created.

## Future integration boundaries

- **Sitemap/canonical:** after verified production URL.
- **Header/Home:** Phase 5 prototype implemented; future data/navigation panels remain content-gated.
- **Product routes/cards:** 450SR visual route exists as `draft`/`noindex`; reusable production PDP/cards still require page-level validation and publication gate.
- **Map, CRM, forms, analytics, CMS:** only after provider/workflow/legal decisions; islands/server routes added narrowly.
- **Security headers:** deployment-specific configuration after origins/integrations are known.

## Official Astro references

- [Astro 7 release](https://astro.build/blog/astro-7/)
- [Install Astro](https://docs.astro.build/en/install-and-setup/)
- [TypeScript](https://docs.astro.build/en/guides/typescript/)
- [Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Images and Assets API](https://docs.astro.build/en/reference/modules/astro-assets/)
- [Fonts](https://docs.astro.build/en/guides/fonts/)
