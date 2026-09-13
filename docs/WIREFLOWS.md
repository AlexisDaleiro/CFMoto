# Wireflows

Low-fidelity: define orden, decisiones y comportamiento; no color, estilo, tipografía ni componentes finales.

## System journey

```text
DISCOVER             EXPLORE              COMPARE             DESIRE              ACT
Home/Experience  →   Listing/Family   →   Compare/PDP     →   Product proof   →   Quote/Test ride
Search campaign      Filters              Shortlist            Dealer confidence    WhatsApp/Location
```

Cada salida mantiene contexto (`vehicle`, `category`, `experience`, `campaign`, `location`) y ofrece retorno sin perder filtros/selección.

## Home — P0

```text
┌─────────────────────────────────────────────────────────┐
│ HEADER: Products | Experience | Network | Utilities     │
├─────────────────────────────────────────────────────────┤
│ HERO / ONE CAMPAIGN                                     │
│ Promise + specific CTA                                  │
├─────────────────────────────────────────────────────────┤
│ CHOOSE A VEHICLE WORLD                                  │
│ Motos                 ATV                 Side-by-Side   │
├─────────────────────────────────────────────────────────┤
│ FEATURED PRODUCT / FAMILY → detail                      │
├───────────────────────────────┬─────────────────────────┤
│ RACING → SR                   │ ADVENTURE → MT          │
├───────────────────────────────┴─────────────────────────┤
│ TECHNOLOGY PROOF → related products                     │
├─────────────────────────────────────────────────────────┤
│ WORK / RECREATION: ATV + SxS pathways                   │
├─────────────────────────────────────────────────────────┤
│ COMPARE EXPLAINER → choose category                     │
├─────────────────────────────────────────────────────────┤
│ COMMUNITY (only if real) / LOCAL NETWORK                │
├─────────────────────────────────────────────────────────┤
│ CLOSING CTA: Find dealer | Quote                        │
├─────────────────────────────────────────────────────────┤
│ FOOTER                                                  │
└─────────────────────────────────────────────────────────┘
```

Rules: show product within first two content decisions; brand evidence precedes hard conversion; no consecutive grid of 15 equal cards; absent editorial content collapses without placeholder.

## Listing — P0/P1

```text
ENTRY: header | home world | family/experience | back from PDP
  ↓
[Breadcrumb] [H1 + brief orientation]
[Family/use shortcuts]
  ↓
┌───────────────┬─────────────────────────────────────────┐
│ FILTERS       │ Result count   Sort (only useful)       │
│ family        │ Active filters [x] [Clear]              │
│ use           ├─────────────────────────────────────────┤
│ displacement  │ Product cards                           │
│ category-     │ image / identity / 1–2 facts            │
│ specific      │ [View] [Add to compare]                 │
└───────────────┴─────────────────────────────────────────┘
  ↓                         ↓
PDP                       Compare state retained
```

### Empty/invalid

```text
0 results
→ Keep selected filters visible
→ Explain exact combination
→ [Remove last filter] [Clear all]
→ Show no unfiltered “fake results” inside empty state

Invalid URL filter
→ Ignore invalid value
→ Announce “Se ignoró el filtro …”
→ Preserve valid filters
```

## Product detail — P0

```text
[Breadcrumb]
┌─────────────────────────────────────────────────────────┐
│ PRODUCT HERO                                            │
│ media            Model / descriptor / availability     │
│                  price state                            │
│                  [QUOTE] [Test ride*]                   │
│                  WhatsApp | Dealer | Compare            │
└─────────────────────────────────────────────────────────┘
[3–5 KEY FACTS]
[POSITIONING / WHO IT IS FOR]
[DESIGN]*
[PERFORMANCE]*
[TECHNOLOGY]*
[CAPABILITIES]*
[COLORS / VARIANTS]*
[GALLERY]*
[SPECIFICATIONS BY GROUP]
[COMPARE WITH …]
[RELATED MODELS + reason]
[DEALER / SERVICE CONFIDENCE]
[FINAL COMMERCIAL ACTION]
[FOOTER]

* Render only relevant, verified modules.
```

### Category emphasis

```text
Motorcycle: fit/ergonomics → engine/control → electronics → intended ride
ATV: work/recreation → traction/EPS → load/towing → terrain/safety
Side-by-Side: sport/utility → seats/cab → load/dimensions → suspension/protection
```

### Availability branches

```text
Available → price state + Quote + eligible Test ride
On request → “Precio a consultar” + Quote
Temporarily unavailable → explanation + alternatives/dealer; no impossible CTA
Unverified spec → omit public value; preview shows CLIENT VALIDATION REQUIRED
Missing media → reflow; never reserve a broken hero gap
```

## Compare — P0

### Entry paths

```text
A Card: Add → confirmation + Compare(n) → /comparar/
B PDP: Compare → if category established, add/open; otherwise category begins here
C Direct: /comparar/ → choose category → choose model(s)
```

### State model

```text
0 selected
  → Choose category
  → Search/browse compatible models

1 selected
  → Show product identity + “Add another to compare”
  → No false comparison table

2 selected
  → Full comparison available
  → Add optional third

3 selected
  → Full comparison
  → Add disabled; Replace/Remove/Clear available

Attempt fourth
  → Dialog: “Podés comparar hasta 3”
  → Select one to replace OR Cancel

Attempt incompatible category
  → Explain current compare group
  → [Start new comparison] destructive-to-selection confirmation inline/dialog
  → [Keep current]

Remove
  → Update table/state; announce count; allow Undo briefly

Switch
  → Open compatible picker; replacement keeps column position
```

### Desktop structure

```text
┌──────────────┬──────────────┬──────────────┬──────────────┐
│ Attribute    │ Model A  [x] │ Model B  [x] │ Model C  [x] │
├──────────────┼──────────────┼──────────────┼──────────────┤
│ Identity     │ [View]       │ [View]       │ [View]       │
│ Motor        │              grouped rows                  │
│ Dimensions   │              values + units                │
│ Safety       │              “No informado” where needed   │
│ Technology   │                                             │
├──────────────┼──────────────┼──────────────┼──────────────┤
│ Actions      │ Quote/Test*  │ Quote/Test*  │ Quote/Test*  │
└──────────────┴──────────────┴──────────────┴──────────────┘
```

Attribute column and model headers remain understandable while scrolling. Differences use text/marks plus color at most. Sticky regions do not create nested two-axis traps.

### Mobile structure

```text
[Compare 3 motorcycles] [Clear]
[Model A selector] [Model B selector]  → swipe/control → [Model C]
┌──────────────┬──────────────┐
│ MODEL A      │ MODEL B      │  model headers remain visible
├──────────────┴──────────────┤
│ Motor                         group heading
│ Displacement                 attribute label
│ 450 cc       │ 693 cc       │
│ Power                        attribute label
│ …            │ …            │
└─────────────────────────────┘
[Previous pair] [Next pair]
[View model] [Quote]            selected model context
```

One or two models visible depending on width; never three compressed. Swipe has visible Previous/Next controls. Attribute label spans pair and remains adjacent to values for screen readers.

## Dealer locator — P0

```text
/concesionarios/
[H1 + purchase-oriented intro]
[Search city/name/address]
[Department] [Locality] [Capabilities] [Category]
[Use my location]

┌──────────────────────────┬──────────────────────────────┐
│ LIST (always available)  │ MAP (enhancement)            │
│ result count             │ selected marker              │
│ Location                 │ map controls                 │
│ address / capabilities   │                              │
│ phone / WhatsApp*        │                              │
│ directions / detail      │                              │
└──────────────────────────┴──────────────────────────────┘
```

### Branches

```text
Use my location → explain browser request → allow
  ├─ granted: sort by distance; never hide manual search
  └─ denied/unavailable: “No accedimos a tu ubicación” + manual fields

Map unavailable → list remains fully functional + directions external link
No results → remove capability / broaden department / central contact
No WhatsApp → omit action; keep verified phone/email
Service-only location → excluded from sales default; available via Service
```

Selecting list ↔ marker synchronizes without moving keyboard focus unexpectedly.

## Service — P1

```text
/service/
[H1: Soporte para tu CFMOTO]
[What do you need?]
  [Service] [Parts] [Where can I take it?]
[Vehicle category] [Department/locality]
  ↓
[Accessible service results — list first]
 Location / hours / supported category / services
 [Call workshop] [WhatsApp*] [Directions] [Details]
  ↓
[No match? Contact central support]
```

It reuses Location data and optional map, not dealer copy/order. Sales promotions and quote are absent unless the user explicitly changes task.

## Location detail — P1

```text
[Breadcrumb]
[Location name] [verified capabilities]
[Address + Department/Locality] [Directions]
[Open hours + exceptions]
[Phone] [WhatsApp if verified] [Email]
[Sales categories]* [Test ride]* [Service]* [Parts]*
[Context action based on capability]
[Map preview + accessible address/list return]
[Return to Dealers] [Return to Service]
```

## Quote — P0

```text
ENTRY: standalone | PDP(vehicle) | Compare(vehicle) | Location(vehicle+dealer)
  ↓
[H1 Solicitar cotización]
[Context summary: model/category] [Change]
[Name]
[Phone and/or Email + preferred contact]
[Department]
[Preferred dealer — optional]
[Message — optional]
[Privacy notice + required consent]
[Submit]
  ├─ field/server error → preserve data + summary + focus first error
  └─ success → “Solicitud recibida” + reference* + next-step expectation
                [Return to model] [Find dealer] [WhatsApp alternative]
```

No price promise and no duplicate submission on repeated click. Exact rules in `FORM_REQUIREMENTS.md`.

## Test ride — P0

```text
ENTRY: PDP | Compare | Dealer | standalone
  ↓
[H1 Solicitar test ride]
[This is a request, not a confirmed booking]
[Eligible product] [Change]
[Department]
[Dealer — optional/eligible only]
[Name]
[Phone and/or Email]
[Preferred contact]
[Message — optional]
[Consent]
[Send request]
  ├─ no eligible dealer: keep request OR Quote/Dealer fallback, explain
  ├─ error: preserve + precise recovery
  └─ success: received; dealer/team will confirm availability and timing
```

## Contact — P1

```text
[Topic: General | Commercial | Service | Parts | Other]
[Name] [Phone/email] [Message]
→ Route to specialist flow when topic is Quote/Test ride/Service
→ Otherwise submit and confirm without promise
```

## Experience — P1/P2

```text
/experiencia/
[Brand promise]
  ├─ Racing → story/proof → SR family → 450SR → Compare → Test ride
  ├─ Adventure → touring/explore → MT family → PDP → Dealer/Test ride
  ├─ Technology → capability → verified products → PDP/Compare
  └─ Community → event/story/ride → related products/dealer (when assets exist)
```

### Vertical low-fi

```text
[Experience hero + one proposition]
[2–4 editorial pillars]
[Proof/story modules]
[Related family/product with explicit reason]
[Related stories/events]
[One contextual CTA]
```

## Mobile-first critical flows

### 1. Explore motos

```text
Mobile header → Motos
→ Family/use shortcuts
→ [Filter (n)] + result count
→ full-screen filter dialog
→ Apply X results → focus returns to trigger/result heading
→ card → PDP; Back restores filters and scroll
```

Filters apply explicitly, not on every tap. Active filters scroll/wrap without hiding Clear.

### 2. View product

```text
Hero identity + media + price/status
→ primary action visible without covering content
→ key facts
→ story/spec sections
→ sticky [Quote] [Test ride or WhatsApp] appears after hero
→ gallery/spec controls touch/keyboard friendly
→ related/dealer/final CTA
```

Sticky bar pauses/hides while form keyboard, dialog or conflicting consent UI is open; reserves safe area.

### 3. Compare

```text
Compare(n) → model pair
→ group → attribute → two values
→ explicit next/previous pair or swipe
→ replace/remove through model selector
→ choose model → View / Quote / Test ride
```

Horizontal movement only affects model columns, not the whole page; attribute names remain in reading context.

### 4. Quote

```text
PDP sticky Quote → model summary
→ short single-column form
→ correct input keyboards/autocomplete
→ inline validation after blur/submit
→ submit button remains reachable, not permanently fixed
→ success replaces form heading and restores focus
```

### 5. Test ride

```text
PDP/Compare → request explanation
→ product → department → optional eligible dealer
→ contact → consent → submit
→ received, not booked
```

Conditional fields appear without moving focus; changes are announced politely.

### 6. Dealer locator

```text
Manual search/list first
→ optional Use my location
→ results list
→ result actions directly reachable
→ Map opens as alternate full-screen mode
→ Back returns to same selected result/scroll
```

### 7. Service

```text
Service → choose need
→ category/location filter
→ nearest/relevant verified workshops
→ Call/WhatsApp/Directions without mandatory detail page
→ fallback central support
```

## Breakpoint behavior

| Range         | Structural change                                                                   |
| ------------- | ----------------------------------------------------------------------------------- |
| Small mobile  | One navigation level, one-column forms, max two sticky actions, compare 1–2 models  |
| Large mobile  | More inline utilities, still modal filters/menu and pairwise compare                |
| Tablet        | Two-column content only when reading/order remain clear; locator can split list/map |
| Desktop       | Header panels, sidebar filters, 3-column compare, list/map split                    |
| Large desktop | Wider media/composition, same information hierarchy; no added navigation depth      |

Exact CSS breakpoints will be chosen from content stress tests in implementation, not device labels.

## Accessibility checkpoints

- Every overlay: name, focus entry/trap/Escape/restore.
- Every state change: concise live announcement, never every scroll/swipe.
- Compare: headers programmatically associated across horizontal navigation.
- Locator: list gives full equivalent of map.
- Forms: error summary and field links; entered data retained.
- Sticky actions remain in DOM order and do not cover zoomed content.
- Reduced motion replaces animated transitions with immediate state changes.
