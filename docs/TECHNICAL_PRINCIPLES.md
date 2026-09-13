# Technical Principles

## Architecture baseline

- **Astro** es el framework principal; **TypeScript** estricto para datos e integraciones.
- Generar HTML estático para catálogo, fichas, institucional y editorial siempre que el freshness model lo permita.
- Astro Content Collections son la primera opción para contenido versionado y validable; CMS queda como decisión posterior basada en workflow.
- Islands solo para interacciones con estado real: filtros complejos, comparación, mapa o formularios cuando progressive enhancement no alcance.
- No añadir React/Vue/Svelte por defecto. JavaScript simple o Web Components primero cuando sean suficientes.

## JavaScript policy

Todo script de cliente necesita: problema que resuelve, alternativa sin JS, presupuesto, owner y criterio de eliminación. Navegación, contenido, links de teléfono/WhatsApp, ficha y lista de ubicaciones deben ser utilizables sin hidratar una SPA. Formularios requieren fallback/estado de error comprensible; el comparador puede usar JS pero debe mantener URLs/HTML significativos.

## Content and maintainability

- Contenido repetible vive como datos; componentes no contienen specs, precios o direcciones hardcodeadas.
- Separar valor normalizado de display y conservar fuente/estado/fecha.
- Validaciones de build deben impedir slugs duplicados, producto activo incompleto, asset sin alt/rights y relaciones rotas.
- Generar mapa de redirects desde URLs actuales y probarlo en CI.
- Documentar ADRs en `DECISIONS.md`; actualizar auditoría, no duplicarla.

## Image strategy

- Source master con derechos confirmados; derivados AVIF/WebP y fallback cuando corresponda.
- `srcset`/`sizes`, dimensiones reservadas y focal point por breakpoint para evitar CLS/cortes.
- Hero/LCP no lazy; preload solo del asset realmente elegido. Resto lazy y decoding async según caso.
- No cargar todas las variantes/galería al inicio. Thumbnails y ampliación accesibles.
- Alt describe propósito/producto/color, nunca nombre de archivo; decorativas con alt vacío.

## SEO

- URLs y redirects según `INFORMATION_ARCHITECTURE.md`.
- Metadata tipada por plantilla: title, description, canonical, OpenGraph y social image.
- Sitemap solo con URLs canónicas publicables; robots.txt explícito y entornos no productivos bloqueados.
- Breadcrumb visible + `BreadcrumbList`.
- JSON-LD: `Organization`, `WebSite`; `Product` solo con datos/ofertas válidos; `Article`; `LocalBusiness`/subtipo apropiado para ubicaciones.
- No inventar review/rating/stock. Validar structured data con herramientas oficiales.
- Control de thin/duplicate pages para filtros, legacy y campañas vencidas.

## Performance

Objetivo futuro 95+ en Lighthouse, subordinado a Core Web Vitals reales:

- LCP: media hero optimizada, CSS crítico razonable, fuentes y origen de assets controlados.
- CLS: tamaño de media, reservas para embeds/formularios, fonts con métricas compatibles.
- INP: hidratar tarde y poco; evitar listeners globales/trabajo largo.
- Presupuestos iniciales a fijar con baseline: JS cliente por plantilla, peso LCP, fuentes, terceros y total de requests.
- Fonts self-hosted/licenciadas, subset y pocas variantes; `font-display` según riesgo.
- Analytics, mapa, video y embeds cargan por intención/consentimiento cuando sea posible.
- Medir en mobile real, red limitada y plantillas representativas; no optimizar solo home.

## Accessibility

- Objetivo WCAG 2.2 AA; HTML semántico y heading outline validado.
- Skip link, landmarks, labels/instrucciones, errores asociados y summary de formulario.
- Foco visible, orden lógico, teclado completo y escape/return de menús/modales.
- Contraste medido en estados y sobre fotografía; no depender del cyan/color para significado.
- Respetar `prefers-reduced-motion`; controles para autoplay/carruseles/video.
- Comparador como tabla semántica o equivalente correctamente encabezado; estrategia mobile accesible.
- Mapa nunca es única vía: lista filtrable equivalente.
- Tests automáticos + recorrido manual con teclado y lector de pantalla antes de producción.

## Security

Threat model proporcional:

- Formularios: validación server-side, sanitización/encoding, CSRF según arquitectura, honeypot/rate limit y anti-spam accesible.
- No confiar en campos ocultos para precio/modelo/routing; validar IDs permitidos.
- Secrets solo en variables de entorno del servidor/CI; nunca en cliente o repo.
- Security headers: CSP basada en orígenes reales, HSTS, frame-ancestors, Referrer-Policy, Permissions-Policy y nosniff.
- Dependencias mínimas, lockfile, revisión de advisories y cadencia mensual.
- Integraciones con timeouts, logs sin PII innecesaria y degradación segura.
- Definir retención/acceso a leads, consentimiento y proveedor antes de producción.

## Analytics

- Plan de medición antes de etiquetas: evento, trigger, propiedades, propósito y owner.
- Eventos: `view_item_list`, `select_item`, `filter`, `add_to_compare`, `view_compare`, `quote_start/submit`, `test_ride_start/submit`, `whatsapp_click`, `dealer_select`, `directions_click`, `service_contact`.
- Propiedades no sensibles: vehicle ID/family/category, dealer ID, source experience/campaign, result count.
- Consent mode/cookies conforme a decisión legal; no enviar mensaje libre, teléfono o email a analytics.
- QA de duplicados y continuidad con CRM/lead routing.

## Deployment and quality

- Preview por PR, build reproducible, type/content validation, link/redirect checks y HTML/axe smoke tests.
- Monitorear uptime, errores de formulario, 404, CWV y expiración de campañas/precios.
- Backups/versionado de contenido y procedimiento de rollback.
- Separar configuración por entorno; producción requiere canonical/base URL correctos.

## Known risks from current site

- Migración automática propagaría datos/assets equivocados.
- Plugins y terceros actuales no deben heredarse por inercia.
- No se verificaron Search Console, analytics, servidor, robots o sitemap desde Phase 0.
- Brand fonts/assets/licencias e integraciones aún dependen del cliente.

## Skills requested in brief

`caveman`, `ponytail` y `graphify` fueron buscadas en skills, plugins y workspace, pero no estaban instaladas/localizables. No se asumieron comportamientos. La relación IA→contenido→producto→conversión se documentó como texto estructurado en lugar de usar Graphify.
