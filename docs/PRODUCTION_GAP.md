# CFMOTO Uruguay — Demo to Production Gap

## Current state

The project is a functional redesign proposal with validated architecture and representative end-to-end journeys. It is more advanced than a static mockup: catalog, dynamic product pages, filters, Compare, Service search, lead UX, brand experiences, responsive behavior and content validation operate in the browser.

It is not a finished official site. Production requires CFMOTO authority, official content and connected operations.

## What the demo already proves

- One shared design system can support brand expression and precise decision interfaces.
- A structured Product collection can generate motorcycle, ATV and Side-by-Side catalogs and details.
- Compare accepts up to three compatible vehicles and uses verified values only.
- Locations can power Service and future Dealer views without duplicate records.
- Quote and Test Ride can preserve product context and provide accessible validation.
- Racing, Adventure, Technology and Community can connect brand content to product.
- The static Astro foundation remains lightweight, responsive and progressively enhanced.

## Production workstreams

| Workstream     | Current demo state                            | Required production outcome                                                               | Primary owner               |
| -------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------- | --------------------------- |
| Brand system   | Provisional cyan and fonts                    | Approved logo files, color specification, typography and usage rules                      | CFMOTO Marketing            |
| Product media  | Two proposal-only 450SR assets                | Rights-cleared media, crops, alt text and model/variant mapping                           | CFMOTO Marketing / Product  |
| Catalog data   | Six representative records; partial coverage  | Authoritative local range, variants, years, specs, price and availability                 | CFMOTO Product / Commercial |
| Locations      | Ten public Service records pending validation | Confirmed Dealer/Service/parts/test-ride roles, NAP, contacts, hours and coordinates      | CFMOTO Commercial / Network |
| Leads          | Frontend demo; no transmission                | Server validation, CRM/email delivery, routing, notifications, fallback and monitoring    | CFMOTO Commercial / IT      |
| Test Ride      | Demonstrated UX only                          | Eligible models/locations, coordination rules, ownership and approved wording             | CFMOTO Commercial           |
| Legal/privacy  | Placeholder consent                           | Approved privacy policy, consent version, retention and user rights                       | CFMOTO / Legal              |
| Analytics      | Event hooks only                              | Provider, consent, events, attribution and CRM/offline feedback rules                     | CFMOTO Marketing / IT       |
| SEO            | Preview-safe noindex                          | Production domain, canonicals, sitemap, robots, redirects and structured data             | Delivery team + CFMOTO      |
| Infrastructure | Local/static build                            | Client-owned hosting, DNS, SSL, preview, security headers, rollback and monitoring        | CFMOTO IT / Delivery team   |
| Browser QA     | Chromium and responsive matrix                | Deployed-origin Lighthouse/axe, Safari/Firefox, physical devices and assistive technology | Delivery team               |

## Recommended production sequence

Schedule begins only after CFMOTO appoints owners and supplies the minimum start inputs. A realistic planning range is 10–14 calendar weeks; content volume, CRM complexity and approval delays can extend it.

### Stage A — Final discovery and operating decisions

Typical focus: one to two weeks.

- Confirm business objectives, audiences, catalog scope and launch priorities.
- Identify Marketing, Commercial, Product, Network, IT and approval owners.
- Decide managed content versus CMS requirement.
- Define lead destination, routing, SLA and analytics/privacy constraints.

Exit: signed scope, decision log and accepted content templates.

### Stage B — Official assets and master data

Typical focus: two to four weeks, partly parallel with Stage C.

- Receive and validate brand kit, product media, catalog and location master data.
- Resolve CFORCE 450L, UFORCE 800 and other known inconsistencies.
- Approve launch copy and commercial states.
- Produce required crops or commission missing media.

Exit: launch dataset with named owners and verification dates.

### Stage C — Production integration

Typical focus: two to four weeks.

- Connect lead delivery and server-side validation.
- Implement consent, abuse controls, error handling and monitoring.
- Configure analytics events and approved campaign attribution.
- Configure client-owned hosting, preview and deployment workflows.

Exit: integration acceptance in a protected staging environment.

### Stage D — Migration and editorial preparation

Typical focus: two to four weeks depending on catalog/media volume.

- Migrate the approved product range and locations.
- Replace all proposal assets and copy.
- Prepare initial Experience content and campaign entries.
- Validate redirects from meaningful legacy URLs.

Exit: complete production candidate with no proposal-only public content.

### Stage E — QA, acceptance and launch

Typical focus: one to two weeks after content freeze.

- Run functional, content, responsive and accessibility regression.
- Test lead delivery, routing, notifications and CRM outcomes.
- Run Lighthouse/axe and Safari/Firefox/physical-device passes.
- Validate SEO, structured data, redirects, robots and monitoring.
- Obtain written content, commercial and technical acceptance.

Exit: launch approval and rollback plan.

## Launch gates

Production cannot launch until all gates pass:

- no proposal/restricted asset appears as official content;
- catalog, price and availability have authoritative owners;
- locations and public contact channels are confirmed;
- all PII travels through an approved, monitored and legally reviewed flow;
- domain, SSL, redirects, security headers and backups/rollback are configured;
- indexing is enabled only on the correct production origin;
- analytics and consent behavior match the approved policy;
- critical browser/device/accessibility testing passes;
- CFMOTO signs content and commercial acceptance.

## Risks if inputs arrive late

- Missing media weakens the intended product and brand presentation.
- Unresolved master data forces modules to remain hidden and limits Compare.
- Undefined CRM/routing keeps forms in demo mode.
- Legal delays block collection of personal information.
- Domain or DNS delays block final SEO, security and launch tests.
- Fragmented stakeholder feedback creates rework and change requests.

The project plan should pause or rebaseline affected milestones rather than substitute invented data or temporary unsafe integrations.

## Public exposure before production

Keep the demo private/noindex, clearly label it as a non-official proposal and add access protection if the URL circulates beyond the meeting group. Do not run paid media, collect real leads or present the proposal domain as CFMOTO Uruguay's official website.
