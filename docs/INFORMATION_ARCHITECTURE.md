# Information Architecture

**Fase:** 1 — definición interna cerrada  
**Fuente anterior:** draft retirado al aprobar este documento.

## Principios estructurales

1. La arquitectura sigue tareas: descubrir, explorar, comparar, desear y actuar.
2. Tipo, familia y uso ayudan a descubrir; la cilindrada es filtro/atributo.
3. Un producto conserva una URL estable aunque cambie de familia o posicionamiento.
4. Dealer y service son entradas de intención distintas sobre una misma entidad física `Location`.
5. El contenido editorial conecta explícitamente con productos y acciones; no crea silos.
6. Solo se indexan páginas con propósito, contenido suficiente y datos verificados.

## Nomenclatura cerrada

Se adopta **Motos** para navegación y `/motos/` para URLs. Es breve, natural en el uso comercial uruguayo y consistente con los nombres de las otras categorías. “Motocicletas” sigue siendo vocabulario válido en títulos/copy cuando mejore claridad o SEO, pero `/motocicletas/` no será una segunda URL indexable; si existe, redirige 301 a `/motos/`.

Se adopta **Side-by-Side** como etiqueta pública principal y `/side-by-side/` como ruta. `SxS`, `SSV` o `UTV` pueden aparecer como sinónimos explicativos, no como taxonomías competidoras.

## Sitemap final propuesto

```text
/
├── motos/
│   ├── racing/
│   ├── naked/
│   ├── adventure/
│   ├── heritage/
│   └── [slug]/
├── atv/
│   └── [slug]/
├── side-by-side/
│   ├── zforce/
│   ├── uforce/
│   └── [slug]/
├── comparar/
├── concesionarios/
├── service/
├── ubicaciones/
│   └── [slug]/
├── cotizar/
├── test-ride/
├── experiencia/
│   ├── racing/
│   ├── adventure/
│   ├── tecnologia/
│   └── comunidad/
├── noticias/
│   └── [slug]/
├── cfmoto/
├── contacto/
├── privacidad/
└── terminos/                 (si revisión legal lo requiere)
```

### Reglas de landing

- `/motos/racing/`, `/naked/`, `/adventure/` y `/heritage/` combinan contexto de uso/familia con catálogo filtrado; no son carpetas del producto.
- `/side-by-side/zforce/` y `/uforce/` tienen valor porque separan deporte y utilidad.
- ATV comienza con un solo listing. Landings de trabajo/recreación solo se crean cuando haya catálogo y contenido suficientes.
- `/experiencia/` es hub de marca; sus verticales no sustituyen landings de producto. `/experiencia/racing/` cuenta la historia; `/motos/racing/` ayuda a elegir motos.
- Noticias es secundaria y no ocupa navegación primaria.

## URLs de producto

```text
/motos/[slug]
/atv/[slug]
/side-by-side/[slug]
```

Ejemplos canónicos:

- `/motos/450sr`
- `/motos/800mt-touring`
- `/atv/cforce-450l`
- `/side-by-side/zforce-1000-sport`

No incluir familia, uso, cilindrada, año o estado de disponibilidad en la ruta por defecto. Slugs son minúsculos, ASCII, sin sufijos editoriales y sin slash alternativo indexable.

## Taxonomía

| Eje                  | Valores iniciales                                                                  | Función                                         |
| -------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------- |
| `category`           | motorcycle, atv, sideBySide                                                        | Ruta, compare group y listing principal         |
| `family`             | SR, NK, MT, CL-X, GT; CFORCE; ZFORCE, UFORCE                                       | Descubrimiento y relación editorial             |
| `primaryUse`         | racing/sport, naked/urban, adventure/touring, heritage; recreational, utility/work | Landing/filtro según categoría                  |
| `variant`            | Touring, Sport, Heritage, XL, Overland, etc.                                       | Diferenciación comercial                        |
| `displacement`       | valor + unidad                                                                     | Filtro y comparación, nunca navegación primaria |
| `availability`       | available, onRequest, temporarilyUnavailable, discontinued                         | UX comercial e indexación                       |
| `verificationStatus` | verified, needsReview, unverified, deprecated                                      | Gobierno; no es filtro público                  |

Los sinónimos de marketing se mapean a valores controlados. Una familia puede cambiar de narrativa sin alterar la URL del producto.

## Arquitectura de ubicaciones

`Location` representa el lugar físico y contiene NAP, horario, coordenadas y contactos. Capacidades controladas: `sales`, `service`, `parts`, `testRide`, más categorías atendidas.

- `/concesionarios/`: experiencia orientada a compra; filtra ubicaciones `sales` y `testRide`.
- `/service/`: experiencia orientada a soporte; filtra `service` y `parts` con lenguaje/tareas propios.
- `/ubicaciones/[slug]`: ficha canónica compartida, nunca duplicada bajo dealer y service.

Una ubicación obtiene ficha indexable solo si NAP/capacidades están verificadas, existe información suficiente y aporta valor local. Si no, aparece en el locator/lista sin detalle indexable. No se publican stock, reviews o servicios no verificados.

## Navigation ownership

| Destino                    | Acceso principal                             | Accesos contextuales             |
| -------------------------- | -------------------------------------------- | -------------------------------- |
| Motos, ATV, Side-by-Side   | Primary nav                                  | Home, experiencias, relacionados |
| Experiencia CFMOTO         | Primary nav                                  | Home, producto, footer           |
| Concesionarios, Service    | Primary nav                                  | Producto, formularios, footer    |
| Comparar                   | Utility nav + estado contextual              | Cards, fichas, listings          |
| Cotizar                    | CTA global/contextual                        | Producto, compare, ubicación     |
| Test ride                  | Utility/contextual                           | Moto, compare, dealer capaz      |
| CFMOTO, Contacto, Noticias | Footer; contacto también utilidad secundaria | Home/editorial                   |

Detalle de comportamiento en `NAVIGATION_SPEC.md`.

## Footer architecture

- **Productos:** Motos, ATV, Side-by-Side, familias activas, Comparar.
- **Compra y soporte:** Cotizar, Test ride, Concesionarios, Service, Repuestos/contacto.
- **Experiencia:** Racing, Adventure, Tecnología, Comunidad, Noticias.
- **Marca:** CFMOTO Uruguay, contacto, redes verificadas, CFMOTO Global.
- **Legal:** privacidad, términos si aplican, cookies/preferencias.

No duplicar todo el mega-menu. El footer es un mapa de destinos persistentes y legales.

## Breadcrumbs

Visibles en listings secundarios, producto, experiencia, artículos y ubicación:

- `Inicio / Motos / 450SR`
- `Inicio / Motos / Racing`
- `Inicio / Side-by-Side / ZFORCE`
- `Inicio / Ubicaciones / [Nombre]`
- `Inicio / Experiencia / Racing`

Las fichas no incluyen familia en breadcrumb salvo que esa landing sea el contexto real de entrada. Filtros y taxonomías internas no crean niveles artificiales. Implementar también `BreadcrumbList` cuando la página sea indexable.

## Search recommendation

**No incluir búsqueda global en la primera versión.** El catálogo inicial/demostración es pequeño y la navegación, familias y filtros resuelven descubrimiento con menor coste y complejidad. Revisar cuando exista catálogo completo, volumen editorial significativo o evidencia de búsquedas sin destino. Los locators sí mantienen búsqueda local por nombre/ciudad/dirección.

## Indexation principles

- Indexar URLs canónicas con contenido único, status publicable y metadata completa.
- No indexar combinaciones arbitrarias de filtros, resultados vacíos, pasos/success de formularios ni estados del comparador.
- Landings de familia/uso se indexan solo con introducción y valor más allá de una lista filtrada.
- `Location` indexable requiere verificación NAP y contenido suficiente.
- Producto temporalmente no disponible puede seguir indexado con alternativas; discontinuado sigue política legacy.
- Campaña vencida: conservar, redirigir o retirar según demanda y equivalente; nunca dejar una oferta falsa.
- Sitemap contiene solo canónicas indexables; canonical y redirects deben ser coherentes.

## Legacy URL strategy

Regla: 301 solo hacia un equivalente real. Orden para modelo descontinuado: sucesor directo confirmado → familia semántica → categoría → página legacy útil. Nunca redirigir en masa al Home. Si no existe equivalente ni valor, evaluar 410.

### Mapeo preliminar de páginas

| Legacy                     | Canonical / acción                                                             |
| -------------------------- | ------------------------------------------------------------------------------ |
| `/categoria-motocicletas/` | `301 /motos/`                                                                  |
| `/categorias-atv/`         | `301 /atv/`                                                                    |
| `/categoria-side/`         | `301 /side-by-side/`                                                           |
| `/about-us/`               | `301 /cfmoto/`                                                                 |
| `/category/noticias/`      | `301 /noticias/`                                                               |
| `/contacto/`               | `301 /contacto/`                                                               |
| `/service/`                | Se conserva; cambia intención/contenido                                        |
| `/shop-2/`                 | No redirigir hasta confirmar propósito/tráfico; probable 410 o ATV equivalente |
| `/proximamente/`           | Retirar; 410 salvo campaña/equivalente confirmado                              |
| `/category/fancfmotouy/`   | A comunidad/noticia equivalente solo si existe; si no, legacy/410              |

### Mapeo preliminar de productos activos

| Legacy                     | Canonical esperado                                      |
| -------------------------- | ------------------------------------------------------- |
| `/150nk/`                  | `/motos/150nk`                                          |
| `/250nk/`                  | `/motos/250nk`                                          |
| `/300sr/`                  | `/motos/300sr`                                          |
| `/300nk/`                  | `/motos/300nk`                                          |
| `/400nk/`                  | `/motos/400nk`                                          |
| `/400gt/`                  | `/motos/400gt`                                          |
| `/450sr/`                  | `/motos/450sr`                                          |
| `/650mt-4/`                | `/motos/650mt`                                          |
| `/650nk/`                  | `/motos/650nk`                                          |
| `/650gt/`                  | `/motos/650gt`                                          |
| `/650trg/`                 | `/motos/650trg` (CLIENT VALIDATION REQUIRED)            |
| `/700cl-x-heritage/`       | `/motos/700cl-x-heritage`                               |
| `/700cl-x-sport-6/`        | `/motos/700cl-x-sport`                                  |
| `/800mt-touring/`          | `/motos/800mt-touring`                                  |
| `/800mt-sport/`            | `/motos/800mt-sport`                                    |
| `/cforce-450s/`            | `/atv/cforce-450s` (CLIENT VALIDATION REQUIRED)         |
| `/cforce-450l/`            | `/atv/cforce-450l` (CLIENT VALIDATION REQUIRED)         |
| `/cforce-520l/`            | `/atv/cforce-520l`                                      |
| `/cforce-625-touring/`     | `/atv/cforce-625-touring`                               |
| `/fuerza-625`              | `/atv/cforce-625` (CLIENT VALIDATION REQUIRED)          |
| `/cforce-850-xc/`          | `/atv/cforce-850-xc`                                    |
| `/cforce-1000-por-tierra/` | `/atv/cforce-1000-overland`                             |
| `/cforce-1000/`            | `/atv/cforce-1000`                                      |
| `/zforce-550-ex/`          | `/side-by-side/zforce-550-ex`                           |
| `/uforce-600/`             | `/side-by-side/uforce-600`                              |
| `/uforce-800/`             | `/side-by-side/uforce-800` (CLIENT VALIDATION REQUIRED) |
| `/uforce-1000-xl/`         | `/side-by-side/uforce-1000-xl`                          |
| `/uforce-1000/`            | `/side-by-side/uforce-1000`                             |
| `/zforce-1000-sport/`      | `/side-by-side/zforce-1000-sport`                       |

Este mapeo no autoriza publicar modelos ni datos. Antes del redirect final se cruza status, sucesores, tráfico/backlinks y aprobación del cliente.

## Page priority

- **P0 — demo comercial:** Home, Motos listing, Product Detail (seis templates/data states), Compare, Concesionarios, Cotizar, Test ride, navegación global.
- **P1 — fuertemente recomendado:** ATV listing, Side-by-Side listing, Service, Location detail, Experience hub, Racing, Adventure, Technology.
- **P2 — expansión:** Community completa, News/artículos, contenido editorial adicional, catálogo completo y búsqueda global si aparece necesidad.

ATV y Side-by-Side deben estar representados en la demo mediante fichas y rutas aunque sus listings completos sean P1. La arquitectura no depende de specs dudosas de CFORCE 450L/UFORCE 800.

## Content governance in UX

- `verified`: publicable.
- `needsReview`: puede existir en preview/documentación; no presentar como hecho definitivo.
- `unverified`: no publicable como dato técnico/comercial.
- `deprecated`: no reutilizar; conservar solo para trazabilidad/legacy.

La UI pública no muestra etiquetas editoriales internas. En preview/QA sí debe advertir `CLIENT VALIDATION REQUIRED`; el build/publicación futura debe bloquear campos críticos no verificados.
