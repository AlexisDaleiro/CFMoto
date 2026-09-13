# CFMOTO Uruguay

Proyecto comercial para rediseñar la plataforma oficial local con Astro. Es showroom, catálogo y sistema de leads; no es un ejercicio de portfolio.

## Leer primero

1. `docs/PROJECT_BRIEF.md`
2. `docs/DECISIONS.md`
3. `docs/INFORMATION_ARCHITECTURE.md` y `docs/NAVIGATION_SPEC.md`
4. `docs/TECHNICAL_ARCHITECTURE.md` y `docs/CONTENT_MODEL.md` antes de cambiar arquitectura o contenido.
5. `docs/DESIGN_SYSTEM.md` y `docs/DESIGN_TOKENS.md` para toda implementación visual.
6. `docs/COMPONENT_SPEC.md`, `docs/RESPONSIVE_SYSTEM.md` y `docs/ACCESSIBILITY_DESIGN_SPEC.md` según la tarea.
7. `docs/UX_REQUIREMENTS.md` / `docs/WIREFLOWS.md` según la experiencia.
8. Usar `docs/OPEN_QUESTIONS.md` solo para dependencias reales del cliente.

## Principios

- Astro 7 + TypeScript estricto + Content Layer; HTML estático y mínimo JS.
- No agregar React/Vue/Svelte, CMS, mapas o dependencias sin necesidad documentada y ADR cuando afecte arquitectura.
- `src/styles/tokens.css` es la fuente ejecutable de tokens; debe permanecer alineada con `docs/DESIGN_TOKENS.md`.
- Categoría/familia/uso antes que cilindrada; precio principalmente en ficha.
- Cotización, test ride, WhatsApp, dealer, service y comparar son conversiones centrales.
- No inventar ni migrar specs/assets sin validar: el sitio actual contiene contradicciones críticas.
- Diseñar mobile por tarea; WCAG 2.2 AA, SEO y performance desde arquitectura.
- No copiar CFMOTO Global o Kawasaki; extraer patrones adaptados a Uruguay.
- URLs: `/motos/[slug]`, `/atv/[slug]`, `/side-by-side/[slug]`; ubicaciones en `/ubicaciones/[slug]`.
- Compare máximo 3 y nunca entre categorías. Lista accesible siempre acompaña al mapa.

## Gobierno

Contenido repetible vive como datos con fuente, estado y fecha de verificación. Registrar decisiones nuevas en `docs/DECISIONS.md`; actualizar documentos existentes en lugar de duplicar análisis.

Phase 0–6 están documentadas e implementadas. La dirección oficial es **Hybrid — Apex + Engineered Clarity** dentro de un único Design System, nunca dos temas o sistemas paralelos. Principio rector: **Expressive where emotion matters. Precise where decisions matter.** Los assets `src/assets/prototypes/450sr-concept-*` son `proposal`, no oficiales, y deben reemplazarse antes de producción. Datos técnicos/precios se renderizan mediante guards de verificación; `copyStatus: proposal` nunca equivale a claim oficial. Cyan `#00B7E5` y Barlow Condensed + Inter siguen provisionales. El próximo alcance requiere brief explícito.
