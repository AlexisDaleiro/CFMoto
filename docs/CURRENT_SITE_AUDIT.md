# Current Site Audit

**Sitio auditado:** https://cfmotouruguay.com/  
**Corte:** 2026-09-13  
**Método:** recorrido desktop/mobile, inspección semántica de home, contacto y 450SR, revisión de categorías, 27 fichas enlazadas o descubiertas, service, institucional, noticias y footer. Hallazgos técnicos son de caja negra y no sustituyen Lighthouse, Search Console ni analytics.

## Executive summary

El sitio logra presencia básica de marca y expone catálogo, contacto y service. Sin embargo, funciona más como repositorio de páginas que como herramienta comercial. La home es esencialmente un slider; el catálogo se ordena por cilindrada; no hay comparación, filtros por uso, test ride ni dealer locator; y las fichas carecen de CTAs contextuales y gobierno de datos. Los errores de contenido encontrados son suficientemente graves para afectar confianza: imágenes de CFORCE aparecen en motocicletas y UTV, modelos ocultos del índice contienen especificaciones de otro vehículo y hay unidades/etiquetas incorrectas.

En la muestra técnica, la home no presentó `meta description` ni `h1`, tenía 10 de 16 imágenes sin alt útil, 36 scripts y 15 hojas de estilo. La ficha 450SR tampoco presentó `h1`, descripción ni Product structured data; cargaba 41 scripts y 25 hojas de estilo. Estos conteos no son una medición de rendimiento, pero sí un riesgo claro de complejidad y payload para una experiencia mayormente editorial.

## Fortalezas

- Categorías principales —motos, ATV y Side-by-Side— son visibles.
- Existe contenido técnico y fotográfico reutilizable sujeto a validación.
- El tono rioplatense/local aparece en varias descripciones.
- Se publican contacto, horarios, dirección y una red de diez puntos de service.
- Hay enlaces sociales activos y reconocimiento institucional local.
- URLs de producto son relativamente cortas, aunque sin jerarquía.

## Debilidades por disciplina

### UX e IA

- **HIGH:** la home no explica propuesta, gama, respaldo ni próximos pasos; depende de un carrusel con CTA genérico “Ver más”.
- **HIGH:** cilindrada organiza el catálogo antes que intención/familia. Un usuario debe conocer cc para descubrir una opción.
- **HIGH:** no hay búsqueda, filtros, comparación ni ayudas para primer comprador.
- **HIGH:** product pages terminan en galería/disclaimer, sin cotización, test ride, WhatsApp o dealer contextual.
- **HIGH:** “Service” actúa también como “Distribuidores” en footer, mezclando dos intenciones distintas.
- **MEDIUM:** etiquetas inconsistentes: `SidebySide/UTV`, `side by side`, SSV/UTV y mayúsculas variables.
- **MEDIUM:** “Fan CFMOTOUY” y “Próximamente” ocupan navegación primaria sin comunicar valor actual.

### Diseño y marca

- **HIGH:** la home observada es casi únicamente header + slider + footer; no construye jerarquía editorial ni prueba de producto/red.
- **HIGH:** la ficha 450SR mostró en mobile un hero de producto severamente recortado/roto y assets etiquetados `CFORCE450`.
- **MEDIUM:** navegación desktop larga, comprimida y con denominaciones poco legibles; mobile expone una lista plana de nueve destinos.
- **MEDIUM:** CTAs y composición no diferencian descubrimiento, decisión y contacto.
- **LOW:** inconsistencias ortográficas y tipográficas reducen percepción premium.

### Contenido

- **CRITICAL:** imágenes/alt/archivos de CFORCE 450 se reutilizan en fichas de motos y UTV; el problema aparece en 150NK, 250NK, 300SR, 700CL-X Heritage, 450SR, UFORCE 800 y ZFORCE 1000 Sport, entre otras.
- **CRITICAL:** `/uforce-800/` publica datos de 400 cc y dimensiones/colores coincidentes con CFORCE 450L, incompatibles con el nombre del vehículo.
- **CRITICAL:** `/cforce-450l/` se titula “CFORCE 450L” en SEO/listado, pero el encabezado visible dice “CFORCE 450S”.
- **HIGH:** 450SR muestra ratio de compresión `11.1:5`, formato inválido/sospechoso.
- **HIGH:** ZFORCE 1000 Sport etiqueta potencia como 80 kW; requiere validación porque la ficha parece traducida mecánicamente y usa “Tuerca máxima” para torque.
- **HIGH:** 800MT Touring repite “ABS y ABS de paso en curva” en el campo Suspensión.
- **HIGH:** afirmaciones institucionales (“más del 50%”, empleados, patentes, países, award) no muestran fecha ni fuente.
- **MEDIUM:** la única noticia listada refiere a MotoGP 2022; comunica abandono editorial.
- **MEDIUM:** textos muestran errores de redacción/traducción (`4 valores`, `Suministro de cambios`, `CTV`, `ELECTRO BOSCH EFI`, `sueva`, etc.).

### Conversiones

- **CRITICAL:** no existe un flujo explícito de test ride ni selector de dealer/modelo.
- **HIGH:** el formulario genérico de cotización se repite en categorías, no preserva contexto de producto y exige JS para completar.
- **HIGH:** WhatsApp no aparece como vía contextual aunque se publican teléfonos.
- **HIGH:** los formularios observados no marcan campos obligatorios en HTML y no muestran consentimiento/privacidad en el contenido visible.
- **MEDIUM:** no se comunican expectativas de respuesta, disponibilidad o siguiente paso.

### SEO

- **HIGH:** home y 450SR no presentaron meta description; ambas carecieron de `h1` en la inspección DOM.
- **HIGH:** no se detectó JSON-LD en 450SR ni contacto; faltan señales Product, Organization/LocalBusiness y BreadcrumbList.
- **HIGH:** URLs planas y nombres heredados (`/650mt-4/`, `/700cl-x-sport-6/`, `/cforce-1000-por-tierra/`, `/shop-2/`) no expresan taxonomía estable.
- **HIGH:** catálogo enlazado y páginas indexables difieren; 450L y UFORCE 800 existen pero no aparecen en categorías.
- **MEDIUM:** títulos inconsistentes (`450sr – CFMOTO Uruguay`, casing variable) y contenido duplicado/reutilizado pueden diluir relevancia.
- **NEEDS VALIDATION:** robots/sitemap no pudieron verificarse con las herramientas de esta auditoría; confirmar en Search Console o servidor.

### Performance

- **HIGH (riesgo):** 36 scripts/15 stylesheets en home y 41/25 en 450SR para páginas mayormente estáticas sugieren dependencia excesiva de WordPress/plugins.
- **HIGH (riesgo):** abundancia de imágenes de gran tamaño y slider above-the-fold puede perjudicar LCP y ancho de banda móvil.
- **MEDIUM:** carruseles, galerías y múltiples assets repetidos elevan JS, peticiones y memoria.
- No se reportan scores sintéticos sin una medición reproducible en Phase 1/implementation baseline.

### Mobile

- **HIGH:** el CTA del hero no quedó visible en el viewport 390×844 observado; la imagen ocupa casi toda la experiencia.
- **HIGH:** 450SR mostró composición rota: gran vacío blanco y fragmentos de motocicleta antes del contenido.
- **MEDIUM:** el menú móvil es una lista extensa sin agrupación ni accesos persistentes a leads.
- **MEDIUM:** tablas/tabs de especificaciones requieren patrón específico; no se puede asumir que tabs desktop sean suficientes.

### Accessibility

- **HIGH:** ausencia de `h1` en home y producto debilita estructura semántica.
- **HIGH:** 10/16 imágenes de home carecían de alt útil; en 450SR eran 6/18 y otros alt describen nombres de archivo/modelo incorrecto.
- **HIGH:** los controles del slider dependen de imagen/estado; hay que validar nombre accesible, pausa y teclado.
- **MEDIUM:** contraste de texto sobre fotografía y foco visible requieren medición formal.
- **MEDIUM:** teléfonos no se presentan consistentemente como acciones; tablas, tabs y menú requieren lectura/teclado verificados.
- Positivo: existe enlace “Ir al contenido”, `lang="es"` y labels asociados en el formulario de contacto observado.

## Hallazgos priorizados

| Prioridad | Hallazgo                                               | Impacto                           | Acción                                                  |
| --------- | ------------------------------------------------------ | --------------------------------- | ------------------------------------------------------- |
| CRITICAL  | Datos e imágenes de productos equivocados              | Confianza, riesgo comercial/legal | Congelar migración automática; validar por modelo/campo |
| CRITICAL  | UFORCE 800 publica especificaciones de CFORCE 450      | Decisión de compra errónea        | Despublicar/corregir tras confirmación cliente          |
| CRITICAL  | Sin journeys claros de test ride/cotización contextual | Pérdida de leads                  | Diseñar flujos con modelo/dealer/origen                 |
| HIGH      | Catálogo visible incompleto respecto a URLs publicadas | Descubrimiento e indexación       | Definir estado `active/listed/legacy` y fuente maestra  |
| HIGH      | IA por cilindrada y menú plano                         | Encontrabilidad                   | Categoría → familia/uso; cc como filtro                 |
| HIGH      | Fichas sin CTAs ni comparación                         | Conversión                        | Arquitectura de ficha orientada a decisión              |
| HIGH      | Semántica/metadata/structured data incompletos         | SEO y accesibilidad               | Requisitos de plantilla y validación automática         |
| HIGH      | Riesgo de payload WordPress/plugins                    | CWV/mobile                        | Baseline; Astro estático y presupuesto JS               |
| MEDIUM    | Contenido editorial desactualizado                     | Marca y autoridad                 | Modelo editorial evergreen + campañas                   |
| MEDIUM    | Dealer y service mezclados                             | Tarea y expectativa               | Entidades/rutas diferenciadas con filtros               |

## Quick wins (para fases posteriores)

1. Acordar fuente maestra y retirar de navegación datos no validados.
2. Corregir UFORCE 800, CFORCE 450L/450S, 450SR y 800MT Touring antes de reutilizar contenido.
3. Reemplazar CTAs genéricos por modelo/acción y capturar contexto.
4. Separar dealer de service y normalizar teléfonos/WhatsApp/direcciones.
5. Definir title, description, canonical, h1, breadcrumbs y JSON-LD por plantilla.
6. Crear hoja de control de completitud, owner y `lastVerifiedAt`.

## Strategic opportunities

- Convertir Racing/Adventure/Technology/Community en entradas al catálogo y no silos editoriales.
- Ganar confianza con fichas comparables, datos verificados, respaldo, garantía y red local.
- Diseñar para Uruguay: WhatsApp, departamentos/localidades, USD/UYU y disponibilidad por dealer.
- Usar el comparador como puente entre exploración y lead, limitado a categorías compatibles.
- Medir el embudo completo desde contenido/campaña hasta dealer y resultado de lead.

## Evidencia pública principal

- [Home actual](https://cfmotouruguay.com/)
- [Motocicletas](https://cfmotouruguay.com/categoria-motocicletas/)
- [ATV](https://cfmotouruguay.com/categorias-atv/)
- [Side-by-Side](https://cfmotouruguay.com/categoria-side/)
- [Service](https://cfmotouruguay.com/service/)
- [Contacto](https://cfmotouruguay.com/contacto/)
- [Noticias](https://cfmotouruguay.com/category/noticias/)
- [450SR](https://cfmotouruguay.com/450sr/)
- [CFORCE 450L no listado](https://cfmotouruguay.com/cforce-450l/)
- [UFORCE 800 no listado](https://cfmotouruguay.com/uforce-800/)

Ver el inventario y el nivel de confianza por campo en `CONTENT_AUDIT.md`.
