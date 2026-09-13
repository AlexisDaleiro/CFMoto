# Form Requirements

Conceptual specification only. Provider, endpoint, CRM and final legal text remain client decisions.

## Shared rules

- Single-column by default; group only tightly related fields.
- Mark required fields in label and explain convention before form.
- A valid contact method means at least one syntactically valid phone or email.
- Never use `type=number` for telephone; preserve `+`, spaces and leading zeroes.
- Autocomplete tokens where appropriate (`name`, `tel`, `email`, address-level1).
- Validate client-side for speed and server-side as authority.
- On failure retain non-sensitive entered data, show summary, link/focus first invalid field and use specific recovery copy.
- Disable/dedupe repeat submit while pending; on network uncertainty explain whether retry is safe.
- Do not log message/contact PII in analytics.

## Quote

### Purpose and valid lead

Capture a request with valid contact, identifiable purchase intent/product/category and successful antispam validation.

| Field             | Requirement            | Rule                                                                                                |
| ----------------- | ---------------------- | --------------------------------------------------------------------------------------------------- |
| Product/category  | Required               | Product preselected from context; standalone permits category then product/“Necesito asesoramiento” |
| Name              | Required               | Human-readable; trim; reasonable max length                                                         |
| Phone             | Conditionally required | Required when email absent or phone preferred; accept Uruguay/international formatting              |
| Email             | Conditionally required | Required when phone absent or email preferred; syntax + max length                                  |
| Preferred contact | Required               | Phone, WhatsApp or email; chosen channel must have corresponding value/capability                   |
| Department        | Required               | Controlled Uruguay list; supports routing without precise location                                  |
| Preferred dealer  | Optional               | Only verified sales locations; preserve “Sin preferencia”                                           |
| Message           | Optional               | Max length; plain text; never required for known product intent                                     |
| Consent           | Required               | Versioned privacy acknowledgement; marketing consent separate and optional if ever added            |

### Context propagation

Trusted server mapping from IDs: `vehicleId`, `category`, `locationId`, `sourcePath`, `experienceId`, `campaignId`, UTM allowlist. Hidden values are untrusted input and must be validated. Display preselected model/dealer so the user knows what is sent and can change it.

### Success

- Heading: solicitud recibida.
- Restate model/category and preferred contact channel, not full contact details.
- Explain that team/dealer will contact; response time only if SLA approved.
- Reference ID if provider supports it.
- Actions: return to model, find dealer; WhatsApp as optional faster channel without implying duplicate lead is needed.

## Test ride

### Purpose

Request coordination. Copy must state that submission is not a confirmed reservation or proof of vehicle availability.

| Field                     | Requirement        | Rule                                                                 |
| ------------------------- | ------------------ | -------------------------------------------------------------------- |
| Product                   | Required           | Only models marked test-ride eligible; preselect from PDP/compare    |
| Name                      | Required           | Same shared validation                                               |
| Phone/email               | At least one       | Same conditional rules                                               |
| Preferred contact         | Required           | Must match supplied channel                                          |
| Department                | Required           | Controls eligible location set                                       |
| Dealer                    | Optional initially | Only locations with verified `testRide`; “Ayúdenme a elegir” allowed |
| Availability note/message | Optional           | Free text, not a calendar booking                                    |
| Consent                   | Required           | Privacy acknowledgement; marketing separate                          |

Do not request date/time until operations confirms availability and scheduling workflow. If no eligible dealer is known, accept a general request only if routing owner exists; otherwise explain and offer Dealer/Cotizar.

### Success

Confirm receipt and state that availability, dealer and timing require subsequent confirmation. Provide model and chosen/expected area. Do not add to a calendar.

## Contact

For inquiries not better served by Quote, Test ride or Service.

| Field             | Requirement  | Rule                                                                                      |
| ----------------- | ------------ | ----------------------------------------------------------------------------------------- |
| Topic             | Required     | General, commercial, service, parts, press/partnership, other; may redirect before submit |
| Name              | Required     | Shared validation                                                                         |
| Phone/email       | At least one | Shared validation                                                                         |
| Preferred contact | Optional     | If present must match provided channel                                                    |
| Message           | Required     | Identifies intent; max length and plain text                                              |
| Department        | Optional     | Ask only if routing benefits                                                              |
| Consent           | Required     | Privacy acknowledgement                                                                   |

When topic is quote/test ride/service/parts, explain and link to the specialized flow while preserving no sensitive data until user chooses; do not silently reroute an already submitted request.

## Validation timing and messages

- Validate format on blur only after interaction; validate all on submit.
- Required: `Ingresá tu nombre.`
- Conditional contact: `Ingresá un teléfono o un email para poder responderte.`
- Mismatch: `Elegiste WhatsApp como contacto; ingresá un teléfono válido.`
- Product unavailable: `Este modelo no está disponible para esta solicitud. Elegí otro modelo o contactanos.`
- Server: `No pudimos enviar la solicitud. Tus datos siguen en el formulario; revisalos e intentá nuevamente.`
- Unknown outcome: `No pudimos confirmar el envío. No vuelvas a enviar todavía; usá [canal alternativo] o esperá la confirmación.` only when backend truly cannot dedupe/status.
- Antispam: explain failure and offer accessible retry; never generic “Something went wrong”.

## Accessibility

- Native labels and controls; instructions referenced with `aria-describedby`.
- Errors associated with fields; summary receives focus on failed submit.
- Required/invalid state conveyed programmatically and in text.
- Dynamic dealer/model eligibility announced with `aria-live="polite"` after user action.
- Success heading receives focus; browser history/back does not resubmit.
- CAPTCHA, if unavoidable, requires accessible alternative; prefer invisible risk signals + honeypot/rate limit.
- 200% zoom/reflow and mobile keyboard must not hide error/action.

## Privacy and security

- Data minimization; no precise geolocation in forms unless explicitly needed/consented.
- CSRF where applicable, server validation/sanitization, allowlisted IDs, rate limit, honeypot and provider-side abuse monitoring.
- Consent version, timestamp and source stored according to approved policy.
- Marketing consent is never bundled with operational response consent.
- Retention, recipients, cross-border processing and deletion workflow require legal/client approval.

## Spam and failure operations

- Layer defenses: time trap/honeypot, rate limits per risk, duplicate detection and monitoring before interactive challenge.
- Log event IDs/status, not raw PII.
- Define provider timeout/retry/idempotency and dead-letter/manual fallback.
- Alert on submission failure rate and routing failure, not only frontend exceptions.
