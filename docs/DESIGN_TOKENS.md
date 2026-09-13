# Design Tokens

Valores iniciales implementables para el Design System unificado. Son especificación, no código de producción.

## Status legend

- **CONFIRMED:** decisión interna aprobada y lista para foundation.
- **PROVISIONAL:** valor responsable que puede implementarse y reemplazarse mediante token.
- **CLIENT BRAND VALIDATION REQUIRED:** no puede presentarse como identidad oficial hasta recibir brand book/licencia/asset.

## Naming convention

Formato: `category.role.modifier.state`.

- Componentes consumen roles semánticos: `color.action.primary.background`.
- Primitivos internos pueden usar escalas numéricas, pero no aparecen directamente en componentes.
- No usar nombres visuales/contextuales como `niceBlue`, `cardGray`, `bigPadding` o `racingButton`.
- Modos Expressive/Precision no crean tokens paralelos. Consumen los mismos roles con distinta escala, densidad y composición.

## Color primitives

| Token                     |     Value | Status                                             | Purpose                               |
| ------------------------- | --------: | -------------------------------------------------- | ------------------------------------- |
| `color.brand.cyan`        | `#00B7E5` | **PROVISIONAL — CLIENT BRAND VALIDATION REQUIRED** | Working CFMOTO cyan                   |
| `color.brand.cyan.hover`  | `#26C6EE` | PROVISIONAL                                        | Primary hover on dark text            |
| `color.brand.cyan.active` | `#0096BF` | PROVISIONAL                                        | Pressed/active background             |
| `color.neutral.950`       | `#080C0F` | CONFIRMED                                          | Near-black                            |
| `color.neutral.900`       | `#12191D` | CONFIRMED                                          | Charcoal / dark surface               |
| `color.neutral.800`       | `#20292E` | CONFIRMED                                          | Raised dark / strong text support     |
| `color.neutral.600`       | `#4E5C63` | CONFIRMED                                          | Secondary text on light               |
| `color.neutral.500`       | `#66747C` | CONFIRMED                                          | Non-text subtle UI only unless tested |
| `color.neutral.300`       | `#B8C3C8` | CONFIRMED                                          | Strong border/disabled decoration     |
| `color.neutral.200`       | `#D9E0E3` | CONFIRMED                                          | Light border/quiet surface            |
| `color.neutral.100`       | `#E9EDEE` | CONFIRMED                                          | Raised light surface                  |
| `color.neutral.050`       | `#F4F6F6` | CONFIRMED                                          | Off-white background                  |
| `color.neutral.000`       | `#FFFFFF` | CONFIRMED                                          | White                                 |
| `color.semantic.success`  | `#16794A` | CONFIRMED                                          | Success foreground/background role    |
| `color.semantic.warning`  | `#D78B00` | CONFIRMED                                          | Warning with near-black text          |
| `color.semantic.error`    | `#B42318` | CONFIRMED                                          | Error with white text                 |
| `color.semantic.info`     | `#006D8F` | CONFIRMED                                          | Information/link alternative on light |

Official sources reviewed did not expose a public brand book or authoritative numeric cyan/type specification. `#00B7E5` is therefore a replaceable working value, not an official claim.

## Semantic color roles

| Token                             | Light/default       | Dark/inverted | Rule                                       |
| --------------------------------- | ------------------- | ------------- | ------------------------------------------ |
| `color.surface.page`              | `neutral.050`       | —             | Default page                               |
| `color.surface.primary`           | `neutral.000`       | `neutral.900` | Main section surface                       |
| `color.surface.raised`            | `neutral.000`       | `neutral.800` | Menu/dialog/sticky only                    |
| `color.surface.subtle`            | `neutral.100`       | `neutral.800` | Grouping, not every card                   |
| `color.surface.scrim`             | `rgba(8,12,15,.64)` | same          | Dialog backdrop; not photo overlay default |
| `color.text.primary`              | `#101619`           | `#F7FAFA`     | Body/headings                              |
| `color.text.secondary`            | `neutral.600`       | `#B8C3C8`     | Supporting copy                            |
| `color.text.disabled`             | `#7D898F`           | `#87949A`     | Paired with disabled affordance            |
| `color.border.subtle`             | `neutral.200`       | `#334047`     | Dividers/fields                            |
| `color.border.strong`             | `#87949A`           | `#7C8A91`     | Hover/selected structure                   |
| `color.action.primary.background` | `brand.cyan`        | `brand.cyan`  | Cotizar / single primary                   |
| `color.action.primary.text`       | `neutral.950`       | `neutral.950` | Never white on provisional cyan            |
| `color.action.primary.hover`      | `brand.cyan.hover`  | same          | Does not change dimensions                 |
| `color.action.primary.active`     | `brand.cyan.active` | same          | Near-black text retained                   |
| `color.action.secondary.text`     | `#101619`           | `#F7FAFA`     | Test Ride/secondary                        |
| `color.link.default`              | `#006D8F`           | `brand.cyan`  | Underline/other cue required               |
| `color.focus.on-light`            | `#006D8F`           | —             | 2px ring + 2px offset                      |
| `color.focus.on-dark`             | —                   | `brand.cyan`  | 2px ring + 2px offset                      |

## Verified contrast samples

Calculated with WCAG relative luminance:

| Pair                                     |   Ratio | Use                                       |
| ---------------------------------------- | ------: | ----------------------------------------- |
| Near-black `#080C0F` on cyan `#00B7E5`   |  8.32:1 | Primary button text — PASS AA/AAA         |
| Cyan `#00B7E5` on white                  |  2.36:1 | **FAIL for text**; accent/background only |
| Primary `#101619` on off-white `#F4F6F6` | 16.82:1 | Body — PASS                               |
| Secondary `#4E5C63` on off-white         |  6.38:1 | Body/support — PASS                       |
| Inverted `#F7FAFA` on charcoal `#12191D` | 16.92:1 | Dark body — PASS                          |
| White on error `#B42318`                 |  6.57:1 | Error banner/control — PASS               |
| White on success `#16794A`               |  5.43:1 | Success banner/control — PASS             |
| Near-black on warning `#D78B00`          |  7.09:1 | Warning banner — PASS                     |
| White on info `#006D8F`                  |  5.86:1 | Info banner — PASS                        |

Every real component/state and photographic crop still requires testing. These samples do not certify the entire system.

## Typography families

| Token                 | Proposed family             | Fallback                            | Status                                                  |
| --------------------- | --------------------------- | ----------------------------------- | ------------------------------------------------------- |
| `type.family.display` | `Barlow Condensed Variable` | `Arial Narrow`, `Arial`, sans-serif | PROVISIONAL; SIL OFL 1.1 candidate, not official CFMOTO |
| `type.family.ui`      | `Inter Variable`            | `Arial`, sans-serif                 | PROVISIONAL; SIL OFL 1.1 candidate, not official CFMOTO |

Use self-hosted WOFF2, subset only after Spanish/required glyph audit, preload only critical face, and align fallback metrics to minimize CLS. Recommended initial payload: one variable upright file per family; italics only if content proves need.

## Type roles

All sizes are `rem` equivalents assuming a 16px user default; never override user root size. `clamp` values describe intended interpolation.

| Token             |                    Min → max | Line height |  Weight | Family / notes                           |
| ----------------- | ---------------------------: | ----------: | ------: | ---------------------------------------- |
| `type.display.xl` |       3rem (48) → 7rem (112) |     .88–.92 |     700 | Display; uppercase/short only            |
| `type.display.l`  |    2.5rem (40) → 4.5rem (72) |     .92–.96 |     700 | Display                                  |
| `type.heading.1`  |   2.25rem (36) → 3.5rem (56) |        1.00 |     700 | Display; sentence or title case          |
| `type.heading.2`  | 1.875rem (30) → 2.75rem (44) |        1.05 | 650–700 | Display                                  |
| `type.heading.3`  |      1.5rem (24) → 2rem (32) |        1.12 |     650 | Display or UI by context                 |
| `type.heading.4`  |   1.25rem (20) → 1.5rem (24) |         1.2 |     650 | UI                                       |
| `type.body.l`     |                1.125rem (18) |         1.6 |     400 | UI; editorial lead                       |
| `type.body.m`     |                    1rem (16) |        1.55 |     400 | UI default                               |
| `type.body.s`     |                 .875rem (14) |         1.5 |     400 | UI supporting only                       |
| `type.label`      |                 .875rem (14) |        1.25 |     600 | UI; +.01em tracking                      |
| `type.caption`    |                .8125rem (13) |         1.4 |     450 | Source/caption, never critical tiny copy |
| `type.stat.xl`    |        3rem (48) → 5rem (80) |          .9 |     700 | Display; tabular numerals when available |
| `type.stat.m`     |        2rem (32) → 3rem (48) |         .95 |     700 | Display                                  |
| `type.button`     |                 .875rem (14) |           1 |     650 | UI; sentence case, no forced all-caps    |
| `type.navigation` |                 .875rem (14) |         1.2 |     600 | UI                                       |

Suggested fluid formula pattern: `clamp(min, intercept + viewport factor, max)`; Phase 4 uses the documented min/max and validates wrapping at 320, 768, 1280 and 1600px.

### Technical numerals

- Value: display family 700; tabular figures if supported; tracking `-0.01em` to `-0.02em` only at large sizes.
- Unit: UI family 600 at approximately 35–45% of value size, aligned to baseline; never detached on a new line without the value.
- Label: UI label/secondary below or beside value.
- Preserve exact source casing/units and non-breaking value–unit grouping where appropriate.
- In tables, UI family with tabular numerals is preferred for alignment; display numerals are reserved for KeyStats.

## Spacing scale

Base unit: 4px. Exceptions require documented optical reason.

| Token      |  px | Typical use                        |
| ---------- | --: | ---------------------------------- |
| `space.0`  |   0 | reset                              |
| `space.1`  |   4 | optical/internal micro gap         |
| `space.2`  |   8 | icon gap, compact stack            |
| `space.3`  |  12 | compact control gap                |
| `space.4`  |  16 | default component padding/gap      |
| `space.5`  |  20 | roomy control padding              |
| `space.6`  |  24 | component group                    |
| `space.8`  |  32 | module gap                         |
| `space.10` |  40 | large component                    |
| `space.12` |  48 | functional section minimum         |
| `space.16` |  64 | editorial/functional section       |
| `space.20` |  80 | large section                      |
| `space.24` |  96 | immersive mobile/editorial desktop |
| `space.32` | 128 | immersive desktop                  |
| `space.40` | 160 | exceptional campaign air           |

Density roles:

- `space.section.immersive`: 64–96px small → 128–160px large.
- `space.section.editorial`: 48–64px small → 80–96px large.
- `space.section.functional`: 32–48px small → 48–64px large.

## Grid, gutters and breakpoints

| Breakpoint |  Value | Grid | Margin | Gutter | Structural intent                           |
| ---------- | -----: | ---: | -----: | -----: | ------------------------------------------- |
| base       |      0 |    4 |   16px |   12px | 320px-safe, single-column tasks             |
| `sm`       |  480px |    4 |   24px |   16px | More inline utilities, not desktop behavior |
| `md`       |  768px |    8 |   32px |   20px | Two-column editorial; compare up to 2       |
| `lg`       | 1024px |   12 |   48px |   24px | Desktop nav/sidebar/list-map where viable   |
| `xl`       | 1280px |   12 |   64px |   24px | Full desktop compositions; compare up to 3  |
| `2xl`      | 1600px |   12 |   80px |   24px | Cap content; expand media/negative space    |

Breakpoints indicate behavior changes, not named devices. Content stress tests can move a component switch earlier without introducing arbitrary global breakpoints.

## Containers

| Token                | Max width | Use                                             |
| -------------------- | --------: | ----------------------------------------------- |
| `container.readable` |     720px | Long-form body; target 55–75 characters         |
| `container.standard` |    1200px | Navigation, forms, dealer/listing structure     |
| `container.wide`     |    1440px | Compare, broad product grids, editorial split   |
| `container.product`  |    1600px | Product hero/canvas; internal text still capped |
| `container.full`     |      none | Full-bleed media/surface only                   |

All containers use responsive page margins. Full bleed does not mean uncapped paragraphs or controls.

## Geometry

| Token          |           Value | Use                                                 |
| -------------- | --------------: | --------------------------------------------------- |
| `radius.none`  |               0 | Editorial media/dividers                            |
| `radius.sm`    |             2px | Buttons, tags, sharp controls                       |
| `radius.md`    |             4px | Fields/cards where containment helps                |
| `radius.lg`    |             8px | Dialogs/large overlays only                         |
| `radius.pill`  |           999px | Chips, switches, compact status only                |
| `angle.accent` | 8deg conceptual | Selective crop/divider/marker; never control hitbox |

## Borders and elevation

| Token             |                           Value | Use                                      |
| ----------------- | ------------------------------: | ---------------------------------------- |
| `border.hairline` |                             1px | Specs, forms, cards, separators          |
| `border.strong`   |                             2px | Focus-adjacent/selected/active structure |
| `border.accent`   |                             3px | Rare brand marker, not every component   |
| `shadow.none`     |                            none | Default                                  |
| `shadow.sticky`   |  `0 4px 16px rgba(8,12,15,.12)` | Sticky header/action separation          |
| `shadow.overlay`  | `0 16px 48px rgba(8,12,15,.20)` | Menu/dialog/dropdown                     |

No elevation token creates “floating SaaS cards.”

## Motion

| Token                        |                   Duration | Use                                         |
| ---------------------------- | -------------------------: | ------------------------------------------- |
| `motion.duration.instant`    |                        0ms | Reduced motion / immediate state            |
| `motion.duration.fast`       |                      120ms | Hover, press, focus-adjacent feedback       |
| `motion.duration.standard`   |                      220ms | Menu, accordion, filter/product state       |
| `motion.duration.expressive` |                      420ms | Campaign/product reveal, interruptible only |
| `motion.easing.standard`     |   `cubic-bezier(.2,0,0,1)` | State/transform                             |
| `motion.easing.enter`        | `cubic-bezier(.16,1,.3,1)` | Enter/reveal                                |
| `motion.easing.exit`         |   `cubic-bezier(.4,0,1,1)` | Exit                                        |

No production transition should exceed 500ms without explicit exception. Reduced motion resolves spatial movement/scale to `instant` or minimal opacity transition.

## Control and accessibility metrics

| Token                    |   Value | Rule                                                         |
| ------------------------ | ------: | ------------------------------------------------------------ |
| `control.height.compact` |    40px | Desktop-only secondary controls with 44px hit target wrapper |
| `control.height.default` |    48px | Buttons/inputs                                               |
| `control.height.large`   |    56px | Primary/mobile/prominent actions                             |
| `target.minimum`         | 44×44px | Project rule; spacing may provide equivalent hit area        |
| `focus.width`            |     2px | Visible ring                                                 |
| `focus.offset`           |     2px | Separation from component border                             |
| `content.line.readable`  | 55–75ch | Editorial copy target                                        |

## Z-index roles

| Token       | Value | Purpose                         |
| ----------- | ----: | ------------------------------- |
| `z.base`    |     0 | Page                            |
| `z.raised`  |    10 | Local overlap/decoration        |
| `z.sticky`  |   100 | Header/sticky CTA               |
| `z.overlay` |   200 | Backdrop/menu                   |
| `z.modal`   |   300 | Dialog                          |
| `z.notice`  |   400 | Critical persistent notice only |

No arbitrary `9999`. Stacking contexts must be documented by primitive.

## Source and validation notes

- [CFMOTO Global](https://www.cfmoto.com/global/) and the [official Download Center](https://www.cfmoto.com/global/media-center/download-center.html) were checked for public brand evidence; no authoritative numeric cyan/font specification was found.
- [Inter’s Google Fonts repository license](https://github.com/google/fonts/blob/main/ofl/inter/OFL.txt) identifies SIL Open Font License 1.1.
- [Barlow Condensed’s Google Fonts license](https://github.com/google/fonts/blob/main/ofl/barlowcondensed/OFL.txt) identifies SIL Open Font License 1.1; exact files/subsets must still be audited before self-hosting.

Client brand material overrides provisional brand/font tokens after contrast, glyph and performance validation—not by scattered component overrides.
