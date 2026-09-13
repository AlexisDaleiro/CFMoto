# User Journeys

Estos journeys de alto nivel siguen vigentes. Phase 1 los convirtió en flujos y estados operativos en `WIREFLOWS.md`; negocio/CRM todavía deben validar routing, elegibilidad y SLA.

## Principios transversales

- Conservar contexto de categoría, producto, campaña y dealer.
- Permitir volver o comparar sin perder selección/filtros.
- Mostrar disponibilidad/expectativa de respuesta sin promesas no validadas.
- Ofrecer WhatsApp como alternativa, no como reemplazo obligatorio del flujo accesible.
- Pedir solo los datos necesarios y explicar uso/consentimiento.

## Journey A — Descubrir moto → producto → cotizar

1. Entrada por home, búsqueda o campaña.
2. Elige Motocicletas y una intención (Racing, Naked, Adventure, Heritage).
3. Filtra o recorre una familia; ve rasgos comparables.
4. Abre ficha; entiende ajuste, datos clave, respaldo y opciones.
5. Cotiza con modelo precargado; elige dealer/localidad si corresponde.
6. Recibe confirmación y expectativa de seguimiento.

**Fricciones a prevenir:** jerga, datos dudosos, formulario genérico, precio/versión ambiguos.  
**Medición:** category→PDP, PDP→quote, submit success, valid lead.

## Journey B — Comparar motos → elegir → test ride

1. Desde listado o ficha añade 2–3 motos compatibles.
2. Comparador agrupa motor, ergonomía, peso, seguridad, electrónica y uso.
3. Destaca diferencias sin declarar un “ganador” universal.
4. Usuario elige modelo y solicita test ride.
5. Selecciona dealer con capacidad de test ride y brinda contacto mínimo.

**Fallback:** si el modelo/dealer no ofrece test ride, cotización/WhatsApp con explicación.  
**Medición:** add-to-compare, compare completion, test ride start/submit.

## Journey C — Buscar ATV → filtrar → producto → WhatsApp

1. Entrada directa a ATV.
2. Elige uso trabajo/recreativo y filtra capacidad, plazas, tracción/carga.
3. Ficha traduce especificaciones a tareas reales, sin claims no verificados.
4. WhatsApp abre mensaje contextual con modelo y página, editable por usuario.

**Fricciones:** confundir 450S/450L, especificaciones incompatibles, no saber qué local vende/service.  
**Medición:** filter use, PDP, WhatsApp click y, si integración lo permite, lead outcome.

## Journey D — Necesitar service → localizar → contacto

1. Acceso visible a Service desde navegación/footer o búsqueda.
2. Filtra por departamento/localidad, tipo de vehículo y servicio.
3. Alterna lista/mapa; revisa horario, teléfono/WhatsApp, dirección y servicios.
4. Llama, escribe o abre indicaciones.

**Fricciones:** confundir venta con service, datos vencidos, mapa como única interfaz.  
**Medición:** zero-results, result select, call/WhatsApp/directions.

## Journey E — Racing → producto SR → comparar → lead

1. Contenido Racing demuestra tecnología/equipo/historia.
2. Módulo editorial explica relación verificable con familia SR.
3. Usuario abre 450SR u otros SR locales.
4. Compara modelos compatibles o revisa ficha.
5. Test ride/cotización conserva origen `experience:racing`.

**Fricciones:** Racing como noticia desconectada o transferencia de claims globales no aplicables.  
**Medición:** assisted product view, compare, assisted conversion.

## Journey F — Adventure → modelos MT → producto → concesionario

1. Landing Adventure combina inspiración, uso y rutas/modelos locales.
2. Presenta gama MT disponible y diferencias de orientación.
3. Ficha muestra confort, autonomía, equipamiento y accesorios verificados.
4. Usuario encuentra dealer por ubicación/capacidad.
5. Contacta o abre indicaciones; puede cotizar desde el dealer/modelo.

**Fricciones:** contenido global sin disponibilidad, dealer sin stock/capacidad confirmada.  
**Medición:** Adventure→MT, PDP→dealer, dealer contact.

## Estados y excepciones que deben diseñarse

- Precio bajo consulta/no disponible y moneda distinta.
- Modelo activo pero sin stock; legacy/descontinuado.
- Sin resultados por filtro o ubicación.
- Test ride no disponible para modelo/dealer.
- Dealer/service cerrado temporalmente.
- Error de formulario, duplicado o spam challenge accesible.
- Comparación con atributos faltantes o unidades no equivalentes.
- Conectividad reducida: contenido principal y contacto deben seguir funcionando.
