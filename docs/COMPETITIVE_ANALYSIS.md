# Competitive Analysis

**Corte:** 2026-09-13  
**Referencias:** CFMOTO Uruguay (estado local), CFMOTO Global (universo de marca) y Kawasaki USA (patrones de exploración/comercio). No son mercados ni catálogos equivalentes; se comparan capacidades, no paridad de contenido.

## Lectura estratégica

CFMOTO Uruguay tiene la ventaja de la relevancia local, pero no transforma esa ventaja en decisión o lead. CFMOTO Global demuestra un lenguaje de marca de gran escala —producto en movimiento, Racing, tecnología y aventura— aunque su densidad y alcance internacional no deben trasladarse literalmente. Kawasaki ofrece el modelo operativo más maduro: taxonomía por uso/familia, filtros, compare, dealer, quote y test ride conectados; a la vez, su amplitud, doble navegación y volumen pueden resultar excesivos para Uruguay.

## CFMOTO Uruguay

### IA y UX

Tres categorías de producto son claras, pero la segunda capa es cilindrada y no necesidad. El menú mezcla catálogo, institucional, service, noticias, comunidad incipiente y placeholder. Home, categoría, ficha y service se sienten como destinos separados; no existe un sistema de decisión.

### Marca y contenido

Usa fotografía oficial y tono local, pero un slider único no expresa amplitud ni respaldo. Racing/Adventure/Technology/Community no forman un universo editorial. El contenido desactualizado y los assets equivocados dañan la promesa premium.

### Catálogo y ficha

Los índices son listas por cc, sin filtros ni comparación. Las fichas contienen copy, especificaciones y galerías, pero no año/versión, status de disponibilidad, precio, CTAs contextuales, breadcrumbs o productos relacionados. Las inconsistencias de datos impiden migración directa.

### Conversión y red

Formulario genérico repetido, sin selección de modelo/dealer ni test ride. Service lista locales, pero no permite filtrar, mapear o distinguir venta/service/repuestos. WhatsApp no está modelado como conversión.

### Mobile/performance

El menú se reduce a una lista plana y los heros/fichas observados pierden composición. La cantidad de scripts/stylesheets y galerías genera riesgo de Core Web Vitals.

## CFMOTO Global

### IA y experiencia de marca

Organiza el universo en Products, Parts/Gear/Accessories, Media Center, Racing, App/Service y About, con sub-marcas y regiones. La home combina campañas, familias off-road/motorcycle, Racing, noticias y propósito corporativo. La fotografía cinematográfica, el producto en acción, el contraste claro/oscuro y el motion construyen “premium powersports”.

### Producto y storytelling

Las familias CFORCE/ZFORCE/UFORCE y las series de motos son unidades narrativas. Tecnología, Racing y eventos como MT Challenge prueban la promesa de marca y pueden conducir a producto. Las fichas globales muestran atributos, galerías y documentación con mayor riqueza, pero disponibilidad/especificación varían por región.

### Lo transferible

- Jerarquía de familia y uso.
- Fotografía en movimiento y alternancia editorial claro/oscuro.
- Racing como evidencia de ingeniería, no solo noticia.
- Adventure como comunidad/experiencia conectada con MT.
- Tecnología explicada mediante beneficio y feature verificable.
- Identidad verbal “determined, progressive, more fun” como orientación, sujeta al brand book local.

### Lo no transferible directamente

- Catálogo, lanzamientos, regiones y sub-marcas no disponibles en Uruguay.
- Escala de navegación corporativa/global.
- News volume y campañas sin operación local.
- Assets, claims o especificaciones sin derechos/aprobación/disponibilidad local.
- Motion pesado o video automático si compromete accesibilidad/LCP.

## Kawasaki USA

### Product discovery

La navegación agrupa categoría → uso → familia → subtipo. El catálogo expone filtros por modelo, uso, categoría de vehículo y features; permite añadir a comparación desde el listado y elegir hasta tres vehículos. El patrón reduce saltos entre “explorar” y “evaluar”.

### Product detail y compare

Las variantes/model years, precio base, features y acciones comerciales se integran al proceso. Compare es una herramienta transversal y explícita. Para CFMOTO Uruguay conviene adoptar el patrón de selección y tabla normalizada, no la escala ni todas las dimensiones.

### Dealer y lead generation

Dealer locator permite ubicación y filtros por categoría/capacidad. Las fichas de dealer enlazan indicaciones, quote y, cuando aplica, test ride. El formulario de test ride conduce en secuencia: vehículo → dealer → contacto, preservando contexto.

### Marca, mobile y performance approach

La marca es consistente y orientada a producto/acción, pero la home y mega-menús son densos. El sitio observado carga mucha navegación, promociones y legal; para un catálogo uruguayo menor sería innecesario copiar esa complejidad. El valor está en los patrones transaccionales y la taxonomía, no en el volumen.

## Comparación por capacidad

| Capacidad   | Uruguay actual             | CFMOTO Global                         | Kawasaki                          | Implicación Uruguay futuro                           |
| ----------- | -------------------------- | ------------------------------------- | --------------------------------- | ---------------------------------------------------- |
| IA          | Categoría→cc               | Producto + marca + región             | Categoría→uso→familia             | Categoría→familia/uso; cc como filtro                |
| Home        | Slider                     | Campañas + familias + Racing/news/DNA | Campañas + offers + productos     | Showroom editorial local con 3–5 caminos claros      |
| Catálogo    | Lista estática             | Familias y gama internacional         | Filtros, variantes, compare       | Filtros pequeños y útiles; comparación contextual    |
| Ficha       | Copy/spec/galería          | Storytelling y features ricos         | Decisión + precio + herramientas  | Beneficio→evidencia→spec→CTA→dealer                  |
| Conversión  | Formulario genérico        | Distribuidores/región                 | Quote/test ride/dealer integrados | Flujos locales cortos con WhatsApp y atribución      |
| Red         | Lista service/distribuidor | Distributor finder global             | Locator con filtros y detalle     | Departamento/localidad/tipo/servicio/mapa progresivo |
| Editorial   | Una noticia 2022           | Racing/news/brand global              | Racing/experience/news            | 4 pilares evergreen conectados al catálogo           |
| Mobile      | Layout degradado           | Visual inmersivo                      | Funcional pero denso              | Diseño específico y CTAs accesibles                  |
| Performance | Riesgo por plugins/assets  | Motion/medios pesados                 | Aplicación compleja               | Astro estático, budgets, medios responsivos          |

## What we should adopt

- De CFMOTO Global: ADN, fotografía de acción, jerarquía de familias y vínculo Racing/Adventure/Technology con producto.
- De Kawasaki: navegación por uso/familia, filtros explícitos, compare desde catálogo, selección vehículo→dealer→lead y detalle de dealer accionable.
- Del sitio local: tono uruguayo, contacto, red existente y catálogo real **solo tras validación**.

## What we should improve

- Reducir el patrón Kawasaki a la escala local: menos capas, menos filtros y una navegación móvil por tareas.
- Hacer que cada contenido editorial entregue una siguiente acción natural.
- Tratar precio, disponibilidad y versión como estados gobernados, no texto libre.
- Dar al comparador grupos de atributos específicos por categoría y una tabla móvil legible.
- Medir resultados de lead, no solo clics.

## What we should avoid

- Copiar estética, componentes o arquitectura global sin adaptación.
- Mega-menús y promociones de la escala Kawasaki.
- Carruseles como estructura principal.
- Video/motion automático sin presupuesto de performance y reduced motion.
- Publicar catálogo global como si estuviera disponible localmente.
- Migrar copy, imágenes o specs actuales de manera automática.

## Fuentes públicas

- [CFMOTO Uruguay](https://cfmotouruguay.com/)
- [CFMOTO Global](https://www.cfmoto.com/global/)
- [CFMOTO Racing](https://www.cfmoto.com/global/racing.html)
- [Ejemplo de narrativa Adventure/MT](https://www.cfmoto.com/global/media-center/news/news/challenge-conquered--the-first-edition-of-the-cfmoto-mt-challeng.html)
- [Kawasaki catálogo/compare](https://www.kawasaki.com/en-us/category/motorcycle)
- [Kawasaki Compare Vehicles](https://www.kawasaki.com/en-us/research-tools/compare-vehicles)
- [Kawasaki Dealer Locator](https://www.kawasaki.com/en-us/research-tools/dealer-locator)
- [Kawasaki Test Ride](https://www.kawasaki.com/en-us/research-tools/request-a-test-ride)
