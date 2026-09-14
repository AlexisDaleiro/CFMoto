# Phase 7B — Dealer, Service & Commercial Lead UX

## Locations source

Ten records were transcribed from the current public CFMOTO Uruguay Service page on 2026-09-14. Every entry preserves:

- `source.type: publicCurrentSite`;
- `source.url: https://cfmotouruguay.com/service/`;
- `source.capturedAt: 2026-09-14`;
- `verificationStatus: needsClientValidation`.

Publication on the current website is evidence for the Service listing, not authoritative master data. Phase 7B asserts only `service: true`. No sales, parts, test ride, WhatsApp, hours or coordinates were inferred.

## Locator architecture

`locations` is an Astro Content Layer collection validated by `locationSchema`. `/service/` projects entries with Service capability, while `/concesionarios/` projects sales-capable entries. Both are views of the same entity; no Dealer/Service duplication exists.

`LocationDirectory` is list-first. It provides native text search, departments derived from current data, a live result count, URL state and an actionable empty state. Search normalizes case and diacritics. Without JavaScript, every card remains visible and all detail/phone links work. No map SDK or geolocation was added. Directions use an encoded textual search URL because exact coordinates are unavailable.

Each `/ubicaciones/[slug]/` route is generated from content and includes accessible breadcrumbs, postal address, published capabilities, a normalized `tel:` link and textual directions. It remains `noindex, nofollow`; no LocalBusiness schema is emitted for unvalidated records.

## Forms architecture

`LeadForm` powers `/cotizar/` and `/test-ride/` with products read from the existing `products` collection. `?product=slug` is checked against actual select options before preselection; unknown values are ignored with feedback.

The shared form includes labels, native inputs, autocomplete/inputmode, required-state instructions, conditional phone/email validation, preferred contact, department, optional message, inline errors, linked error summary, first-invalid focus and a focused success state. Field feedback begins after interaction; submit validates everything. Future server validation remains authoritative.

Test Ride product choice is explicitly demonstrative. It does not claim eligibility, a test unit, location, date or reservation. Product Detail exposes Quote in demo mode, keeps Test Ride gated by existing `cta.testRide`, and links to the honest commercial-network state.

## Demo mode and data handling

Forms never call `fetch`, email, webhook, API, database or CRM. They do not write form values to local/session storage, analytics or console. Submit prevents navigation, validates locally, clears the form from view and states that no data was sent. Without JavaScript the button stays disabled, preventing PII from falling into a query string or an unsupported static POST.

The consent sentence is visibly marked `LEGAL COPY — CLIENT VALIDATION REQUIRED`. Before public exposure, approved privacy copy, recipients, retention, routing, SLA, server validation and abuse controls are mandatory.

## WhatsApp

No WhatsApp action was activated. None of the public Service records identifies its phone explicitly as WhatsApp, and a mobile-looking number is not sufficient evidence. The schema supports a distinct WhatsApp contact for later verified data.

## Blocked integrations

- authoritative Dealer/Service master data and capabilities;
- verified WhatsApp, hours and coordinates;
- CRM/provider, recipient, routing, SLA and lead ownership;
- test ride eligibility, locations and coordination process;
- approved consent/privacy/retention;
- server-side validation, rate limits, honeypot/Turnstile decision and delivery monitoring;
- analytics provider and conversion governance.

The full request is recorded in `CLIENT_DATA_REQUIREMENTS.md`.

## Suspicious public data

- BIKEUP publishes `2508 818`, a seven-digit number.
- MYM publishes `2508 8185`, similar to BIKEUP despite being listed in Salto; its source image also appears reused from another entry.
- CAFE RACE publishes `Abrosio Velazco`; the possibly incorrect spelling was not silently corrected.
- `CREDIBIKERSS` is preserved exactly as published.

These records remain visible in the demo as source-faithful data with client validation required.

## Accessibility and responsive validation

Service search, department selection, empty-state recovery, phone/detail links, Quote/Test Ride labels, errors, first-invalid focus, success focus and product-query feedback were tested in the browser. Service, Quote and Product Detail reflow without document overflow at 320, 375, 390, 430, 768, 1024, 1280, 1440 and 1920px. No gesture, color or map is required to complete a task.

## Performance

No dependency, map SDK, form framework, CAPTCHA or search library was added. Location filtering and Lead Form use route-scoped native JavaScript. The contextual Compare bar is deliberately omitted from Service, Dealer, Location and lead routes so it does not compete with or obscure the active task.

Final production-build measurements, uncompressed/minified where applicable:

- `/service/`: 1,847 bytes inline JavaScript total (568 Header + approximately 1,279 locator) and 23,332 bytes CSS.
- `/concesionarios/`: 568 bytes JavaScript and 23,332 bytes CSS.
- `/cotizar/` and `/test-ride/`: 4,106 bytes route-only Lead Form JavaScript + 568 bytes Header; 23,648 bytes CSS.
- Location detail: 568 bytes JavaScript and 19,075 bytes CSS.
- Product Detail after CTA integration: 1,144 bytes JavaScript and 27,981 bytes CSS.
- Complete build emits 63,625 bytes of unique route-split CSS and 10,422 bytes of external JavaScript across Compare and Lead Form bundles; no page loads all route assets.
- No new images or fonts were added.

`npm run validate` completed with 0 errors, 0 warnings and 0 hints and generated 27 static pages. `npm audit --audit-level=moderate` reported 0 vulnerabilities.
