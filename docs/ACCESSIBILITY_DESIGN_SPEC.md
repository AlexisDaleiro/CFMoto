# Accessibility Design Specification

Concrete system decisions targeting WCAG 2.2 AA. This is not a restatement of the standard; it defines the design contract for Phase 4.

## Color and contrast

- Normal text: at least 4.5:1; large text at least 3:1.
- UI boundaries, focus indicators and meaningful graphics: at least 3:1 against adjacent colors.
- Provisional cyan is never body/link text on white; use `#006D8F` for accessible light-surface links or cyan as background/indicator.
- Primary button uses near-black on cyan. Error/success/warning/info use the verified foreground combinations in `DESIGN_TOKENS.md` plus icon/title text.
- Photography receives crop-specific testing. First choice is safe-zone composition; second is localized gradient; third is separate text surface. Never apply a blanket 70% black overlay by default.
- Selection/difference/status always has text, icon, pattern or structural cue beyond color.

## Focus

- Every interactive element has a 2px focus ring with 2px offset.
- On light: `#006D8F`; on dark/photo: provisional cyan when it achieves 3:1 against the immediate background, otherwise a dual light/dark ring.
- Focus is never removed, clipped by `overflow`, hidden beneath sticky UI or communicated only by border-color change.
- DOM order matches reading/visual order. Expressive overlap cannot reorder content semantically.
- Dialog/menu opening moves focus to a useful named element; closing/Escape restores the trigger.

## Targets and input

- Project minimum touch target: 44×44px, including menu, compare, filters, gallery, color selectors and icon-only controls.
- Adjacent targets have sufficient separation; compact 40px visual controls receive a 44px hit region.
- Hover content/action must also be available by focus/touch and cannot contain critical hidden information.
- Pointer gestures such as swipe have visible button alternatives.

## Typography and zoom

- Root text respects user settings; rem-based roles and fluid bounds prevent overflow.
- Body default 16px/1.55; supporting text no smaller than 14px except 13px noncritical captions.
- Long-form line length targets 55–75 characters.
- Interface works at 200% browser zoom and 400% text/reflow without two-dimensional page scrolling, except a tightly scoped data region when essential.
- Condensed display is restricted to short headings/models/stats. UI, labels, errors and long copy use Inter candidate/fallback.

## Buttons, links and icons

- Buttons communicate action; links navigate. Directional links retain underline or explicit arrow plus hover/focus treatment.
- Disabled controls remain readable and are not the only explanation; explain why/what next nearby when consequential.
- Loading preserves label/context, prevents duplicate submission and exposes busy state.
- Icon-only is allowed only for universal actions with accessible name; visible label is preferred for commercial actions.
- Decorative icons are hidden from assistive technology; functional SVG uses correct name relationship.

## Forms

- Persistent visible label for every field; placeholder is optional example, never label.
- Required/optional policy is stated, not inferred from color/asterisk alone.
- Helper and error text are programmatically associated. Error summary links to fields and focus moves to summary on failed submit.
- Validation occurs on blur/submit unless immediate feedback genuinely helps; user data persists through errors.
- Error styling combines border, icon and specific text. Success is used only when it changes next action or confirms submission.
- Autocomplete, input type and keyboards match data. Consent is not preselected and is adjacent to its legal explanation.

## Navigation and overlays

- Skip link is the first focusable item.
- Current page/menu state is conveyed programmatically and visually.
- Desktop mega-menu and mobile menu have accessible names, Escape, focus containment where modal, scroll lock and trigger restoration.
- No hover-only opening requirement. Pointer can move from trigger to panel without accidental dismissal.
- Dialog has name, description when needed, close button, backdrop behavior, focus trap and safe return.

## Product system

- Product cards use one primary heading/link target; nested interactive controls such as Compare are separate and correctly labelled with model name.
- Images have purpose-specific alt; color/variant association is stated in text.
- Color selector exposes visible color name, selected state and availability; swatch is supplementary.
- KeyStats preserve value/unit/label relationship. Specs use semantic definition list/table patterns according to comparison needs.
- `No informado`, `No disponible` and `No aplica` remain distinct text states.

## Compare

- Product headers and attribute labels are programmatically associated with every value.
- Sticky headers do not obscure focus and remain understandable at zoom.
- Mobile pair navigation exposes current models, total, Previous/Next and optional swipe.
- Difference highlighting is neutral and cannot imply good/bad. Screen readers receive concise difference text only when useful, not announcements for every scroll.
- Add/remove/replace updates announce count politely and support recovery/Undo where specified.

## Filters and results

- Filter groups use fieldset/legend or equivalent names; checkbox vs radio semantics match selection rules.
- Mobile dialog announces result estimate but applies only on explicit action per UX spec.
- After Apply, focus returns to trigger/result heading and count is announced once.
- Empty state explains exact combination and offers Remove last/Clear all without replacing results deceptively.

## Dealer, map and location

- List is always a complete equivalent to map.
- Marker/list synchronization does not unexpectedly move keyboard focus.
- Directions, phone and WhatsApp have explicit destination/action labels.
- Geolocation permission is explained before browser prompt; denial leaves manual search intact.
- Capability badges are text-first and not color-only.

## Feedback and dynamic content

- Critical errors/success never rely on transient toast. Use persistent inline/summary/banner region.
- Live regions are polite and concise for filter count, compare count and form status; avoid announcements during scroll/swipe.
- Skeletons appear only for genuinely asynchronous content and include a nonanimated reduced-motion state. Static Astro content never pretends to load.
- Empty states use heading, explanation and recovery; generic decorative illustrations are unnecessary.

## Motion and media

- `prefers-reduced-motion` replaces spatial movement, zoom, parallax and stagger with instant state or minimal opacity.
- Content does not begin hidden if JS/reveal fails.
- No autoplay carousel. Video has pause, captions/transcript when speech/information exists, no autoplay audio and useful poster fallback.
- Animations are interruptible and never required to understand state.

## Sticky UI

- Sticky header/CTA reserves space and does not cover anchors, error summary, focused controls or final content.
- Mobile sticky CTA exposes no more than two actions and accounts for safe area.
- It pauses/hides for software keyboard, modal/dialog and conflicting consent/error UI.

## Content resilience

- Components support long Spanish text, missing optional fields, zoom and text spacing adjustments.
- No fixed-height content containers for labels, prices, dealer names or errors.
- Missing media collapses without blank hero; missing verified data is omitted or explicitly labelled by defined state.

## Required Phase 4 verification

- Automated semantic/contrast smoke tests plus manual keyboard review.
- Screen-reader journeys: mobile navigation, product → compare, compare pair navigation, quote error/success, dealer list/map alternative.
- 320px, 200% zoom/reflow, high contrast/forced colors where available, reduced motion and no-JS baseline.
- Contrast tests on every photo crop and all interactive states, not only token pairs.

No component is “accessible by default” merely because it uses these tokens; implementation must meet this interaction contract.
