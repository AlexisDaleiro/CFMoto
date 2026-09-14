# Content Model

Stable Phase 4 model aligned with `src/content/schemas.ts`. Astro Content Layer validates local entries through `src/content.config.ts`; the first collection is `products`. Future collections reuse the governance primitives here rather than inventing parallel shapes.

## Conventions

- Internal enum/key values use stable English camelCase or kebab-case IDs; UI labels remain Spanish Uruguay.
- Content slugs are lowercase kebab-case.
- Public technical/commercial facts require source, verification status and date when verified.
- Absence is modeled explicitly; no empty string or unexplained dash stands in for unknown/unavailable/not applicable.
- Collection data is not automatically publishable. Route queries must filter `publicationStatus` and verification eligibility.

## Verification

```text
status: verified | needsClientValidation | needsReview | unverified | deprecated
source:
  label: string
  url?: valid URL
  market?: string
verifiedAt?: date
note?: string
```

Rules:

- `verified` public facts need `verifiedAt` before production publication policy accepts them.
- `needsClientValidation` identifies public-source operational data that is useful for a demo but is not authoritative master data.
- `needsReview` can validate a draft/test record but is never treated as commercial truth.
- `unverified` is retained for research/migration only.
- `deprecated` remains traceable but must not feed current product claims.

## Product collection

Location: `src/content/products/*.json`; loader: Astro `glob()`; schema: `productSchema`.

### Identity and publication

- `productId`: stable cross-system ID.
- `slug`: canonical product slug.
- `name`: official local model name.
- `category`: `motorcycle | atv | side-by-side`.
- `family`: SR, MT, CFORCE, UFORCE, etc., as validated.
- `modelYear?`: explicit integer when known.
- `publicationStatus`: `draft | active | unlisted | legacy | discontinued`.
- `locale`: currently `es-UY`.

### Discovery and narrative

- `descriptor?`: short decision-oriented description.
- `description?`: longer product introduction.
- `copyStatus`: `verified | proposal`; separates approved copy from creative positioning used by the prototype.
- `usage[]`: controlled discovery values (`sport`, `naked`, `adventure`, `heritage`, `recreation`, `utility`, `work`). It is filter metadata, not a required URL level.
- `compareGroup`: stable compatibility group; Phase 1 still prohibits cross-category comparison.
- `availability`: `available | onRequest | temporarilyUnavailable | unknown`.
- `features[]`: optional typed narrative modules with their own verification.
- `relatedProducts[]`: optional explicit slugs, maximum four; rendering still enforces same-category relationships.

These fields were added for the Phase 6 listing and modular product page. They remain controlled and are not placed in an arbitrary metadata bag. `compareAttributes` and `cta` remain the existing equivalents of compare data and commercial actions; no parallel DTO was introduced.

### Key stats and specifications

`keyStats` (maximum five) and `specifications` share a structured specification value:

```text
key: camelCase identifier
label: Spanish display label
group: engine | chassis | dimensions | electronics | capacities
status: available | notInformed | notAvailable | notApplicable
value: string | number | boolean       # only when available
unit?: string                          # only when available
displayValue?: string                  # approved exceptional presentation
note?: string                          # unavailable states
verification: Verification
```

This remains flexible across motorcycles, ATV and Side-by-Side while preserving controlled groups, keys, states and units. Category-specific dictionaries can narrow allowed keys later without replacing the base.

`compareAttributes` does not duplicate technical values. It is an ordered list of references into `specifications`:

```text
key: camelCase specification key
priority: integer 1..100
```

The compare projection resolves these references at build time and includes only specifications whose own verification status is `verified`. A missing, unknown or unverified specification therefore cannot become a comparison claim accidentally.

### Price

Discriminated by `type`:

- `fixed`: numeric `amount`, `currency`, optional tax/validity/disclaimer and verification.
- `startingAt`: same structure, explicitly a starting price.
- `enquire`: no numeric amount; optional note and verification.
- `unavailable`: no numeric amount; optional note and verification.

Currencies currently validate `USD | UYU`. Formatting such as `USD 7.990` belongs to a locale-aware formatter, not stored presentation text. No FX conversion exists.

### Images

Every image records:

- stable `id` and role: `hero | cutout | gallery | feature | thumbnail`;
- `src`, required `alt`, optional dimensions/aspect/focal point;
- optional `colorRef`;
- rights status: `unknown | reference | proposal | production`, with optional owner, allowed use and expiry.

Optimizable content media belongs under `src/assets` and is imported/used with `astro:assets`. `public` is reserved for exact-URL assets such as verified logos, manifest or robots resources. Production cannot publish unknown/reference-only rights.

### Color variants

Each color contains `id`, official `name`, optional `visualReference`, related `imageRefs` and availability (`available | onRequest | unavailable | unknown`). A flat hex is never the only identity because commercial finishes may not map to one color.

### CTA availability

`cta.quote`, `cta.testRide`, `cta.whatsapp` and `cta.dealer` are explicit booleans. Content validity alone does not enable a CTA; operations/dealer eligibility must also be true.

## Current fixtures

- `450sr.json`
- `700cl-x-heritage.json`
- `800mt-touring.json`
- `cforce-450l.json`
- `uforce-800.json`
- `zforce-1000-sport.json`

All remain `draft`, unavailable/unknown for public commerce and have CTAs disabled. CFORCE 450L and UFORCE 800 remain identity-only `needsReview` fixtures. 450SR, 800MT Touring and ZFORCE 1000 Sport demonstrate the shared detail architecture using only the individual values marked `verified`; 700CL-X Heritage is a safe partial listing record. The two generated 450SR images remain `proposal`. No price, availability, color, feature or commercial action is promoted to verified.

## Publication gate

A later route may publish a product only when all required conditions are enforced centrally:

1. `publicationStatus === active` (or explicitly approved unlisted route behavior).
2. identity/category/family/market verified.
3. public claims/key stats/specs individually verified.
4. hero/cutout relationship and production rights confirmed.
5. price/availability valid when displayed.
6. CTA flags consistent with current operations and Locations.

Phase 6 renders these fixtures only in a `noindex` prototype environment. This validates templates but does not satisfy the production publication gate above.

## Location collection

Location: `src/content/locations/*.json`; loader: Astro `glob()`; schema: `locationSchema`.

- `name`, `slug`, `department`, `locality` and `address` establish identity and textual location.
- `phone` and optional `whatsapp` separate visible formatting from the safe link value. A mobile number is not promoted automatically to WhatsApp.
- Optional `coordinates` and `hours` remain absent until a reliable source exists.
- `capabilities` may explicitly assert `sales`, `service`, `parts` or `testRide`; omitted capabilities are unknown, not false.
- `source` records `type`, URL and capture date.
- `verificationStatus` and optional `verifiedAt` govern publication and future structured data.

Phase 7B contains ten Service records transcribed from the current public CFMOTO Uruguay Service page on 2026-09-14. Their `source.type` is `publicCurrentSite` and their `verificationStatus` is `needsClientValidation`. Only `service: true` is asserted. Dealer, parts, test ride, WhatsApp, hours and exact coordinates are not inferred. Dealer and Service remain two views over this single Location collection.

### Experiences and articles

Add only when Phase 5/editorial implementation needs entries. Experience type is Racing, Adventure, Technology or Community; every proof/relationship retains source and local applicability. Articles need dates, rights and related products/experiences.

### Campaigns and lead context

Campaigns require lifecycle, approval, asset rights, product relations and tracking. Lead context is application data—not editorial content—and belongs behind a validated server/CRM boundary later.

## Schema evolution

- Add fields for a demonstrated content/UI/query need.
- Prefer explicit optional/discriminated fields over `metadata: unknown`.
- Breaking enum/key changes need migration and ADR if they affect URLs, comparison or integrations.
- `src/content/schemas.ts` is executable truth; this document explains contract and publication rules.
