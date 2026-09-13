# CFMOTO Uruguay Design System

Fuente principal de Phase 3. `DESIGN_TOKENS.md` contiene valores; `COMPONENT_SPEC.md` contratos de componentes; `RESPONSIVE_SYSTEM.md` cambios por rango; `ACCESSIBILITY_DESIGN_SPEC.md` el contrato inclusivo. Phase 2 permanece como rationale creativo.

## 1. Principles

1. **Expressive where emotion matters. Precise where decisions matter.**
2. **One system, two densities.** Apex y Engineered Clarity comparten foundations y componentes; cambian escala, espacio, composición, fotografía y ritmo.
3. **Product first.** La máquina domina; interfaz y gráfica revelan forma, dato y uso.
4. **Evidence over decoration.** Dato, línea, coordenada, diagrama o claim necesita función y fuente.
5. **Calm conversion.** Formularios, compare, filtros, dealer y service reducen expresión para aumentar confianza.
6. **Content-resilient.** Español, nombres largos, datos/media ausentes y estados comerciales reales no rompen el sistema.
7. **Accessible by contract.** Contraste, foco, targets, reduced motion, semántica y teclado se diseñan antes de componentes finales.

## 2. Creative modes

Los modos son compositivos, no temas ni props globales incompatibles.

| Dimension        | Expressive                                                                 | Precision                                                           |
| ---------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Primary contexts | Home, campaign, product opening, Racing, Adventure, brand story            | Catalog, filters, Technology, specs, compare, forms, dealer/service |
| Density          | Immersive/editorial                                                        | Functional/editorial                                                |
| Scale            | Display XL/L, wide/product/full canvas                                     | H1–H4, body, standard/wide container                                |
| Media            | Dominant/action/full-bleed                                                 | Studio/macro/supporting                                             |
| Composition      | Asymmetric, selective overlap                                              | Aligned, grouped, scanning-first                                    |
| Motion           | Standard/expressive when useful                                            | Fast/standard feedback                                              |
| Shared identity  | Same cyan, type families, radii, controls, icons, state and focus language |

A module chooses density by user intent. A 450SR hero can be Expressive; its price state, actions and specs use Precision primitives inside the same composition. A Quote form never becomes Expressive merely because it follows Racing.

## 3. Colors

Compact palette and semantic roles live in `DESIGN_TOKENS.md`.

- CFMOTO cyan working value: `#00B7E5`, **PROVISIONAL — CLIENT BRAND VALIDATION REQUIRED**.
- Near-black `#080C0F`, charcoal `#12191D`, off-white `#F4F6F6` and white establish light/dark surfaces.
- Cyan is action, selection, state indicator and rare brand pulse. It is not body text on white, universal border or permanent glow.
- Primary action uses near-black on cyan. Light-surface links use accessible deep cyan/info.
- Semantic success/warning/error/info remain distinct from brand and always add text/icon.

Light/dark are surfaces in one narrative, not user-selectable themes. No toggle is specified.

## 4. Typography

Provisional pairing:

- **Display:** Barlow Condensed Variable, 700 for model/display/stat.
- **UI/body:** Inter Variable, 400/600/650–700 as required.

Both are open-source candidates, not official CFMOTO fonts. Client brand files override through family tokens after license, Spanish glyph, numeral, metric and performance validation.

Display is restricted to short identity/emotion; UI owns navigation, paragraphs, forms, tables and labels. KeyStats deliberately pair display numerals with UI units/labels, creating the bridge between modes.

Roles: Display XL/L, H1–H4, Body L/M/S, Label, Caption, Stat XL/M, Button and Navigation. Exact min/max/leading are in `DESIGN_TOKENS.md`. Do not invent per-page sizes.

## 5. Grid

Responsive 4/8/12 columns:

- 4 columns below 768px.
- 8 columns at 768–1023px.
- 12 columns from 1024px.

Gutters grow 12 → 16 → 20 → 24px; margins 16 → 24 → 32 → 48 → 64 → 80px across defined ranges. The grid aligns identity, evidence and actions; Expressive layouts may span/break it with media, never with long copy or essential controls.

## 6. Containers

- `readable` 720px: editorial copy.
- `standard` 1200px: forms, dealer/service, navigation, most listings.
- `wide` 1440px: compare, broad product/editorial layouts.
- `product` 1600px: product hero/canvas.
- `full`: media/surface only.

Containers use responsive margins. At ultrawide, content caps and media/negative space expand.

## 7. Spacing and density

4px base scale with named steps from 4 to 160px. Internal component space is normally 8–24px; module gap 24–40px.

- **Immersive:** 64–96px mobile, 128–160px desktop; little information, maximum image/type presence.
- **Editorial:** 48–64px mobile, 80–96px desktop; story/evidence balance.
- **Functional:** 32–48px mobile, 48–64px desktop; higher density structured by line, headings and groups.

Do not shrink touch targets to achieve functional density.

## 8. Geometry

Engineered, precise and slightly aggressive:

- Mostly straight edges; 2–4px radius for controls/cards, 8px only dialogs/large overlays.
- Pills limited to chips/status/switches.
- An 8° conceptual accent can shape a crop, divider or marker. It never changes the rectangular accessible hitbox.
- One angled detail per composition zone is normally enough.

## 9. Borders

Precision UI uses 1px subtle dividers/borders and 2px strong selected structure. Border and spacing precede shadow. Specs, compare and form fields align to a visible rhythm without boxing every content fragment.

## 10. Elevation

Default has no shadow. `sticky` is a restrained 4/16 shadow; `overlay` a 16/48 shadow. Only headers, dropdowns, menus, dialogs and necessary sticky UI rise. Product cards do not float like SaaS panels.

## 11. Icons

- Custom-curated simple line set; no package selected in Phase 3.
- Nominal sizes 16, 20, 24px; 1.75–2px stroke, round joins only where optical clarity benefits.
- Optical alignment follows visual center; viewboxes and stroke style stay consistent.
- Fill reserved for selected/status cases where it adds meaning.
- Icon-only requires universal meaning, 44px target and accessible name. Commercial actions prefer label + icon.
- Future library imports must be per-icon/tree-shakeable.

## 12. Buttons

| Variant        | Purpose                                   | Visual rule                                         |
| -------------- | ----------------------------------------- | --------------------------------------------------- |
| Primary        | Cotizar / one dominant action             | Cyan background, near-black text, 48/56px height    |
| Secondary      | Test Ride / meaningful alternative        | Transparent/light surface, strong 1–2px border      |
| Tertiary       | Compare, dealer, contextual utility       | Text/action surface, low visual weight              |
| Ghost/inverted | Action over verified dark/photo safe zone | Light text/border; solid fallback if contrast fails |
| Icon-only      | Close, gallery arrows, universal utility  | Square 44/48px target, named                        |

States: default, hover, active, focus-visible, disabled and loading. No dimensional change. Loading preserves width/label meaning; disabled is never the only explanation.

CTA hierarchy is contextual but Cotizar remains primary, Test Ride secondary, WhatsApp/Compare/Dealer utility. Never render all five equally.

## 13. Links

- Inline link: underlined, accessible deep cyan on light / cyan on dark when contrast passes.
- Directional link: label + arrow, underline/border motion, e.g. `Ver 450SR →`.
- Navigation link: state via weight/indicator plus `aria-current`, not underline decoration alone.
- Use links for navigation and buttons for actions; do not convert every link to a rectangle.

## 14. Navigation

Uses IA and behavior from `NAVIGATION_SPEC.md`.

- Header contains logo, primary navigation and a compact utility area. Cotizar is the only persistent high-emphasis action; Compare may show a count.
- Conceptual height: 80px desktop default, 64px scrolled; 64px mobile. Final values may adjust to logo clear-space only through a token change.
- Transparent only over an approved safe zone; solid state is mandatory fallback and scroll state.
- Light uses standard logo/dark text; dark/photo uses approved reverse logo/light text.
- Desktop mega-panel is a structured navigation surface, not a promotional microsite.
- Mobile uses modal drill-down, maximum two levels, scroll lock, focus management, Escape and restoration.

## 15. Product components

### ProductCard

One system, two variants only:

- **Standard:** listing; image, family/category, model, descriptor, 1–2 facts, optional price state, detail link, separate Compare action.
- **Featured:** Home/editorial; larger media/type and optional short positioning, sharing image rules, data roles, actions and geometry with Standard.

Preferred media frame is 4:3 with `contain`, deliberate internal padding and category art direction. Consistent visual vehicle scale is judged by bounding silhouette, not identical pixels: a UFORCE cabin cannot be normalized like a motorcycle wheelbase.

### Campaign/Featured Vehicle

Uses Featured foundations inside `product`/`full` surface. Max one primary and one secondary action visible. Copy remains short; commercial state remains precise. Missing lifestyle falls back to cutout + type/data without changing component contract.

### ColorSelector and Gallery

Swatches include visible/accessibly associated name, selected and availability state. Gallery has Previous/Next, swipe supplement, keyboard, count and optional useful thumbnails; no autoplay.

## 16. KeyStats and specifications

KeyStats anatomy: value, unit, label and optional source/help. Hero uses max 3–5 verified facts. Stat value uses display; unit/label use UI. Mobile reflows rather than compresses.

Specifications are grouped by Motor, Chasis, Dimensiones, Electrónica and Capacidades where applicable. Semantic definition list suits PDP; comparison uses correctly headed table/equivalent. Mobile accordion may group sections but cannot hide critical identity/commercial state.

SpecRow handles long label, multiline value and distinct states:

- `No informado`: source lacks value.
- `No disponible`: feature/product/status unavailable.
- `No aplica`: attribute irrelevant.

These are never blank or represented by an unexplained dash.

## 17. Compare

State model remains 0/1/2/3 vehicles and same-category maximum 3.

- Desktop `xl+`: attribute column + up to three product columns; sticky headers remain comprehensible.
- Tablet: two products.
- Small: one or two based on minimum column width; explicit pair navigation. Only comparison surface may scroll, never whole page.
- Difference mode is optional/neutral: border/marker + text, never semantic good/bad color or automatic winner.
- Add/remove/replace/clear have confirmation, count announcement and Undo where defined.

## 18. Filters and sort

Each filter group has title, selection controls, count only if useful and clear-group action. Checkbox allows multiple; radio single; range appears only for a validated continuous decision. Active chips use subtle neutral surface, small radius/pill and removable label; cyan marks active state sparingly.

Desktop uses sidebar for meaningful multi-group sets, toolbar for small sets. Mobile uses dialog/full-height sheet with explicit Apply, Clear and result estimate. Filters do not apply on every mobile tap.

Sort begins with Relevancia. Price asc/desc appears only with sufficient price coverage; Cilindrada only where useful. No decorative option volume.

## 19. Forms

Precision-only expression: light/quiet surface, constrained width, clear sections and visible labels. Inputs default 48px, prominent/mobile actions 56px. States: default, hover, focus, filled, disabled, error and success when it conveys meaningful confirmation.

One column on mobile; maximum two on desktop for strongly related fields. Error summary + associated field message; entered values persist. Consent and submit span full width. No Apex diagonals, telemetry or dramatic reveal inside the task.

## 20. Dealer and service

LocationResult includes name, locality/address, capability badges, optional distance, one contextual primary action and secondary phone/WhatsApp/directions links. Do not produce four equal buttons.

Capabilities are quiet text badges: Venta, Service, Repuestos, Test Ride. Selection may use border/indicator plus text; no all-cyan badge cloud. List is primary and complete; map is enhancement. Mobile `Lista | Mapa` is an accessible labelled segmented control with list default.

WhatsApp retains recognizable icon/label but uses tertiary system treatment; brand green may appear only in the icon if brand guidance permits, never as a competing primary surface.

## 21. Feedback, empty and loading

- Persistent inline/banner patterns for critical success, error, warning and info; icon + title + action/recovery.
- Toast only for reversible, noncritical confirmation and long enough to act; never form failure or compare-limit explanation.
- Empty state: specific heading, exact explanation, recovery action; no generic illustration requirement.
- Skeleton only for truly asynchronous map/submit/remote content. Static Astro content renders directly. Loading prevents duplication and exposes progress/busy state.

## 22. Tabs, accordion, dialog and sticky

- Tabs only for peer content users benefit from switching; arrow-key semantics and visible selected state.
- Accordion for mobile specs, FAQ and secondary dense content; semantic button, expanded state, no required animation.
- Dialog for filters, navigation, confirmation or compare selector; named, trapped, Escape, close, backdrop and trigger restoration.
- Sticky product CTA: max two mobile actions and safe-area aware. Sticky compare shows count + next step. Sticky UI yields to keyboard/dialog/error/consent.

## 23. Motion

Durations: instant 0, fast 120ms, standard 220ms, expressive 420ms. Curves: standard, enter, exit. UI uses fast/standard; campaign/product reveals may use expressive. Hover uses subtle ≤2px translation, controlled image scale around 1.01–1.02, border/color or underline—not 15px card lift.

No scroll hijack, cursor custom, glow, HUD, long animation or required reveal. Reduced motion removes spatial movement/scale/stagger.

## 24. Responsive

Breakpoints: 480, 768, 1024, 1280, 1600px. Details live in `RESPONSIVE_SYSTEM.md`. Minimum concept validation at 320px; large validation at 1440, 1920 and ultrawide. Breakpoint means changed behavior: nav model, compare columns, filter placement, list/map and composition.

## 25. Accessibility

- WCAG 2.2 AA target; contrast roles verified and photo states tested individually.
- Project target minimum 44×44px.
- 2px focus ring + 2px offset, adaptive to surface and never clipped.
- Visible field labels; error summary; persistent critical feedback.
- Semantic product/spec/compare relationships and accessible color names.
- Keyboard, 200% zoom/reflow, screen reader, reduced motion and no-JS baseline tests.
- Map never replaces list; swipe never replaces controls; color never acts alone.

Full contract: `ACCESSIBILITY_DESIGN_SPEC.md`.

## 26. Component taxonomy

| Layer      | Components                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------- |
| Primitives | Button, Link, Icon, Input, Select, Checkbox, Radio, Textarea                                      |
| UI         | Badge, Chip, Tabs, Accordion, Dialog, Feedback, EmptyState, Progress                              |
| Navigation | Header, MegaPanel, MobileMenu, Breadcrumb, Pagination                                             |
| Product    | ProductCard, FeaturedProduct, KeyStats, SpecGroup, SpecRow, ColorSelector, Gallery                |
| Discovery  | FilterGroup, FilterPanel, ActiveFilters, Sort, ResultCount, ComparePicker/Table/Bar               |
| Commercial | QuoteCTA, TestRideCTA, WhatsAppLink, FormSection, LocationResult, CapabilityBadge, ListMapControl |
| Editorial  | CampaignHero, StorySection, FeatureStory, TechnicalAnnotation, MediaFigure                        |

Variants require a distinct purpose, not cosmetic convenience. Page-specific components must be composed from these roles before a new primitive is accepted.

## 27. Composition rules

| Content        | Container/density                     | Rule                                               |
| -------------- | ------------------------------------- | -------------------------------------------------- |
| Hero           | product/full + immersive              | May break container; essential text/actions do not |
| Body copy      | readable + editorial                  | Never full-width                                   |
| Product media  | wide/product                          | Large, protected silhouette                        |
| Specs          | standard/wide + functional            | Structured/grouped                                 |
| Forms          | readable/standard subset + functional | Constrained, calm                                  |
| Compare        | wide + functional                     | Horizontal behavior locally scoped                 |
| Dealer/service | standard/wide + functional            | List complete, map optional                        |

## 28. Coherence and category tests

- **450SR:** expressive hero uses Display XL, dark/photo and 420ms max reveal; KeyStats, price/actions and specs immediately return to shared Precision primitives.
- **Compare:** uses the same cyan, display model face, UI family, radii, borders, icons and state motion; lower scale/density proves it belongs without copying hero drama.
- **CFORCE 450L:** product canvas emphasizes silhouette, tires/rack/terrain; facts remain validation-gated. Geometry feels robust, not superbike-specific.
- **ZFORCE:** expressive action is valid; Precision explains cabin/suspension/capability.
- **UFORCE:** stable studio/work imagery and capability hierarchy use the same system without racing language.
- **Quote:** no dark campaign shell, display spectacle or decorative telemetry. CFMOTO identity comes from typography pairing, cyan primary, sharp geometry and precise feedback.

## 29. Anti-pattern tests

- **Anti-SaaS:** no floating dashboard cards, generic metrics, rounded panels or omnipresent shadows. Physical product, units, imagery and category language drive UI.
- **Anti-gaming:** no neon/glow, HUD, fake telemetry, custom cursor or dark-everywhere interface.
- **Anti-generic premium:** clean space alone is insufficient; vehicle scale, mechanical detail, CFMOTO geometry, technical numerals and cyan pulse are required.

## 30. Phase 4 implementation contract

Phase 4 may implement Astro technical foundations, token primitives and isolated component foundations from these documents. It must not invent new brand colors/type, split modes into themes, build full pages prematurely or embed unverified product data. Provisional values remain replaceable at the semantic-token layer.

**Phase 4 readiness: READY**, subject to maintaining validation flags for official brand assets, cyan and fonts.
