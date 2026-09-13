# Analytics Requirements

## Measurement model

Analytics distinguishes:

- **Valid lead:** successfully accepted quote/test ride/contact submission with valid contact, identifiable intent and passed antispam.
- **Assisted conversion:** WhatsApp, phone or directions click. It expresses intent but is not a confirmed lead or sale.
- **Business outcome:** qualified/contacted/won lead, available only through CRM/offline integration.

Primary KPIs: valid leads by type/model/source, PDP→lead rate, compare→lead rate and experience-assisted conversions. Secondary: discovery use and locator contacts. Pageviews alone are diagnostic.

## Priority events

| Event                           | Trigger                            | Business purpose        | Core properties                                               |
| ------------------------------- | ---------------------------------- | ----------------------- | ------------------------------------------------------------- |
| `product_viewed`                | Meaningful PDP view                | Product demand          | vehicleId, category, family, availability, sourceContext      |
| `filter_used`                   | Filters applied                    | Discovery effectiveness | category, filterKeys, resultCount                             |
| `compare_added`                 | Vehicle added                      | Shortlist intent        | vehicleId, category, selectedCount, sourceContext             |
| `compare_completed`             | User views 2+ models/spec groups   | Decision engagement     | category, vehicleIds, selectedCount                           |
| `quote_started`                 | First intentional form interaction | Funnel start            | vehicleId/category, sourceContext, locationId?                |
| `quote_submitted`               | Backend accepts valid lead         | Primary conversion      | leadReference, vehicleId/category, sourceContext, locationId? |
| `test_ride_started`             | First intentional form interaction | Funnel start            | vehicleId, sourceContext, locationId?                         |
| `test_ride_submitted`           | Backend accepts valid request      | Primary conversion      | leadReference, vehicleId, sourceContext, locationId?          |
| `whatsapp_clicked`              | External handoff initiated         | Assisted conversion     | contextType, vehicleId?, locationId?, sourceContext           |
| `location_viewed`               | Detail/result intentionally opened | Network interest        | locationId, entryType (dealer/service), capabilities          |
| `location_contacted`            | Phone/email action initiated       | Assisted conversion     | locationId, channel, entryType                                |
| `directions_clicked`            | Directions handoff                 | Assisted conversion     | locationId, entryType                                         |
| `experience_product_transition` | Experience→product/family click    | Editorial assistance    | experienceType, destinationType, vehicleId/family?            |

`contact_submitted` may be added for general contact but should not be counted as a commercial lead without topic/qualification.

## Event rules

- `started` fires once per form/session after meaningful field interaction, not on page load.
- `submitted` fires only after authoritative backend acceptance, never on button click.
- `compare_completed` fires once when at least two models and comparison content are viewed; additions remain separate.
- External actions fire immediately before handoff, without blocking navigation.
- Result/card impressions are omitted from v1 unless a concrete analysis requires them.
- Do not send contact values, free text, precise coordinates or other PII.

## Shared properties

Use stable controlled IDs: `vehicleId`, `category`, `family`, `locationId`, `experienceType`, `campaignId`, `sourceContext`, `deviceClass` if supplied by platform, `resultCount`. UTM values are allowlisted/normalized. Avoid page titles as identifiers.

## Funnels

1. Listing view → filter → PDP → quote start → quote submit.
2. Add compare → compare completed → PDP/quote/test ride → submit.
3. Experience → family/product → PDP → conversion.
4. Dealer/service search → location view → contact/directions.

## Quality and governance

- Event dictionary has owner, version, trigger and QA case.
- Prevent duplicate submits/events across retries and SPA-like interactions.
- Consent mode and vendor selection wait for legal/client decision.
- Reconcile accepted lead counts with backend/CRM; analytics is not system of record.
- Define retention/access and filter internal/staging traffic.
- Dashboard separates primary leads, assisted actions and operational failures.

## Operational events outside marketing analytics

Monitor `form_submission_failed`, `lead_routing_failed`, location data stale and 404/redirect misses in observability/logging. Do not mix them with conversion KPIs.
