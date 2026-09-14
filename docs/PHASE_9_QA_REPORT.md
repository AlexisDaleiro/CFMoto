# PHASE 9 — QA, Hardening & Technical Readiness

Audit date: 2026-09-14  
Scope: responsive behavior, accessibility, performance, SEO, security, content integrity and commercial-demo readiness for the Phase 0–8 implementation.

## Executive summary

Result: **PASS WITH DEFERRED BLOCKERS**.

The static build, content schemas and production compilation pass. Thirty-one public/demo pages were crawled with 1,528 internal links and no broken routes, duplicate IDs, missing primary headings, missing descriptions, images without dimensions or console errors. Representative flows were reviewed in the browser from 320 to 1920 px. The project is ready for a controlled commercial demo, but not for production: official media and brand inputs, commercial/location validation, lead infrastructure, legal copy, the real domain and deployment security configuration remain unresolved.

## Critical findings

No unresolved Critical finding was detected. No unresolved in-scope High finding remains.

The installed Astro 7.3.2 version is newer than the 7.2.8 patch for the August 2026 critical AVIF optimization advisory. `npm audit` reports zero vulnerabilities.

## Fixed findings

| Severity | Finding | Resolution |
| --- | --- | --- |
| High | A stale `localStorage` value could make the global Compare bar announce mixed categories or removed products before entering Compare. | The bar now derives valid slugs/categories from the content collection, removes unknown and cross-category entries, limits state to three and rewrites sanitized storage. |
| High | Invalid lead submission focused the first field instead of the error summary required by the accessibility contract. | The visible `role="alert"` summary now receives focus; field-level errors and `aria-invalid` remain available. |
| Medium | Catalog query parameters accepted unknown keys/values into client state. | Keys and values are allow-listed from the rendered controls; invalid state is announced and normalized with `replaceState`. |
| Medium | Page titles could duplicate the site name. | SEO title composition now appends the site name only when it is absent. |
| Medium | A development foundation route was emitted in the public build. | The tracked `/dev/foundation/` page was removed; the build now contains 31 intended routes. |
| Medium | The fixed Compare bar could cover final content and wrap poorly at 320 px. | The document reserves safe-area-aware bottom space only while the bar is visible; the bar wraps below 480 px. |
| Medium | Primary cyan controls could lose focus contrast on mixed surfaces. | High-importance controls now use a dual dark/light focus treatment. |
| Medium | Breadcrumb links were 21.7 px high on mobile. | Their interactive box now has a 24 px minimum height. |
| Medium | External map links did not explicitly include `noopener`. | Direction links now use `rel="noopener noreferrer"` and model/location-specific accessible names. |
| Low | Raw internal proposal/status wording appeared in customer-facing product and catalog text. | Labels were rewritten as demo/customer language without presenting proposal copy as official. |
| Low | Catalog filter chips exposed internal enum labels. | Active chips now use the localized labels already rendered in the form. |
| Low | Mobile height used only legacy viewport units. | Menu/reset foundations now include `svh`/`dvh` fallbacks. |
| Low | Horizontal experience navigation could clip keyboard focus. | The outer clipping rule was removed while the intended inner horizontal scroller remains. |

## Deferred findings

- **High — client/backend:** quote and test-ride flows are frontend demos only. Provider, routing, server validation, abuse protection, retention, consent/legal copy and privacy policy are not defined.
- **High — client/content:** prices, availability, product commercial actions, WhatsApp routing and several model facts remain unverified and are intentionally hidden.
- **High — client/assets:** Phase 5 product visuals are proposal assets with restricted prototype use; Experience lacks rights-cleared official media.
- **High — client/locations:** all ten published location records remain `needsClientValidation`; Dealer status, WhatsApp, hours and coordinates are not inferred.
- **High — deployment:** production domain, canonical origin, indexing policy, sitemap/robots strategy, redirects and edge security headers are not configured.
- **Medium — client/brand:** cyan, Barlow Condensed and Inter remain provisional pending official brand validation.
- **Medium — environment:** Firefox, Safari/WebKit, physical-device testing, axe and Lighthouse were unavailable in this workspace. The final deployed origin still requires those passes plus assistive-technology smoke testing.

## Responsive

Browser checks covered 320, 375, 430, 768, 1024, 1280, 1600 and 1920 px on Home, catalog, product, Compare, locations, lead, Experience and 404 routes. No horizontal document overflow was detected in the 64 route/viewport combinations. Mobile menu, fixed Compare bar, catalog cards, filter dialog, product hero/specifications and long current location names remain usable. A 320 px landscape-equivalent/reflow pass and elevated zoom produced no horizontal overflow.

The menu uses the native dialog model, locks document scroll, focuses Close on entry, closes with Escape and restores focus to Menu. Filter dialog Escape behavior also restores focus. The fixed Compare bar accounts for `env(safe-area-inset-bottom)`.

## Accessibility

- Every built page has one `h1`, a `main`, Spanish Uruguay language metadata and a skip link. The skip link was keyboard-tested and moves focus to `#main-content`.
- Heading hierarchy, landmarks, breadcrumbs, lists, product-card links, definition lists and comparison table semantics were inspected through the accessibility tree.
- Mobile menu, filter dialog, Compare conflict resolution and lead errors were tested with keyboard/focus behavior. Compare returns focus to the current/empty comparison heading after destructive state changes.
- Lead fields have programmatic labels, field errors, a focused summary and a status result. The successful demo path explicitly states that no information was transmitted.
- Images have contextual alt text and fixed dimensions. Proposal imagery is visibly identified as non-official.
- Token contrast samples pass WCAG AA: primary/page 16.82:1, secondary/page 6.38:1, inverted/dark 16.92:1, cyan/dark 7.53:1, on-cyan 8.32:1, link/light 5.86:1 and error/light 6.57:1.
- Motion remains removed/reduced under the existing `prefers-reduced-motion: reduce` rules.

Deferred accessibility validation: screen-reader testing on NVDA/VoiceOver, Safari/Firefox keyboard behavior and an axe scan on the deployed build.

## Performance

No dependency or framework was added. The final build emits:

- 9 unique CSS files, 68,724 bytes uncompressed across the whole build; this is 3,820 bytes below the Phase 8 figure because the public development fixture was removed.
- 1 external JavaScript file, 6,654 bytes, loaded only by Compare.
- Representative total client JS: Home/product/Experience 1,494 inline bytes; catalog 5,401 inline bytes; Service 1,847 inline bytes; lead route 4,656 inline bytes; Compare 568 inline + 6,654 external bytes.
- Representative CSS: 23,807 bytes Service, 24,123 lead, 24,358 Racing, 25,331 catalog, 27,176 Compare, 28,456 product and 28,662 Home.
- 12 responsive WebP derivatives, 640,650 bytes total, derived from the same two proposal sources. Astro selects the 768 px mobile source at 320 px and the 1280 px desktop source at 1280 px. Hero images reserve dimensions and use eager/high priority only for the probable LCP; absent media produces graphical composition rather than requests.
- 10 local WOFF2 files, 267,184 bytes total. Only the variable Inter UI font is preloaded; display fonts use `font-display: swap`.

No Lighthouse binary was installed, so no synthetic score is claimed. Performance decisions were verified through emitted-asset measurements, responsive-source inspection and the browser network/render state. No console warning/error appeared across the critical-route review.

## SEO

All 31 demo pages have a unique route-specific title or the intentional Home title, a meta description, Open Graph basics and `noindex, nofollow`. The title duplication bug was fixed. Internal category/product/location links resolve, and the 404 provides recovery paths.

The absence of canonical URLs, Product/Breadcrumb JSON-LD, sitemap and production robots rules is intentional while `baseUrl` and commercial facts are unresolved. Indexing must not be enabled by merely flipping one flag; the production-origin checklist must be completed first.

## Security

- `npm audit --audit-level=moderate`: zero vulnerabilities.
- Astro 7.3.2 is on the current upstream package version observed during this audit and includes the published 7.2.8 critical AVIF fix.
- No `set:html`, `innerHTML`, credential, secret, analytics transmission, API call, CRM call, query-string PII or form-value persistence was found.
- Query-driven catalog, location, lead preselection and Compare state are allow-listed/sanitized; output uses normal escaped Astro/DOM text APIs.
- External map links are protected with `noopener noreferrer`.

Hosting-level CSP, HSTS, `frame-ancestors`, `X-Content-Type-Options`, `Referrer-Policy` and `Permissions-Policy` remain a deployment blocker because no production platform/origin exists yet.

## Content integrity

Astro Content Layer validation passes for 6 products, 10 locations and 4 Experience entries. Product and Experience cross-references contain no missing slugs; product-related relationships do not cross categories. Verified product facts are the only facts used in stats/specifications/Compare. `needsReview` pricing, unknown availability, unsupported CTAs and empty optional modules are omitted.

All product/Experience narrative copy remains `proposal`. CFORCE 450L and UFORCE 800 stay identity-only where facts are inconsistent. All locations remain explicitly client-pending and only the published Service capability is represented. No price, stock, Dealer capability, event result, community size, technology claim, WhatsApp number or coordinate was invented.

## Browser validation

Chromium-based in-app browser:

- Critical routes: Home, all category/product patterns, Compare, Service/locations, lead flows, Experience and 404.
- Responsive matrix: 64 route/viewport combinations, zero horizontal-overflow failures.
- Interactions: mobile menu, skip link, catalog invalid query, filter dialog, Compare invalid/unknown/cross-category input, empty/current Compare states, lead error and success states.
- Console: zero warning/error entries during the final critical-route run.
- Static/no-JS: navigation, complete catalog cards, product specifications, location list, Experience content and 404 recovery are present in generated HTML. Filters degrade to the full list; Compare explains its JS requirement; lead submit stays disabled to avoid unsupported PII transmission.

Firefox/Safari/WebKit and physical devices were not available and remain a pre-production validation item.

## Production blockers

1. Approve official logo/brand assets, cyan and typography.
2. Replace proposal imagery with rights-cleared production media and approve public copy.
3. Validate the complete local product/pricing/availability dataset and commercial CTAs.
4. Validate each location's role, contact information, hours and coordinates.
5. Define lead backend/CRM, recipients, consent/privacy copy, retention, abuse protection and error handling.
6. Confirm WhatsApp number/routing and analytics/privacy requirements if those integrations will launch.
7. Configure production domain, canonical URLs, indexing, sitemap/robots, redirects, monitoring and edge security headers.
8. Run Lighthouse/axe, NVDA/VoiceOver, Firefox/Safari and physical-device regression on the deployed origin.

Demo readiness: **READY FOR COMMERCIAL DEMO**.  
Production readiness: **NOT PRODUCTION READY**.
