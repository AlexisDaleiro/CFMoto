# Phase 8 — Brand Experience

Implementation record for Racing, Adventure, Technology and Community.

## Architecture

- `/experiencia/` is the brand hub and exposes four differentiated promises without becoming a catalog duplicate.
- Four explicit static pages implement their own narrative compositions: `/experiencia/racing/`, `/experiencia/adventure/`, `/experiencia/tecnologia/` and `/experiencia/comunidad/`.
- Shared primitives are limited to `ExperienceHero`, `ExperienceNavigation`, `ProductBridge` and `ExperienceFooter`. Each page owns its content rhythm and scoped CSS; there is no universal section renderer or second visual theme.
- `experiences` is an Astro Content Layer collection. Its schema validates slug/mode, hero, sections, related product slugs, source status and optional references.

## Source and content policy

All new brand narrative is `proposal`. It describes creative positioning and interaction intent, not official CFMOTO copy. Experience pages never duplicate technical values: related product facts are read through the existing verified Product guard.

- Racing publishes no competition credentials, results or technology-transfer claims.
- Adventure publishes no route, autonomy, equipment or capability claim.
- Technology initially covers only verified engine/dimension values already present in Product content; unsupported feature categories are explicitly deferred.
- Community contains an editorial publication framework, not fake events, owner stories, counts or social proof.

The public UI does not expose internal `proposal` labels. Preview remains `noindex, nofollow`, and documentation preserves the review boundary.

## Product bridges

- Racing → SR → 450SR → detail / compare / demo quote / dealer path.
- Adventure → MT → 800MT Touring → detail / compare / demo quote / dealer path.
- Technology → verified facts from 450SR, 800MT Touring and ZFORCE 1000 Sport → detail / compare.
- Community remains intentionally non-commercial and points to Adventure, catalog and Service.

No test-ride promise, availability, price or WhatsApp action was enabled.

## Visual system

- Racing: dark velocity field, oversized identity and ordered sequence.
- Adventure: light terrain field, horizon line, slower spacing and preparation rhythm.
- Technology: dark precision grid followed by calm factual tables and definition lists.
- Community: compact light foundation and an honest dark editorial-status close.

All four use the existing fonts, cyan, containers, grid, spacing, borders, controls, focus treatment and responsive rules. Phase 8 adds no image or generated visual; CSS geometry is the approved fallback until rights-cleared assets arrive.

## Responsive and accessibility

- Hero type is fluid and capped; decorative fields remain outside reading order.
- Experience subnavigation scrolls horizontally at narrow widths while retaining 44px targets and current-page state.
- Product bridges stack below 1024px. Technology facts use semantic definition lists; the wide factual region receives a keyboard-focusable horizontal viewport when needed.
- Heading hierarchy, labelled navigation, ordered sequences, link names, focus styles and no-JS HTML were inspected. Motion is one optional entrance using existing tokens and is absent under `prefers-reduced-motion: reduce`.

## Performance

- New client JavaScript: 0 bytes. Experience pages inherit 1,144 bytes of inline Header + CompareBar logic; they reference no page-specific external JavaScript.
- Built CSS across the complete site: 72,544 bytes uncompressed in 11 emitted files. Per-route CSS references are approximately 19.1KB for the hub, 23.9KB for Racing/Adventure/Community and 28.0KB for Technology.
- New images: 0. Existing build output remains 12 WebP derivatives / 640,650 bytes from the same two Phase 5 proposal assets used elsewhere.

## Validation

- `npm run validate`: PASS — 0 Astro errors, warnings or hints; formatting passes; 32 static pages build.
- `npm audit --audit-level=moderate`: PASS — 0 vulnerabilities.
- Browser review: PASS for hub and all four vertical heroes/compositions. Reflow measurements at 320, 375, 390, 430, 768, 1024, 1280, 1440, 1600 and 1920px keep document `scrollWidth` equal to `clientWidth`; the Experience subnav remains an intentional internal horizontal viewport on narrow screens.
- Accessibility tree smoke: PASS for hub and all four verticals; headings, navigation, lists, definition lists and product routes expose meaningful names.
- Static/no-JS baseline: Experience content, navigation, product links and facts are present in generated HTML. No Experience function depends on JavaScript.

## Production blockers

Production imagery, Racing evidence, approved Adventure claims/context, per-model Technology documentation, local Community stories/releases, editorial ownership/cadence, final brand system and canonical infrastructure remain pending. See `ASSET_REQUIREMENTS.md` and `OPEN_QUESTIONS.md`.
