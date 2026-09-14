# Phase 7A — Vehicle Compare Experience

## Architecture

`/comparar/` is a static Astro route with a small native client controller. Build-time content is projected through `src/lib/compare.ts`; the browser receives only product identity, routes and verified comparison rows required by the interface. Product cards, product detail and the global contextual bar link to the same route. No framework, state library, carousel or dependency was added.

The compare matrix is one semantic table for every category. Category character comes from product names and verified attributes, not parallel themes. An Apex-scale heading connects the experience to brand expression while the task area uses Engineered Clarity density, hierarchy and states.

## State and persistence

- Shareable source: `?models=450sr,800mt-touring`.
- Add intent: `?add=450sr`.
- Continuity: `localStorage` key `cfmoto.compare.v1`, containing only a JSON array of up to three validated slugs.
- URL state is authoritative when `models` is present; otherwise valid stored state is restored.
- `history.replaceState` keeps the normalized URL synchronized. Back/forward is re-read on `popstate`.
- Unknown slugs and duplicates are ignored with feedback. More than three retains the first three valid entries safely.
- Cross-category selections are blocked with a recoverable replace/cancel choice. No model is silently replaced.

## Data policy

`compareAttributes` stores `{ key, priority }` references, not copied values. `getCompareAttributes()` resolves each key against the product specifications and only returns an item when that specification is individually `verified`. When an attribute exists for one selected model but is absent from another, the corresponding cell says `No informado`. It does not infer zero, equivalence or absence of equipment.

Current comparable verified coverage:

- 450SR: displacement, maximum torque, curb weight.
- 800MT Touring: displacement, maximum power, maximum torque, curb weight.
- 700CL-X Heritage: displacement and maximum torque.
- ZFORCE 1000 Sport: displacement and curb weight.
- CFORCE 450L and UFORCE 800: no comparison claims while their data remains `needsReview`.

## Responsive behavior

Desktop presents the attribute column and up to three product columns. Mobile keeps the attribute column sticky inside a dedicated horizontal viewport and never compresses three product columns into unreadable cards. Previous/next buttons provide an explicit alternative to swipe. The document itself remains free of horizontal overflow from 320px upward.

## Accessibility

- Real `table`, `caption`, column headers, row headers and group headers.
- Buttons remain native controls with visible focus and minimum project target size.
- Selection feedback and conflicts use live status regions.
- Product removal has model-specific accessible names.
- Mobile navigation does not depend on gesture alone.
- The no-JavaScript fallback explains the limitation and links to complete category listings; products remain discoverable without scripting.
- Query and stored values are validated against build-time product data and inserted with DOM text APIs.

## Measurement hooks

Declarative `data-analytics-event` hooks exist for view, add, remove, clear and product open. No analytics provider is configured and no event is transmitted in Phase 7A.

## Performance

The feature uses native DOM, URL and storage APIs. Product imagery is intentionally omitted from the matrix: it avoids loading proposal or unverified media and keeps comparison decision-focused. The contextual bar is shared by `BaseLayout`; the larger controller loads only on `/comparar/`.

Production build measurements, uncompressed/minified where applicable:

- Compare controller: 6,316 bytes of route-only JavaScript.
- Shared inline JavaScript on Compare/Product pages: 1,144 bytes total for Header plus contextual compare behavior; no framework runtime.
- Compare route CSS: 26,701 bytes loaded across shared Header/BaseLayout and 7,626 route-specific bytes.
- Unique CSS assets emitted by the complete site: 54,009 bytes; route splitting prevents loading that total on Compare.
- Compare requests no product images. Existing catalog/detail Astro image behavior is unchanged.

`npm run validate` completed with 0 errors, 0 warnings and 0 hints; the static build generated 13 pages. `npm audit --audit-level=moderate` reported 0 vulnerabilities.

## Limitations and next boundary

- There is no cross-category comparison.
- There is no price row because verified price coverage is insufficient.
- Missing official imagery and incomplete specs reduce current row coverage.
- The available fixtures do not provide four verified models in one category, although the replacement path is implemented for future inventory.
- Phase 7A does not add Dealer, Service, forms, maps, CRM or an analytics provider.
- Phase 7B remains blocked until verified Location/NAP, capabilities, hours, contacts, coordinates and routing rules are supplied.
