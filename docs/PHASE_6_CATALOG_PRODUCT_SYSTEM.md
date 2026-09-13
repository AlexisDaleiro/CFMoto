# Phase 6 — Catalog & Product System

Implementation record for the reusable vehicle catalog and product foundation.

## Architecture

- The `products` Content Layer collection remains the single source for identity, discovery metadata, media, technical values, commercial state and relationships.
- Static category entry points render one shared `CatalogPage`: `/motos/`, `/atv/` and `/side-by-side/`.
- One dynamic route, `src/pages/[category]/[slug].astro`, maps internal categories to the approved Spanish URL segments and renders one modular `ProductDetail` composition.
- The former hardcoded `src/pages/motos/450sr.astro` was removed only after the dynamic path generated the same public URL.
- Category helpers centralize labels and URLs; content inference supplies the product type. No parallel Product DTO exists.

## Components

- Catalog: `CatalogPage`, `CatalogFilters`, `ProductCard`.
- Product: `FeaturedProduct`, `ProductHero`, `KeyStats`, `Specifications`, `FeatureSection`, `RelatedProducts`, `ProductDetail`.
- Navigation: accessible `Breadcrumbs`; the existing header now links to real listing routes and current query names.
- Missing story, stats, specifications, colors, gallery, features and related sections are omitted when their safe content is absent. Gallery/colors/features have schema support but no invented UI content.

## Content migration

- 450SR is the full visual reference: three verified facts, grouped specifications and two explicitly proposal-only art-directed assets.
- 800MT Touring validates an Adventure/Touring identity with four individually verified facts and no invented media.
- ZFORCE 1000 Sport validates Side-by-Side with only its verified displacement and declared weight.
- 700CL-X Heritage is a partial but safe motorcycle record.
- CFORCE 450L and UFORCE 800 remain identity-only, `needsReview` records with no doubtful specs.
- All commercial actions are disabled and all prices, availability, colors and feature claims remain absent or non-public.

## Verification guard

`src/lib/products.ts` exposes small, explicit helpers. Key stats/specifications require their own `verified` state; price is returned only when its price-level verification is `verified`. Overall `needsReview` cannot accidentally promote a child field. Creative narrative uses `copyStatus: proposal`, distinct from factual claims.

## Filters and URL strategy

- Motorcycle filters: family, usage and verified displacement buckets; sort by editorial relevance or displacement.
- ATV currently has no filter because its sole safe record would make every dimension redundant.
- Side-by-Side filters use family and usage; no motorcycle-specific assumption is copied.
- State uses repeatable query parameters: `family`, `usage`, `displacement`, `sort`.
- Apply, count, active-filter removal, clear, empty state, reload and browser history are supported.
- Desktop uses an in-flow sticky sidebar at 1024px+. Mobile uses native `dialog`; selection applies only on submit and focus returns to the trigger.
- JavaScript is progressive enhancement. Plain HTML still exposes every vehicle, product link and specification. Filtered query variants stay `noindex`; no canonical is emitted while `baseUrl` is unresolved.

## Responsive and media

- Cards move from one column to two at 768px and three at 1280px where space permits.
- Filters switch at the task breakpoint of 1024px. Targets preserve the 44px project minimum.
- Product hero keeps Phase 5 450SR desktop/mobile art direction. Products without authorized media use a reserved graphic canvas without pretending it is product photography.
- Astro Image generates card widths independently from hero widths, reserves aspect ratio and lazy-loads cards. Product hero is eager/high priority as the LCP candidate; gallery media would be lazy.

## SEO and structured data

Titles, descriptions and Open Graph defaults are emitted through the existing SEO component. All Phase 6 pages remain preview-safe `noindex, nofollow`.

Canonical URLs, Product JSON-LD and offer/availability schema are intentionally deferred: domain, prices, stock and commercial status are not verified. Breadcrumb markup is semantic HTML; Breadcrumb JSON-LD is deferred with the verified absolute site URL.

## Performance

No dependency, UI framework, state store or carousel was added. Client JavaScript consists of the existing header controller plus the catalog filter enhancement on listing pages. CSS remains scoped and shared components prevent per-product duplication. Build measurements are recorded after final validation.

## Limitations and production blockers

- Proposal 450SR media must be replaced by approved production assets.
- 800MT Touring, 700CL-X Heritage, CFORCE 450L, ZFORCE 1000 Sport and UFORCE 800 need approved local media/color sets.
- CFORCE 450L and UFORCE 800 identity/spec inconsistencies require client resolution.
- Prices, inventory, availability, model years, product claims, CTA eligibility, WhatsApp/routing and canonical production domain remain blocked.
- Compare selection/state, dealer/service and lead flows belong to Phase 7 and were not implemented here.

## Validation record

- `npm run validate`: PASS — Astro check reports 0 errors, 0 warnings and 0 hints; Prettier check passes; static build generates 12 pages.
- `npm audit --audit-level=moderate`: PASS — 0 vulnerabilities.
- Route smoke test: PASS — `/`, `/motos/`, `/motos/450sr/`, `/motos/800mt-touring/`, `/atv/`, `/side-by-side/` and `/side-by-side/zforce-1000-sport/` return 200 with the expected H1.
- Responsive measurement: PASS at 320, 375, 390, 430, 768, 1024, 1280, 1440, 1600 and 1920px; `scrollWidth` never exceeds `clientWidth`. Catalog grid is one/two/three columns at the intended ranges; filters switch from dialog to sidebar at 1024px.
- Visual review: PASS for Home/catalog and 450SR, 800MT Touring and ZFORCE 1000 Sport heroes. The 450SR retains Phase 5 vehicle prominence, type scale, surface balance and desktop/mobile crop.
- Interaction/accessibility smoke: PASS — native dialog naming/focus, keyboard-exposed native inputs, grouped fieldsets/legends, applied count live region, active-filter removal, clear, empty state, URL state and focus restoration were verified. Cards expose separate linked headings without nested controls; breadcrumbs and specifications use semantic structures.
- No-JS/static HTML: PASS — complete cards, links, verified specification values and navigation fallback exist in built HTML before scripts run. Filters degrade to the full catalog.
- Client JavaScript: Home/product pages 568 bytes minified inline (header only); listing pages 3,609 bytes total minified inline (header + filter enhancement); 0 external JS files and no hydrated framework.
- CSS: 45,427 bytes uncompressed across six generated shared/scoped assets, approximately +10.1KB from Phase 5 for the complete catalog/product system.
- Images: 12 responsive WebP outputs, 640,650 bytes total. They are derivatives of the same two proposal assets; no new generated scenes were introduced.
