# CFMOTO Uruguay

Astro prototype for the future CFMOTO Uruguay showroom, catalog and lead platform. Phase 5 includes the responsive Header, Home and a validation-safe 450SR visual prototype—not production commercial features.

## Requirements

- Node.js 22.12 or newer
- npm 9.6.5 or newer

## Setup

```sh
npm install
npm run dev
```

Routes:

- `/` — Phase 5 Home prototype (`noindex`)
- `/motos/450sr/` — visual product prototype with verified-data boundary (`noindex`)
- `/dev/foundation/` — development-only Design System test harness (`noindex`)

Header links intentionally expose the approved future IA. Routes other than the three above are not implemented yet.

The Astro Fonts API downloads/caches provisional fonts during build. Network access may be needed on the first clean install/build; runtime output serves them locally.

## Commands

```sh
npm run dev          # local development
npm run check        # Astro + TypeScript + content validation
npm run format       # format source/config files
npm run format:check # check source/config formatting
npm run build        # static production build
npm run preview      # preview the build
npm run validate     # check + format check + build
```

In a restricted environment, set `ASTRO_TELEMETRY_DISABLED=1` for Astro CLI commands if it cannot write its user telemetry config.

## Structure

```text
src/components/   minimal primitives and SEO
src/config/       site-wide configuration
src/content/      schemas and nonpublishable fixtures
src/layouts/      BaseLayout
src/pages/        placeholder and development preview
src/styles/       reset, tokens, typography, global, utilities
docs/             architecture, UX, design and project decisions
```

## Read before changing architecture

1. `AGENTS.md`
2. `docs/TECHNICAL_ARCHITECTURE.md`
3. `docs/DESIGN_SYSTEM.md` and `docs/DESIGN_TOKENS.md`
4. `docs/CONTENT_MODEL.md`
5. `docs/DECISIONS.md` and relevant UX specifications

Do not add a UI framework, CMS, map, analytics, form/backend library or significant client JavaScript without a demonstrated feature need and recorded decision. Brand cyan and fonts remain provisional and replaceable through central configuration/tokens.
