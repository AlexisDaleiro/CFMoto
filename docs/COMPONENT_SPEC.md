# Component Specification

Priority component contracts for Phase 4. Values reference `DESIGN_TOKENS.md`; interaction references Phase 1 UX/wireflows. These are isolated specifications, not complete pages.

## Shared contract

Every component must:

- consume semantic tokens, never hardcoded mode-specific values;
- support light, dark and approved photographic surfaces through the same variant API;
- support long Spanish strings, missing optional content and 320px width;
- expose default/hover/active/focus-visible/disabled/loading where interactive;
- keep 44×44px minimum target, visible focus and reduced-motion equivalence;
- avoid variants whose only reason is a page name or cosmetic preference.

## 1. Header / navigation

**Purpose:** preserve brand, primary IA and commercial utilities without overwhelming content.

**Anatomy:** logo; primary nav; optional mega-panel trigger; Compare count; utility links; single Cotizar action; mobile menu trigger.

**Variants:** transparent-on-media, solid-light, solid-dark, compact-scroll; desktop and mobile are responsive structures, not separate visual systems.

**States:** nav current/open, header scrolled, focus, mega-panel open, Compare count 0–3. Transparent falls back to solid when contrast/safe zone fails.

**Responsive:** 64px mobile; conceptual 80px desktop → 64px scroll. Below desktop threshold use modal drill-down max two levels.

**Accessibility:** skip link; semantic nav labels; `aria-current`; expanded/control relationships; keyboard/Escape/focus restore; reverse logo requires approved asset.

**Content constraints:** labels from `NAVIGATION_SPEC.md`; no campaign copy inside primary nav; utility area does not show five CTAs.

**Use:** persistent global orientation. **Misuse:** auto-hide on keyboard scroll, hover-only menu, transparent over uncontrolled image, mega-menu as promotional landing.

```text
DESKTOP / SOLID
┌──────────────────────────────────────────────────────────────────┐
│ [CFMOTO]  Motos ATV SxS Experiencia Concesionarios Service      │
│                         Comparar (2)   Test Ride   [COTIZAR]     │
└──────────────────────────────────────────────────────────────────┘

MOBILE
┌────────────────────────────────┐
│ [CFMOTO]       Comparar (2) [☰]│
└────────────────────────────────┘
```

## 2. Button and text link

**Purpose:** distinguish dominant action, meaningful alternative and contextual utility.

**Anatomy:** label; optional leading/trailing icon; progress indicator; full rectangular hitbox.

**Variants:** Primary, Secondary, Tertiary, Ghost/Inverted, Icon-only. Sizes default 48 and large 56; compact 40 visual/44 hit target for desktop utility only.

**States:** default, hover, active, focus-visible, disabled, loading. State changes never alter width/height. Loading retains comprehensible label.

**Responsive:** labels wrap only when unavoidable; primary may become full width on small forms/sticky CTA, not automatically everywhere.

**Accessibility:** semantic button vs link; accessible name; 2px/2px focus; icon hidden/named appropriately; disabled reason adjacent when consequential.

**Content constraints:** verbs first; one primary per action group. Directional links use label + arrow and underline/indicator.

**Use:** Cotizar primary; Test Ride secondary; WhatsApp/Compare/Dealer tertiary. **Misuse:** five equal buttons, white text on provisional cyan, icon-only commercial CTA, hover resize.

```text
[ COTIZAR ]   [ Test Ride ]   Comparar +   Ver 450SR →
  primary       secondary      tertiary      link
```

## 3. ProductCard

**Purpose:** support product recognition and next decision without becoming a miniature PDP.

**Anatomy:** media frame; family/category eyebrow; model heading/link; short descriptor; 1–2 facts; optional price state; Compare control; detail link.

**Variants:** Standard and Featured only. Featured increases media/type/space and may add positioning; all foundations/states remain shared.

**States:** default, hover/focus-within, compare selected, unavailable, missing price/media. Whole card is not one giant nested link; actions remain separate.

**Responsive:** stacked at base; 2–3 column listings from content fit. Media preferred 4:3 `contain`; internal padding changes by range, silhouette remains complete.

**Accessibility:** heading/link identifies product; Compare label includes model; image alt includes correct model/color/purpose; selected state is text + icon/structure.

**Content constraints:** long model names wrap; maximum two facts; price supports Desde, Consultar and No disponible; unverified values omitted.

**Use:** listings and related products. **Misuse:** six CTAs, paragraph copy, specs table, huge shadow/radius, lifestyle image that hides product.

```text
┌──────────────────────────┐
│      [PRODUCT 4:3]       │
├──────────────────────────┤
│ SR · SPORT               │
│ 450SR                    │
│ Deportiva bicilíndrica   │
│ 450 cc       39 Nm       │
│ USD 7.990*               │
│ Ver modelo →  [Comparar] │
└──────────────────────────┘
```

## 4. FeaturedProduct / CampaignVehicle

**Purpose:** create Apex-level desire while reusing product identity and commercial primitives.

**Anatomy:** wide/full media; family/model; short positioning; optional 1–3 key facts; commercial state; primary/secondary action; source/caveat if needed.

**Variants:** Featured light, dark and photographic surface; Campaign adds campaign label/date only when real.

**States:** media available/fallback cutout, available/on request/unavailable, CTA eligibility. No carousel dependency.

**Responsive:** base media → content in DOM order; desktop 7/5 or 8/4 asymmetric grid. Copy leaves media when safe zone fails.

**Accessibility:** logical H-level, tested contrast per crop, no text embedded in media, motion optional, actions precede decorative overlays.

**Content constraints:** one proposition, max two visible CTAs, 3 facts; no invented slogan/data. Lifestyle missing → official cutout + neutral surface.

**Use:** Home feature, campaign, product opening. **Misuse:** recreate separate Apex component system, text wall, five actions, black overlay over every image.

```text
┌────────────────────────────────────────────────────────┐
│ [ 450SR / dominant product or approved campaign media ]│
│                         SR · 450SR                     │
│                         Short positioning              │
│                         450 cc · 39 Nm                 │
│                         [COTIZAR]  [Test Ride]          │
└────────────────────────────────────────────────────────┘
```

## 5. KeyStats

**Purpose:** make 3–5 decisive verified facts scan as product evidence.

**Anatomy:** value, unit, label; optional clarification/source trigger.

**Variants:** XL in expressive/product opening; M in Technology/functional context. Same type/family and markup.

**States:** verified; omitted when unknown; `No informado` belongs to specs/compare, not dramatic hero stat.

**Responsive:** desktop 3–5; tablet 2–3; mobile one/two columns according to content. No core horizontal scroll.

**Accessibility:** value/unit/label grouped in reading order; no color-only emphasis; abbreviations expanded when necessary.

**Content constraints:** preserve unit/case/source; do not mix model years/markets.

**Use:** hero, Technology, concise compare identity. **Misuse:** animated counters, unverified stats, six-decimal precision, detach unit.

```text
450 cc          50 HP          39 Nm
Cilindrada      Potencia       Torque máximo
```

## 6. SpecGroup / SpecRow

**Purpose:** present complete technical information as structured design.

**Anatomy:** group heading; optional intro; rows of label/value/unit/status/help; source metadata outside normal public view when needed.

**Variants:** open grouped list desktop; accordion group mobile; compact row for compare uses separate CompareTable contract.

**States:** default, expanded/collapsed, focus; value states `No informado`, `No disponible`, `No aplica`.

**Responsive:** label/value columns at adequate width; stack label over value on collision. Accordion does not become one accordion per row.

**Accessibility:** definition list or appropriate semantic structure; accordion header button with expanded/control relation; long/multiline values readable.

**Content constraints:** controlled group/order/units; no blank dash; every value has verification status in data layer.

**Use:** PDP technical section. **Misuse:** plain ungrouped gray table, every row boxed, color implies good/bad, critical facts hidden by default.

```text
MOTOR                                           [−]
───────────────────────────────────────────────────
Potencia máxima                         50 HP
Torque máximo                           39 Nm
Configuración                           Bicilíndrico
Dato no provisto                        No informado
```

## 7. Compare system

**Purpose:** compare up to three vehicles in one category without declaring a winner.

**Anatomy:** category/context; model headers/selectors; attribute column; grouped rows; values; remove/replace; differences control; model actions; count/clear.

**Variants:** empty (0), seed (1), active (2), full (3); neutral difference highlight optional.

**States:** add/remove/replace, incompatible category, fourth attempt, loading only if actual async, missing values, Undo.

**Responsive:** `xl+` three columns; `md` two; base one/two with explicit Previous/Next. Only value region may move horizontally; labels/headers stay in context.

**Accessibility:** table/header associations or equivalent; status announcement; keyboard-operable picker; no swipe-only navigation; focus retained after mutation.

**Content constraints:** normalized attribute dictionary, same category, exact unit; `No informado` distinct from unavailable. No editorial winner.

**Use:** `/comparar/` and shortlist transition. **Misuse:** three compressed mobile columns, whole-page horizontal scroll, green/red “best/worst”, auto-select substitute.

```text
Comparar motos (2)                                      Limpiar
┌──────────────────┬──────────────────┬──────────────────┐
│ Atributo         │ 450SR        [×] │ 700CL-X      [×] │
├──────────────────┼──────────────────┼──────────────────┤
│ MOTOR            │                  │                  │
│ Cilindrada       │ 450 cc           │ 693 cc           │
│ Torque           │ 39 Nm            │ No informado     │
└──────────────────┴──────────────────┴──────────────────┘
```

## 8. FilterPanel / sort

**Purpose:** reduce a category set using a small number of decision-relevant attributes.

**Anatomy:** result count; groups; checkbox/radio; optional count; active chips; Clear group/all; Apply mobile; sort control.

**Variants:** desktop sidebar, compact toolbar, mobile dialog/full-height sheet.

**States:** default, selected, invalid URL value ignored/announced, zero results, disabled unavailable choice, pending only for real async.

**Responsive:** below `lg` dialog; `lg+` sidebar when multiple groups. Mobile changes apply explicitly and restores focus to trigger/result heading.

**Accessibility:** fieldset/legend semantics; labelled count; 44px rows; focus trap/Escape in dialog; selection not cyan-only.

**Content constraints:** family, use, displacement and category-specific useful fields; range only if validated. Sort options only with data coverage.

**Use:** category listings. **Misuse:** apply every tap on mobile, 12 sort options, hidden Clear, filter by unavailable/unverified data.

```text
FILTROS                         12 resultados
Familia                         Activos: [SR ×] [Limpiar]
☑ SR
☐ NK                            Ordenar: Relevancia ▾
☐ MT
Uso
☐ Deportivo
☐ Touring                      [Aplicar 12]  (mobile only)
```

## 9. Form field / form section

**Purpose:** capture the minimum reliable lead/contact data with calm precision.

**Anatomy:** visible label; required/optional indicator; control; helper; error; optional prefix/suffix; group heading.

**Variants:** text, tel, email, select, textarea, checkbox, radio. No floating-label variant.

**States:** default, hover, focus, filled, disabled, error, meaningful success, loading at submission.

**Responsive:** one column base; maximum two for related short fields at `md+`; consent/errors/action span full width.

**Accessibility:** label association, autocomplete/input type, described-by, error summary/focus, data retention, no placeholder-as-label.

**Content constraints:** instructions before control; precise error; no promise of SLA/booking unless verified.

**Use:** Quote, Test Ride, Contact. **Misuse:** dark racing form, diagonal inputs, validation only by color, dense ERP grid, permanently fixed submit.

```text
Nombre *
┌────────────────────────────────────┐
│ Cristian                           │
└────────────────────────────────────┘

Teléfono *
┌────────────────────────────────────┐
│                                    │  ← error border + icon
└────────────────────────────────────┘
Ingresá un teléfono de contacto válido.
```

## 10. LocationResult / capability badges

**Purpose:** help users identify and contact the correct sales/service location.

**Anatomy:** name; locality/address; capability badges; optional verified distance; primary contextual action; phone/WhatsApp/directions/detail.

**Variants:** dealer context, service context, selected-on-map. Same component changes action priority from capability/context.

**States:** default, selected, focus, temporarily changed hours/status, missing WhatsApp/distance, no map.

**Responsive:** full-width list base; split list/map when viable. Max one primary visual action; remaining destinations become text links.

**Accessibility:** address readable/copyable; action labels include location when needed; badge text; marker sync does not steal focus; list is complete map alternative.

**Content constraints:** verified NAP/capabilities/contact/hours; omit absent channel; no inferred proximity without permission/data.

**Use:** Concesionarios, Service, location chooser. **Misuse:** every capability/phone/action cyan, four equal buttons, map-only result, generic branch photo.

```text
┌──────────────────────────────────────────────┐
│ CFMOTO Centro                               │
│ Montevideo · Av. Ejemplo 1234               │
│ [Venta] [Service] [Repuestos]               │
│ [VER DETALLE]   Cómo llegar →  WhatsApp →   │
└──────────────────────────────────────────────┘
```

## 11. MobileStickyCTA / CompareBar

**Purpose:** preserve the next commercial/decision action after hero/selection without covering content.

**Anatomy:** compact context/model or compare count; primary action; optional secondary; expandable details where appropriate.

**Variants:** Product CTA and Compare bar. Never global WhatsApp float.

**States:** hidden before threshold, visible, keyboard/dialog suspended, unavailable action, safe-area adjusted.

**Responsive:** mobile only by default; max two 56px actions; full-width container, reserves bottom space. Desktop uses in-flow/sticky side actions only after validation.

**Accessibility:** DOM order remains logical; not duplicated confusingly; focus not covered; status named; sticky yields to consent/errors/keyboard.

**Content constraints:** Product: Cotizar + eligible Test Ride/one utility. Compare: count + `Comparar` next step.

**Use:** after product hero, active shortlist. **Misuse:** always-visible three/five actions, overlay last form field, green WhatsApp takeover.

```text
┌────────────────────────────────────┐
│ 450SR     [COTIZAR] [Test Ride]    │
└────────────────────────────────────┘
```

## 12. Badge / Tag / Chip

**Purpose:** classify or expose compact state without competing with product identity.

**Anatomy:** text; optional functional icon; optional remove button for active filter.

**Variants:** informational (family/use), capability, commercial (`Nuevo`), status (`Próximamente`), active-filter chip. Meanings cannot share indistinguishable treatment when adjacent.

**States:** default, selected/removable, focus for interactive chip, disabled only when explanation exists.

**Responsive:** wraps without truncating core meaning; removable target 44px even if visual chip is compact.

**Accessibility:** text always; color supplementary; interactive chips are buttons with full action name.

**Content constraints:** 1–3 words ideally; commercial/status requires governance/expiry.

**Use:** capabilities, taxonomy and filters. **Misuse:** cyan badge cloud, badge as substitute for heading/copy, pill every label.

## 13. Tabs / segmented list-map control

**Purpose:** switch between peer views when comparison of states is valuable.

**Anatomy:** tablist; labelled tabs; associated panels; selected indicator.

**Variants:** content tabs and two-option List/Map control. A simple navigation link group is not tabs.

**States:** selected, hover, focus, disabled only when useful explanation exists.

**Responsive:** tabs can scroll locally only with visible affordance; List/Map remains two equal readable targets. List defaults on mobile.

**Accessibility:** correct tab keyboard behavior and relationships; selected not color-only; focus visible.

**Content constraints:** small peer set; critical content/actions not hidden behind arbitrary tabs.

**Use:** related view switching. **Misuse:** hiding poorly structured page sections, using tabs for navigation URLs without semantics.

## 14. Accordion

**Purpose:** progressively disclose dense secondary information.

**Anatomy:** semantic heading; button; label; indicator; controlled panel.

**Variants:** SpecGroup, FAQ/secondary. No decorative accordion.

**States:** collapsed/expanded/focus/disabled only if truly unavailable.

**Responsive:** specs may be open groups desktop and accordion mobile; state should not strand deep links.

**Accessibility:** button in heading, expanded/control relation, keyboard, content available without motion.

**Content constraints:** group-level, not every spec row; titles explain contents.

**Use:** mobile specs, FAQ. **Misuse:** hide critical price/CTA/key facts; animate height for long periods.

## 15. Dialog / mobile sheet

**Purpose:** focus a bounded task such as filters, menu, confirmation or model selection.

**Anatomy:** backdrop; named surface; title/description; close; content; action region.

**Variants:** centered dialog desktop, full-height/edge sheet mobile. Geometry and state remain shared.

**States:** opening/open/closing; busy; error; destructive confirmation.

**Responsive:** full viewport where mobile content/keyboard needs it; safe-area aware. Never nested dialogs.

**Accessibility:** modal semantics, initial focus, trap, Escape, scroll lock, trigger restoration; backdrop click is optional supplement, not sole close.

**Content constraints:** one task; concise actions; no general page content.

**Use:** filters/menu/compare replace. **Misuse:** newsletter interruption, critical content hidden by default, uncloseable animation.

## 16. Feedback / empty / loading

**Purpose:** explain outcome, problem or absence and provide recovery.

**Anatomy:** semantic icon; title; specific message; recovery/next action; optional technical reference.

**Variants:** success, error, warning, info; inline, section/banner; toast only noncritical; EmptyState; busy/progress.

**States:** persistent until resolved for critical; announced once; retry/undo where appropriate.

**Responsive:** copy/actions stack at base; never cover main task. No fixed height.

**Accessibility:** live region appropriate to urgency; focus moves only after submitted outcome/error summary; color not sole signal.

**Content constraints:** exact cause and next step; no blame or false promise. Static Astro content gets no skeleton.

**Use:** forms, compare limit, invalid filter, no dealer/results. **Misuse:** disappearing critical toast, generic “Something went wrong”, decorative empty illustration in place of recovery.

## 17. Product ColorSelector

**Purpose:** inspect verified color variants without implying stock.

**Anatomy:** group label; swatches; visible selected color name; availability/caveat; image relationship.

**Variants:** compact card preview only if it does not imply local availability; full PDP selector.

**States:** default, selected, focus, unavailable, image loading/error.

**Responsive:** 44px hit areas; names may sit below group on small screens; no unlabeled dots.

**Accessibility:** radio semantics; programmatic/visible name; selected text/icon; contrast border around light/dark swatches.

**Content constraints:** official color names and exact variant relation; no synthetic recolor.

**Use:** PDP variant view. **Misuse:** color-only dots, unavailable selectable color, promise stock.

## 18. Gallery

**Purpose:** inspect product/lifestyle/details in a controlled sequence.

**Anatomy:** active media; caption/alt; Previous/Next; count; optional thumbnails; optional expand.

**Variants:** in-flow and dialog enlargement. No autoplay variant.

**States:** first/last, loading/error only for real media fetch, active thumbnail, video paused/playing.

**Responsive:** single media base with swipe + buttons; useful thumbnails at `md+`; crop/ratio driven by asset purpose.

**Accessibility:** buttons, keyboard, current count, focus management in enlargement, captions/transcript, reduced motion.

**Content constraints:** rights/variant/focal point verified; no duplicate filler images.

**Use:** PDP/story evidence. **Misuse:** auto-advance, swipe-only, preload entire gallery, thumbnail upscale.

## 19. TechnicalAnnotation / expressive graphics

**Purpose:** connect a verified physical feature/data point to imagery without becoming HUD decoration.

**Anatomy:** anchor; short line; label/value; optional source/help.

**Variants:** image callout, section marker, real route/circuit indicator.

**States:** static by default; optional standard reveal; instant under reduced motion.

**Responsive:** remove line/relocate label outside media when collision occurs; never make text microscopic.

**Accessibility:** reading-order copy duplicates essential information outside purely visual position; connector is decorative.

**Content constraints:** exact feature/model/source; maximum few annotations per frame.

**Use:** Technology/product story. **Misuse:** fake telemetry, fictional coordinates, every section decorated, glow/HUD.

## System coherence scenarios

### 450SR expressive → specs precision

Display XL, dark/photo surface and product canvas lead. The same model typography reduces to Heading 3 in sticky/compare; same cyan action, 2–4px geometry, icon strokes and focus rules continue. The transition changes density/surface, not identity.

### CFORCE 450L and UFORCE

Use the same ProductCard/FeaturedProduct/KeyStats/Specs. Vehicle media art direction and verified attribute groups change; no “off-road theme.” Pending specs remain omitted or preview-labelled, never filled.

### Quote form

Uses UI family, off-white/white surface, standard/readable container, 1px borders, cyan primary and shared focus. No condensed display beyond page heading, no diagonal fields, cinematic overlay or telemetry. It remains recognizably CFMOTO through shared type pairing, cyan, geometry and copy tone.
