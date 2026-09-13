# Phase 5 Prototype

Implementation record for Header + Home Prototype + 450SR Visual Prototype.

## Delivered

- Shared responsive `SiteHeader` with desktop primary navigation and compact utilities.
- Mobile modal menu using native `dialog`, two-level `details`, scroll lock, Escape and focus restoration.
- Home with hero, vehicle-world choices, featured 450SR, Racing/Adventure, Technology, off-road pathways and local-network close.
- `/motos/450sr/` expressive hero, verified KeyStats band and precision data/status section.
- Desktop/mobile art direction through `PrototypeHeroMedia` and Astro image optimization.

## Content and asset boundary

The image pair under `src/assets/prototypes` was generated for private visual validation. Both are recorded as `proposal`, labelled in the UI and must be replaced by approved CFMOTO masters before production.

Only 450cc, 39Nm and 168kg are rendered as verified data, based on the Phase 0 audit. Price, availability, power, equipment, colors and commercial CTA eligibility remain pending. Disabled actions demonstrate hierarchy without suggesting that a real lead flow exists.

## Routes

- `/`
- `/motos/450sr/`
- `/dev/foundation/`

Other Header destinations express the approved IA but intentionally remain unimplemented.

## Validation contract

- Static build and Astro/TypeScript/content checks must pass.
- Home and 450SR remain `noindex, nofollow` with no false canonical.
- Header interaction must restore focus and keep background inert/scroll-locked while modal.
- No page-level horizontal overflow at the Phase 4 viewport matrix.
- Reduced motion removes reveal movement without hiding content.
- Final brand assets, photography crops, copy and every commercial state require client approval.
