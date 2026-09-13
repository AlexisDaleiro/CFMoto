# CFMOTO Uruguay

Astro foundation for the future CFMOTO Uruguay showroom, catalog and lead platform. Phase 4 intentionally includes foundations and a development preview—not final pages or commercial features.

## Requirements

- Node.js 22.12 or newer
- npm 9.6.5 or newer

## Setup

```sh
npm install
npm run dev
```

Routes:

- `/` — minimal build placeholder
- `/dev/foundation/` — development-only Design System test harness (`noindex`)

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
