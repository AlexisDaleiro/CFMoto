# CFMOTO Uruguay — Project Brief

**Fase:** Phase 0–5 completadas; siguiente fase pendiente de brief
**Corte de investigación:** 2026-09-13  
**Estado:** borrador de trabajo para validación comercial

## Visión

Convertir la presencia digital de CFMOTO Uruguay en una plataforma de marca, descubrimiento de producto y generación de oportunidades comerciales. Debe funcionar como showroom, catálogo, plataforma institucional y editorial, y canal medible de cotización, test ride, WhatsApp, dealer y service.

## Problema a resolver

El sitio actual publica una oferta real y una red de servicio, pero las presenta como páginas aisladas. La arquitectura por cilindrada, los datos inconsistentes, la ausencia de herramientas de decisión y las conversiones poco contextuales reducen confianza, descubrimiento y capacidad comercial. El producto futuro necesita una fuente de contenido gobernada, rutas comprensibles y journeys que conecten marca con acción.

## Objetivos

1. Hacer descubrible el catálogo por categoría, familia, uso y atributos relevantes.
2. Construir fichas fiables que expliquen beneficios y permitan decidir.
3. Llevar cada contexto hacia cotización, test ride, WhatsApp o dealer/service.
4. Dar protagonismo a Racing, Adventure, Technology y Community, conectándolos con productos.
5. Crear una base Astro mantenible, rápida, accesible y preparada para ampliar catálogo.
6. Habilitar medición de leads y un servicio mensual de contenido, SEO, performance y evolución.

## Alcance de producto previsto

- Home/showroom y navegación global.
- Catálogos de motocicletas, ATV y Side-by-Side.
- Aproximadamente seis fichas de demostración iniciales, luego catálogo completo.
- Comparador dentro de una misma categoría compatible.
- Cotización, test ride y contacto por WhatsApp.
- Localizador de concesionarios, puntos de venta, service y repuestos.
- Experiencias editoriales Racing, Adventure, Technology y Community.
- Institucional, contacto y noticias secundarias.
- SEO técnico, analytics, seguridad de formularios y gobierno de contenido.

Los detalles de IA, modelo de contenido y tecnología viven en `INFORMATION_ARCHITECTURE.md`, `CONTENT_MODEL.md`, `TECHNICAL_PRINCIPLES.md` y `TECHNICAL_ARCHITECTURE.md`.

## Audiencia inicial

| Segmento             | Intención / necesidad                    | Preguntas y fricción                        | CTA probable                 |
| -------------------- | ---------------------------------------- | ------------------------------------------- | ---------------------------- |
| Primer comprador     | Entender opciones y confianza de marca   | “¿Me sirve?”, altura, costo total, respaldo | Comparar, test ride, cotizar |
| Upgrade de moto      | Mejorar potencia, equipamiento y uso     | Diferencias reales entre versiones          | Comparar, cotizar            |
| Entusiasta deportivo | Performance, tecnología, Racing          | Datos fiables y disponibilidad local        | Ver SR, comparar, test ride  |
| Adventure/touring    | Autonomía, confort, equipaje, asistencia | Uso real, accesorios y red                  | Ver MT, dealer, cotizar      |
| ATV recreativo       | Capacidad y diversión segura             | Pasajeros, tracción, terreno                | Filtrar, WhatsApp            |
| ATV profesional      | Trabajo, carga, arrastre y soporte       | Robustez, repuestos, service                | Cotizar, dealer/service      |
| UTV/Side-by-Side     | Utilidad o deporte, plazas y carga       | Diferencia ZFORCE/UFORCE                    | Comparar, WhatsApp           |
| Comparador de marcas | Reducir riesgo y justificar compra       | Precio, especificaciones, garantía, red     | Comparar, dealer, test ride  |

## Conversiones primarias

1. Solicitar cotización.
2. Solicitar test ride.
3. Contactar por WhatsApp.
4. Encontrar concesionario.
5. Encontrar service.
6. Comparar vehículos.

Cada lead debe conservar contexto: modelo/categoría, campaña o contenido de origen, dealer elegido, consentimiento y parámetros de atribución.

## KPIs propuestos

**Negocio:** leads válidos por tipo, tasa visita→lead, tasa ficha→lead, uso de WhatsApp, dealer/service contacts, leads por modelo y fuente.  
**Producto:** uso de filtros, comparaciones iniciadas/completadas, profundidad de ficha, búsquedas sin resultado, abandono de formularios.  
**Contenido:** visitas y asistencia de Racing/Adventure/Technology/Community hacia producto y conversión.  
**Calidad:** Core Web Vitals por plantilla, Lighthouse 95+ como objetivo, errores 404, cobertura indexada, completitud/antigüedad de datos y accesibilidad 95+.

No usar métricas vanidosas como pageviews aisladas para evaluar éxito comercial.

## Restricciones

- Astro + TypeScript; HTML estático cuando sea posible e islands justificadas.
- No incorporar React/Vue/Svelte sin necesidad demostrable.
- La cilindrada no es navegación primaria.
- El precio vive principalmente en la ficha y admite USD, UYU, “Desde”, consulta o no disponible.
- No inventar datos: todo dato dudoso conserva estado de verificación.
- Diseño propio para Uruguay; referencias internacionales se usan como patrones, no como copia.
- Mobile se diseña por tarea y dispositivo, no como desktop apilado.
- La documentación es la memoria principal entre sesiones.

## Principios

- **Brand:** producto, fotografía y relato antes que decoración.
- **UX:** decisión progresiva, lenguaje claro y CTAs con contexto.
- **Business:** toda experiencia relevante conecta con una conversión medible.
- **Engineering:** contenido estructurado, poco JS, dependencia mínima y evolución segura.
- **Trust:** especificaciones, disponibilidad, precios y red requieren dueño y fecha de validación.
- **Accessibility:** semántica, teclado, foco, contraste y reduced motion desde diseño.

## Fuera de alcance inicial

- E-commerce/transacciones, financiación y cuentas de usuario.
- Configurador 3D, realidad aumentada o personalización compleja.
- CMS, CRM, mapas, backend y formularios definitivos antes de seleccionar integraciones.
- Catálogo completo producido visualmente en la demo inicial.
- UI final, componentes, animación implementada y sistema de tokens antes de aprobar una dirección creativa.

## Resultado de Phase 2

Se definieron tres direcciones comparables: **Apex / Performance Editorial**, **Engineered Clarity / Precision Tech** y **Open Terrain / Adventure Premium**. La selección oficial es **Hybrid — Apex + Engineered Clarity**: Apex gobierna momentos expresivos y Engineered Clarity tareas funcionales, dentro de un único lenguaje visual.

La selección habilitó Phase 3 para definir un solo Design System compartido bajo el principio **Expressive where emotion matters. Precise where decisions matter.** Ese trabajo ya está documentado en el resultado siguiente; brand book, tipografía/licencias, logo/cyan y derechos siguen pendientes de validación oficial.

## Resultado de Phase 3

`DESIGN_SYSTEM.md` unifica Apex y Engineered Clarity con una sola foundation de color, tipografía, grid, spacing, containers, geometría, componentes, estados, iconografía, motion, responsive y accesibilidad. `DESIGN_TOKENS.md` distingue valores confirmados de cyan/fuentes provisionales; `COMPONENT_SPEC.md`, `RESPONSIVE_SYSTEM.md` y `ACCESSIBILITY_DESIGN_SPEC.md` dejan contratos implementables sin construir páginas finales.

Phase 4 — Astro Technical Foundation fue autorizada con estos límites: foundations y componentes aislados, brand/font values reemplazables, ningún dato inventado y ninguna feature/página final adelantada.

## Resultado de Phase 4

Astro 7.3.2, TypeScript estricto, CSS nativo, tokens, tipografía local, layouts/primitives semánticos, SEO seguro, Content Layer tipada y accesibilidad base están implementados. El build estático no envía JavaScript propio de hidratación y los fixtures conservan estado de verificación explícito.

Phase 5 — Header + Home Prototype + 450SR Visual Prototype fue autorizada sobre esta base.

## Resultado de Phase 5

Header responsive, Home editorial y `/motos/450sr/` están implementados como prototipos no indexables. Demuestran Apex en apertura/producto y Engineered Clarity en datos/estados sin bifurcar componentes o tokens. El menú mobile usa controles nativos y JavaScript mínimo; la imagen conceptual tiene art direction desktop/mobile y estado `proposal`.

Solo se muestran los datos 450SR registrados como verificados en Phase 0. Precio, disponibilidad, potencia, equipamiento y CTAs comerciales siguen bloqueados. La siguiente fase requiere un brief explícito; este resultado no está listo para producción.

## Criterio de éxito de Phase 0

Existe una base documental accionable, auditada y trazable para entrar en Phase 1 sin implementar UI. Las decisiones que dependen del cliente están aisladas en `OPEN_QUESTIONS.md`.

## Quality gate de cierre

- [x] Sitio actual y principales plantillas auditados.
- [x] Catálogo enlazado y productos ocultos relevantes identificados.
- [x] Inconsistencias y niveles de confianza documentados.
- [x] CFMOTO Global y Kawasaki analizados como referencias diferenciadas.
- [x] Audiencias, conversiones y seis journeys documentados.
- [x] IA, URL strategy, taxonomía, filtros y relaciones preliminares documentados.
- [x] Modelo de contenido y necesidades de compare/locator documentados.
- [x] Principios técnicos, SEO, performance, accesibilidad, seguridad y analytics definidos.
- [x] Decisiones y preguntas del cliente persistidas.
- [x] `AGENTS.md` compacto creado.
- [x] No se desarrolló UI ni se agregaron dependencias.
