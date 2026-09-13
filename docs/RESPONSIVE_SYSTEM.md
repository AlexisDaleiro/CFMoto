# Responsive System

Responsive behavior is content- and task-driven. Breakpoints change composition and interaction; they do not merely shrink a desktop layout.

## Global ranges

| Range       | Columns | Structural behavior                                                              |
| ----------- | ------: | -------------------------------------------------------------------------------- |
| 0–479px     |       4 | Single-column tasks, mobile header/menu, filters dialog, compare 1–2 models      |
| 480–767px   |       4 | Wider media and inline utilities; still mobile navigation/filter model           |
| 768–1023px  |       8 | Two-column editorial when order remains clear; compare 2; locator split optional |
| 1024–1279px |      12 | Desktop navigation, sidebar filters, standard split layouts                      |
| 1280–1599px |      12 | Three-product compare and full composition system                                |
| ≥1600px     |      12 | Content caps; photography/product canvas may expand                              |

Technical switches: `sm 480`, `md 768`, `lg 1024`, `xl 1280`, `2xl 1600`. Component queries may respond to their container when a reusable module is not tied to page viewport, but global navigation/overlay behavior follows viewport ranges.

## Margins and gutters

Base 16/12px; `sm` 24/16; `md` 32/20; `lg` 48/24; `xl` 64/24; `2xl` 80/24. At 320px, two 16px margins leave 288px usable; no fixed-width child may exceed it.

Nested grids inherit the parent gutter or use the spacing scale. Do not create half-gutters with arbitrary values. Edge-to-edge media may break the grid; its caption, controls and essential copy realign to a container.

## Container behavior

- **Readable 720px:** body text remains 55–75 characters where language permits.
- **Standard 1200px:** navigation, forms, dealer/service and most listings.
- **Wide 1440px:** compare, multi-product and editorial split.
- **Product 1600px:** hero/gallery canvas; text/action column remains narrow.
- **Full:** photographic surface only; inner controls still use margins/container.

On ultrawide screens, extra width becomes negative space, crop latitude or product canvas—not longer text, stretched fields or six-column catalogs.

## Typography adaptation

- Display and stat roles interpolate between documented min/max; body sizes remain stable.
- Long Spanish headings wrap intentionally; no forced one-line scaling below minimum.
- At ≤479px, display headings should normally occupy 2–4 lines maximum. If longer, use Heading 1 and editorial copy rather than compressing.
- Technical value/unit remain grouped. KeyStats flow as two columns only when each has sufficient width; otherwise one-column/stacked pairs.
- Navigation/button labels never shrink below their defined role.

## Spacing adaptation

- Immersive: 64–96px small → 128–160px large.
- Editorial: 48–64px small → 80–96px large.
- Functional: 32–48px small → 48–64px large.
- Component internal padding generally remains 12–24px; reduce density by reorganizing content, not by making touch targets smaller.

## Mode behavior

### Expressive

- Desktop exploits asymmetry, full-bleed media, controlled overlap and 12-column tension.
- Tablet removes overlap when it threatens reading order and separates copy from unsafe image regions.
- Mobile uses a dedicated vertical crop or image/copy split; one brand gesture and one primary CTA remain. It is not a desktop crop with text squeezed over it.

### Precision

- Desktop can use sidebar + results, list + map, or labels + values.
- Tablet shifts to 8-column paired layouts and progressive disclosure.
- Mobile prioritizes one task, one column, explicit group headings and disclosure controls.

Both modes share typography, colors, geometry, controls and state language.

## Component adaptations

### Header/navigation

- `<768`: compact header; modal drill-down, maximum two levels; utility actions reduced to high-priority destinations.
- `768–1023`: mobile/tablet menu remains unless navigation labels pass stress test.
- `≥1024`: desktop header with primary navigation and compact utility region; mega-panel only when open.
- Scroll state becomes solid and slightly shorter; never changes IA or hides focus.

### Product card

- Base: full-width, image above identity; facts and actions wrap predictably.
- `md`: two cards or editorial row depending on context.
- `lg/xl`: 2–3 listing columns based on card minimum, never fill ultrawide with excessive columns.
- Vehicle image uses category-specific art direction inside a shared 4:3 preferred media frame; no crop of wheels/cab.

### Featured product

- Base: media then content, CTA in document order; no overlap.
- `md`: controlled 5/3 or 4/4 split.
- `lg+`: 7/5 or asymmetric 8/4 canvas; full-bleed surface allowed, content still capped.

### KeyStats

- 320px: one or two columns depending on label/value width; never horizontal scrolling for core stats.
- `sm/md`: 2–3 columns.
- `lg+`: up to 4–5 in hero band; additional stats belong in specs.

### Specifications

- Base: accordion by group allowed; each row stacks label above value only when label/value collision occurs.
- `md+`: grouped definition lists, usually two columns within a group.
- Open/closed state is explicit and content remains accessible without motion.

### Compare

- 0 selected: category chooser and explanation.
- Base: one model at 320px or two when column minimum passes; explicit previous/next and model headers. Only the comparison surface scrolls horizontally if unavoidable.
- `md`: two models.
- `xl`: up to three models plus attribute column.
- Attribute name stays adjacent/programmatically associated; whole page never scrolls sideways.

### Filters

- `<1024`: dialog/full-height sheet opened by `Filtros (n)`; explicit Apply and Clear; focus restored.
- `≥1024`: sidebar when result density/space supports it; toolbar for small filter sets.
- Active chips wrap/scroll within a labelled region without obscuring Clear all.

### Forms

- Base: single column; input keyboard/autocomplete appropriate; submit remains reachable above safe area.
- `md+`: maximum two columns only for strongly related short fields (e.g. department/locality). Contact, consent, errors and primary action span full form width.
- Form max width uses readable/standard subset, never product-wide.

### Dealer/service

- Base: list first; map opens as alternate mode; selection and scroll restore on return.
- `md/lg`: split list/map only if both panes remain usable; list never disappears.
- Location action hierarchy collapses to one primary contextual action plus secondary text actions.

### Sticky UI

- Mobile product CTA: max two visible actions, 56px controls, safe-area aware; hides/pauses for keyboard/dialog and never covers consent/errors.
- Compare bar: compact count + one next action; selected items available in expandable region.
- Desktop sticky filters/header only when they do not create nested scroll traps.

### Gallery

- Base: one image, Previous/Next, count; swipe supplements controls.
- `md+`: thumbnails only when they add orientation; keyboard and focus order match visual order.
- No autoplay. Responsive crops maintain focal point and aspect intent.

## Small-mobile validation: ~320px

Required stress content:

- `ZFORCE 1000 Sport`, `700CL-X Heritage`, `800MT Touring`.
- `Solicitar una cotización`, `Encontrar concesionario`.
- `CLIENT VALIDATION REQUIRED` is preview-only but must wrap safely.
- `USD 7.990`, `Precio a consultar`, `Temporalmente no disponible`.
- Long department/locality, phone and capability combinations.

Acceptance: no page-level horizontal scroll; 44px targets; visible focus; one-column form; menu usable at 200% zoom; key value/unit together; sticky action does not cover last content.

## Large-screen validation

At 1440, 1920 and ultrawide:

- readable/standard/wide containers cap text and controls;
- product canvas may reach 1600px, media/full surface may exceed it;
- grids do not add columns solely to fill space;
- header navigation remains grouped rather than drifting apart;
- photography crops preserve focal point instead of uncontrolled center-cover.

## Content-first and i18n readiness

Spanish Uruguay is initial language, but no component depends on exact string length. Avoid fixed heights for labels/copy, allow wrapping, reserve multiple lines where expected and keep icons supplementary. Numeric/date/price presentation must be formatter-driven later, not baked into layouts.

## Validation matrix for Phase 4

Minimum viewports: 320×568, 375×812, 768×1024, 1024×768, 1280×800, 1440×900, 1920×1080 and one ultrawide. Test keyboard, 200% zoom/reflow, reduced motion, long content, missing media/data and both light/dark/photo surfaces.
