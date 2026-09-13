# UX Requirements by Page Type

## System-wide requirements

- Toda página responde: dónde estoy, qué puedo descubrir y cuál es el siguiente paso razonable.
- Una sola acción primaria por contexto; secundarias se agrupan sin competencia visual.
- Contenido técnico/comercial publicable requiere estado `verified`; preview marca `CLIENT VALIDATION REQUIRED`.
- Breadcrumbs, heading único, landmarks y estado de foco forman parte del requisito, no del styling.
- Teléfono, WhatsApp y direcciones son assisted conversions; un submit válido es lead.

## Home — P0

**Purpose:** presentar marca/gama local, ofrecer caminos de entrada y demostrar respaldo.  
**Intent:** “¿Qué ofrece CFMOTO y por dónde empiezo?”  
**Primary:** explorar categoría/producto destacado. **Secondary:** experiencia o concesionario.

### Narrative order

1. Hero/campaña única con promesa y un CTA específico.
2. Selector de tres universos: Motos, ATV, Side-by-Side.
3. Producto/familia destacada que materializa la promesa.
4. Racing → SR y Adventure → MT como dos módulos editoriales, no cards repetidas.
5. Tecnología como prueba aplicada a productos reales.
6. ATV/SxS por necesidades de recreación/trabajo.
7. Compare como ayuda de decisión.
8. Community/social proof solo con activos reales.
9. Red local y cierre comercial.

No superar la densidad por sumar todos los módulos: cada bloque usa una composición distinta y los secundarios pueden alternarse por campaña editorial, sin carrusel obligatorio.

**Mobile:** hero corto; universos visibles temprano; evitar video pesado/autoplay; CTA no queda debajo del primer viewport; módulos editoriales mantienen producto relacionado.  
**Accessibility:** h1 real, media con alt/pausa, no texto esencial incrustado en imagen.  
**Edges:** campaña/Community ausente → omitir y reequilibrar; no usar placeholder.

## Category listings — P0 Motos, P1 ATV/SxS

**Purpose:** reducir una gama a opciones comprensibles.  
**Intent:** explorar por familia/uso y evaluar candidatos.  
**Primary:** ver detalle. **Secondary:** añadir a comparar.

### Required content/interactions

- H1, introducción breve y accesos de familia/uso.
- Result count y filtros relevantes; estado reflejado en URL cuando sea compartible.
- Active filters removibles individualmente y `Limpiar filtros`.
- Orden inicial editorial estable. Sort opcional: relevancia/recomendado; precio asc/desc solo cuando la cobertura de precios sea suficiente. No ordenar por cc por defecto.
- Cards consistentes y comparación disponible.
- Preservar filtros/scroll al volver desde PDP.

### Filtros mínimos

- **Motos:** familia, uso y cilindrada. Precio solo con datos suficientes; licencia solo con fuente oficial.
- **ATV:** uso, plazas, tracción/capacidades decisivas; cilindrada secundaria.
- **SxS:** ZFORCE/UFORCE o sport/utility, plazas y capacidades decisivas.

No mostrar filtros donde todos los resultados comparten el mismo valor.

**Mobile:** botón `Filtrar (n)` abre bottom sheet/full-screen dialog; resultados no cambian detrás mientras se selecciona; `Mostrar X resultados` aplica y cierra. Sort separado y breve.  
**Accessibility:** fieldset/legend, count live polite al aplicar, foco restaurado al trigger; no anunciar cada checkbox.  
**Edges:** cero resultados conserva filtros, explica combinación y ofrece limpiar uno/todos; filtro inválido se ignora con aviso específico.

## Product card

Requiere: imagen correcta con focal point/alt, nombre, familia o descriptor de uso, hasta 2 datos clave por categoría, estado de precio resumido cuando corresponda, link de detalle y control `Añadir a comparar`.

- Moto: cilindrada + descriptor/altura o potencia solo si ayudan y están verificadas.
- ATV/SxS: uso/plazas/capacidad antes que una lista técnica.
- Precio: `Desde USD …`, `Precio a consultar` o se omite; nunca “No disponible” ambiguo en card.
- Card completa no debe ser un único click target que contenga controles anidados.
- Estado añadido cambia a `Quitar de comparación` y se anuncia.

## Product detail — P0

**Purpose:** convertir interés en deseo/decisión confiable.  
**Intent:** “¿Es para mí y qué hago después?”  
**Primary:** Cotizar. **Secondary:** Test ride si aplica. **Contextual:** WhatsApp, dealer, comparar.

### Common product structure

1. Breadcrumb y status comercial verificable.
2. Hero: nombre, familia/descriptor, media correcta, precio/status y acciones.
3. Key facts: 3–5 atributos decisivos, con unidad/tipo de peso claros.
4. Posicionamiento/beneficios.
5. Story sections modulares: Design, Performance, Technology, Capabilities según relevancia.
6. Colores/variantes, sin prometer disponibilidad.
7. Galería/media.
8. Especificaciones completas agrupadas.
9. Compare prompt y modelos relacionados con motivo explícito.
10. Dealer/test ride/cotización contextual y respaldo/service.

No todas las secciones son obligatorias. Si no existe contenido verificado, se omite; no se rellena con copy genérico.

### Motorcycle-specific

Priorizar ergonomía/altura y peso, motor/potencia/torque, frenos/ABS, suspensión, electrónica/conectividad, autonomía/touring y modos según familia. Racing enfatiza performance/control; Adventure enfatiza confort, autonomía, equipaje y capacidades.

### ATV-specific

Priorizar trabajo vs recreación, plazas, tracción/bloqueo/EPS, carga/arrastre, despeje/suspensión, malacate y seguridad. CFORCE 450L usa template con `CLIENT VALIDATION REQUIRED` en preview y no publica specs dudosas.

### Side-by-Side-specific

Priorizar sport vs utility, plazas/cabina, carga/arrastre, dimensiones/ancho, tracción, suspensión/despeje, protección/equipamiento. UFORCE 800 conserva arquitectura, pero sus datos comerciales quedan bloqueados hasta validación.

### Price UX

- `USD 7.990`: precio exacto y moneda visibles; disclaimer/validez cuando aplique.
- `Desde USD 7.990`: “Desde” unido semánticamente al precio y explicación de variante.
- `Precio a consultar`: acción Cotizar; no simular monto.
- `Temporalmente no disponible`: explicar que no se ofrece ahora y mostrar alternativas/dealer sin CTA engañoso.
- Sin FX automático. USD/UYU solo desde fuente comercial confiable.

### Conversion behavior

- Desktop: acciones cerca de identidad y nuevamente al cierre, no repetidas en cada sección.
- Mobile: barra sticky opcional después de pasar hero, máximo dos acciones (`Cotizar` + secundaria contextual); respeta safe areas, teclado, zoom y no tapa anchors/cookies.
- WhatsApp aparece dentro del bloque comercial y location, no como burbuja flotante global persistente en toda pantalla.

**Accessibility:** galería con controles nombrados y sin autoplay; specs como tablas/listas semánticas; sticky no altera orden de foco; cambios de color/variante anunciados.  
**Edges:** precio faltante→`Precio a consultar`; producto no disponible→status + alternativas; spec no verificada→no publicar; media ausente→layout sin hueco roto.

## Compare — P0

**Purpose:** explicar diferencias entre hasta tres vehículos compatibles.  
**Intent:** decidir shortlist y actuar.  
**Primary:** ir al producto elegido/cotizar. **Secondary:** test ride según elegibilidad.

Requisitos completos y estados en `WIREFLOWS.md`. Desktop usa hasta tres columnas y primera columna de atributos persistente. Mobile muestra selector fijo de modelos y 1–2 columnas visibles con navegación horizontal explícita; el nombre del atributo permanece visible. Agrupar por identidad, motor, dimensiones/ergonomía, seguridad, electrónica/capacidades.

No declarar ganador. Valores faltantes dicen `No informado`, distinto de `No disponible`. Diferencias no dependen solo de color.

## Concesionarios — P0

**Purpose:** encontrar un punto de venta/capacidad comercial.  
**Intent:** compra, cotización, test ride o contacto local.  
**Primary:** contactar/indicaciones. **Secondary:** ver detalle.

Requiere búsqueda por nombre/ciudad/dirección, departamento, localidad, categoría/capacidad, lista siempre accesible y mapa opcional. Geolocalización se solicita solo tras acción `Usar mi ubicación`, explica propósito y no bloquea.

**Mobile:** lista primero; mapa abre como modo alternativo/full-screen y conserva selección/filtros. Result card muestra distancia solo si existe dato autorizado.  
**Edges:** geolocation denied→búsqueda manual; mapa unavailable→lista completa; no WhatsApp→teléfono/email; solo service→no aparece bajo Sales salvo filtro/capacidad explícita; cero resultados→ampliar departamento/quitar capacidad/contacto general.

## Service — P1

**Purpose:** resolver soporte con rapidez.  
**Intent:** service, repuestos, taller y garantía.  
**Primary:** contactar taller/service. **Secondary:** indicaciones.

Empieza con tareas (`Necesito service`, `Busco repuestos`, `¿Dónde llevo mi CFMOTO?`) y luego ubicación/categoría. Prioriza teléfono, WhatsApp, horario, servicios y requisitos de atención; no promociones de venta. Puede compartir lista/mapa y `Location`, pero copy, filtros, ranking y CTAs son propios.

**Mobile:** llamadas/WhatsApp accesibles sin abrir detalle; horario/estado visible; mapa secundario.  
**Edges:** ubicación vende pero no da service→excluir; no hay resultado→contacto central y área cercana, sin prometer cobertura.

## Location detail — P1

**Purpose:** fuente canónica de una ubicación verificada.  
**Required:** nombre, dirección/NAP, departamento/localidad, horarios y excepciones, contactos, indicaciones, capacidades, categorías atendidas, avisos temporales y fecha editorial interna de verificación.

Acciones se adaptan: venta→cotizar; testRide→solicitar; service→contactar taller; parts→consultar repuestos. No inventar stock, reviews, certificaciones o marcas. Página no indexable/no creada si no cumple política de IA.

## Quote — P0

**Purpose:** generar lead válido con fricción mínima.  
**Primary:** enviar solicitud. **Secondary:** WhatsApp/contacto alternativo.  
Modelo preseleccionado desde PDP/compare; permite cambiarlo sin perder contexto. Campos, errores y success en `FORM_REQUIREMENTS.md`.

## Test ride — P0

**Purpose:** solicitar coordinación, no reservar automáticamente.  
Debe decir “Solicitud de test ride”; producto y dealer elegible se precargan cuando existan. Success confirma recepción, no fecha/disponibilidad. Detalle en `FORM_REQUIREMENTS.md`.

## Experience hub and verticals — P1/P2

**Purpose:** transformar marca en exploración relevante.  
Hub presenta cuatro promesas distintas, contenido destacado y productos/familias vinculados.

- **Racing (P1):** storytelling y credenciales verificadas → familia SR → 450SR → compare/test ride. Separar claramente competición de producto de calle.
- **Adventure (P1):** exploración/touring/capabilities → MT → producto → dealer/test ride. Rutas solo con contenido/derechos locales.
- **Technology (P1):** motor, electrónica, display/conectividad, frenos/seguridad y suspensión explicados por beneficio, con modelos que realmente incorporan cada feature.
- **Community (P2):** eventos, owner stories, rides y social content. Módulos se publican solo cuando existen activos y permisos; no depender de feeds sociales embebidos.

Cada vertical incluye hero/statement, 2–4 pilares, historias/prueba, productos relacionados y un CTA contextual. No son cuatro artículos largos ni cuatro listados idénticos.

## CFMOTO / Contact / News

- **CFMOTO:** historia global/local, respaldo, garantía/red y claims con fuente/fecha.
- **Contacto:** resolver consultas no cubiertas por quote/test ride/service; topic obligatorio para routing.
- **Noticias:** archivo editorial secundario con fecha, tema y relaciones; no bloquea demo.

## WhatsApp role

- Product: mensaje contextual editable con modelo y origen.
- Location: contacto directo solo si número/capacidad están verificados.
- Service: contexto de service/repuestos, sin enviarlo automáticamente.
- Mobile puede abrir app/deep link; desktop ofrece WhatsApp Web/QR según plataforma futura.
- No floating button global invasivo en v1. Se permite acceso persistente únicamente dentro de una etapa comercial y sin cubrir contenido.
- Medir `whatsapp_click` como assisted conversion; nunca como lead confirmado.

## Global error and empty states

| Estado               | Mensaje/acción requerida                                                               |
| -------------------- | -------------------------------------------------------------------------------------- |
| No products          | “No encontramos modelos con estos filtros”; mostrar chips y limpiar filtro relevante   |
| Invalid filters      | Identificar parámetro ignorado y conservar los válidos                                 |
| Compare empty        | Explicar compatibilidad y elegir categoría/modelos                                     |
| Fourth product       | Límite 3; ofrecer sustituir uno o cancelar                                             |
| Incompatible compare | Explicar categoría actual y abrir comparación nueva opcional                           |
| No dealers/service   | Sugerir ampliar/quitar filtro y contacto central                                       |
| Geolocation denied   | Confirmar privacidad y mostrar búsqueda manual                                         |
| Form error           | Resumen + error junto al campo; conservar datos                                        |
| Form success         | Confirmar solicitud, referencia si existe y próximos pasos sin prometer fecha          |
| Product unavailable  | Estado honesto, alternativas/dealer; quitar CTAs imposibles                            |
| Missing price        | `Precio a consultar`, nunca cero/guion ambiguo                                         |
| 404                  | Explicar que la página cambió; accesos a categoría, producto y contacto; registrar URL |

## Accessibility interaction contract

- Dialogs/bottom sheets con nombre, foco inicial, trap, Escape y restauración.
- Filtros nativos agrupados; cambios anunciados al aplicar.
- Compare con encabezados asociados y alternativa móvil comprensible.
- Mapa acompañado por lista equivalente.
- Forms con labels, hints, requisitos antes de input, resumen de errores y live region para success.
- Menú según `NAVIGATION_SPEC.md`.
- Motion opcional respeta reduced motion; nunca es necesario para comprender estado.

## Phase 1 quality gate

- [x] Sitemap, taxonomía, URLs canónicas, indexación y legacy strategy cerrados.
- [x] Navegación desktop/mobile, utility actions, estados y teclado definidos.
- [x] Discovery, listings, cards y product detail por categoría definidos.
- [x] Compare desktop/mobile y estados 0–3, cuarto/incompatible/reemplazo definidos.
- [x] Dealer, Service, Location y degradación de mapa/geolocalización definidos.
- [x] Quote, Test ride, Contact y WhatsApp definidos.
- [x] Experience/Racing/Adventure/Technology/Community relacionados con producto.
- [x] Siete flujos mobile-first y cambios por rango documentados.
- [x] Accesibilidad, errores/empty states, analytics y contenido incorporados.
- [x] Decisions y Open Questions actualizados.
- [x] No se creó UI, código Astro ni dependencias.
