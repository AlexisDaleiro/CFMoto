# CFMOTO Uruguay — Commercial Strategy

Commercial status: functional redesign proposal, ready for a controlled commercial demo and not ready for public production.

## Positioning

### One-line positioning

Nueva plataforma digital para CFMOTO Uruguay orientada a fortalecer la marca, mejorar el descubrimiento de vehículos y convertir interés en oportunidades comerciales medibles.

### 30-second explanation

La plataforma actual cumple su función básica, pero existe una oportunidad para conectar mejor la presencia de marca con la elección de producto y el contacto comercial. La propuesta presenta cada vehículo con mayor jerarquía, organiza el catálogo por familia y uso, incorpora comparación, mejora el acceso a Service y prepara flujos contextuales de cotización y test ride. Ya existe una propuesta funcional validada para mostrar la experiencia. La puesta en producción requiere trabajar con CFMOTO sobre assets, datos e integraciones oficiales.

### 2-minute explanation

Hoy una persona puede conocer la oferta de CFMOTO Uruguay, pero necesita recorrer páginas aisladas y resolver fuera del sitio varias preguntas necesarias para decidir. La propuesta transforma ese recorrido en una plataforma coherente. La Home instala marca y conduce a la gama. El catálogo permite descubrir por familia y uso. Cada ficha combina una presentación premium con datos técnicos gobernados. Compare ayuda a evaluar modelos dentro de CFMOTO. Service se convierte en una herramienta buscable y los futuros formularios conservan el modelo y el contexto de interés.

La solución también ordena la operación detrás de la experiencia. Los modelos, especificaciones, ubicaciones y contenidos editoriales viven como información estructurada. Cada dato distingue lo verificado de lo pendiente, de modo que actualizar el catálogo no implique duplicar páginas o arriesgar inconsistencias. La arquitectura entrega HTML rápido, usa muy poco JavaScript y ya pasó una revisión de responsive, accesibilidad, enlaces y seguridad básica.

La demo permite evaluar el enfoque antes de contratar la producción. El siguiente paso consiste en validar alcance con CFMOTO, acceder a fuentes oficiales y definir cómo se conectarán leads, analítica y mantenimiento.

## Commercial opportunity

Presentar estas oportunidades sin desacreditar la plataforma o al proveedor actual:

1. **Brand:** ampliar la presencia desde un catálogo funcional hacia una experiencia que refleje producto, Racing, Adventure, Technology y Community.
2. **Product discovery:** organizar la gama por categoría, familia y uso, con filtros que ayuden a quien todavía no conoce cilindradas o nombres de modelos.
3. **Decision support:** incorporar fichas consistentes y Compare para mantener la investigación dentro del ecosistema CFMOTO.
4. **Conversion:** conservar producto, departamento y origen cuando alguien solicita cotización, test ride o contacto con la red.
5. **Content quality:** administrar especificaciones, disponibilidad, assets y ubicaciones con fuente, estado y fecha de verificación.
6. **Mobile experience:** diseñar las tareas principales desde 320 px, con navegación, catálogo, comparación y formularios propios para móvil.
7. **Maintainability and performance:** reemplazar repetición manual y complejidad innecesaria por contenido estructurado, build estático, imágenes responsive y JavaScript acotado.

## Current experience and proposal

| Actualmente                                        | Propuesta funcional                                               |
| -------------------------------------------------- | ----------------------------------------------------------------- |
| Home concentrada en un slider                      | Home editorial con producto, categorías, marca y siguientes pasos |
| Catálogo organizado principalmente por cilindrada  | Descubrimiento por categoría, familia, uso y filtros confiables   |
| Fichas aisladas con estructura variable            | Sistema modular de producto con datos gobernados                  |
| Investigación comparativa fuera del sitio          | Compare de hasta tres vehículos compatibles                       |
| Listado de Service                                 | Buscador por texto y departamento, teléfono e indicaciones        |
| Cotización genérica                                | Flujos contextuales preparados para modelo y routing comercial    |
| Racing y contenido de marca con presencia limitada | Verticales conectadas con producto y acciones relevantes          |
| Actualización manual por página                    | Colecciones estructuradas para incorporar y mantener modelos      |

La comparación describe capacidades observadas en el corte de auditoría del 13 de septiembre de 2026. Debe actualizarse antes de una reunión si la web vigente cambia.

## Value proposition by stakeholder

- **Marca:** una presencia local más consistente con la ambición visual del producto.
- **Clientes:** menos fricción para descubrir, entender y comparar vehículos.
- **Equipo comercial:** consultas con más contexto y rutas claras hacia la red.
- **Marketing:** una base para campañas, contenidos, atribución y optimización continua.
- **Operaciones:** un modelo de contenido trazable que reduce errores y simplifica altas o cambios.

## Business explanation of the technical foundation

La plataforma utiliza Astro porque el caso necesita velocidad, contenido estructurado y estabilidad, no una aplicación pesada en cada visita. El navegador recibe HTML completo y JavaScript solo donde existe interacción real. Esto aporta:

- páginas rápidas y resistentes en conexiones móviles;
- contenido comprensible para buscadores y tecnologías asistivas;
- menos dependencias que mantener y menor superficie de fallos;
- incorporación de modelos mediante datos, sin copiar fichas completas;
- libertad para alojar el sitio en distintos proveedores con CDN y SSL.

No presentar el framework como el producto. Presentarlo como la decisión que sostiene una experiencia rápida y un mantenimiento controlable.

## Performance, quality and accessibility story

Utilizar solamente los resultados registrados en `PHASE_9_QA_REPORT.md`:

- 31 páginas estáticas verificadas y 1.528 enlaces internos sin roturas;
- 6.654 bytes de JavaScript externo, exclusivo de Compare;
- imágenes responsive y dimensiones reservadas;
- cero vulnerabilidades conocidas en la auditoría de dependencias;
- navegación por teclado, foco gestionado, contraste AA y reduced motion;
- comportamiento revisado entre 320 y 1920 px.

No citar puntuaciones Lighthouse. Explicar que performance, accesibilidad y seguridad formaron parte de la arquitectura desde el inicio y se volverán a medir sobre el dominio final.

## Content governance argument

La propuesta separa tres estados:

- **Verified:** puede aparecer como dato factual.
- **Needs review / client validation:** permanece bloqueado o se comunica como pendiente.
- **Proposal:** sirve para evaluar dirección creativa, pero requiere aprobación antes de publicación.

Este contrato reduce el riesgo de que una corrección, un nuevo modelo o una campaña propaguen información dudosa. El mensaje comercial es control y trazabilidad, no crítica al equipo que mantiene el sitio actual.

## Who to contact

Prioridad recomendada:

1. **Marketing Manager o Brand Manager:** principal sponsor para marca, contenido y experiencia.
2. **Commercial Manager:** valida leads, red, cotización, test ride y objetivos de negocio.
3. **General Manager:** adecuado cuando la estructura local es compacta y concentra decisión.
4. **Responsable digital o agencia actual:** aliado operativo para datos, integraciones y transición.

Contactar inicialmente a una persona con influencia y una segunda solo si no hay respuesta o si la primera la incorpora. No buscar nombres sin investigación pública confirmada y no hacer envíos masivos.

## First-contact strategy

### Sequence

1. Identificar un rol relevante y verificar el canal profesional.
2. Enviar un mensaje corto cuyo objetivo sea obtener 20 minutos.
3. Compartir la demo privada únicamente con contexto y, si corresponde, contraseña.
4. Realizar un solo seguimiento después de 5 a 7 días hábiles.
5. Si existe interés, pedir una segunda reunión con responsables de Marketing y Comercial para validar alcance y datos.

### Initial email

**Asunto:** Propuesta funcional para la experiencia digital de CFMOTO Uruguay

Hola, [Nombre]:

Estuve analizando la experiencia digital pública de CFMOTO Uruguay y detecté oportunidades concretas para fortalecer la marca, facilitar la exploración de vehículos y conectar mejor el interés con cotización, test ride y Service.

Preparé una propuesta funcional de rediseño para mostrar el enfoque en una demo breve. No es una propuesta oficial ni un sitio publicado: es una base avanzada para conversar sobre una posible evolución.

¿Te parece coordinar una reunión de 20 minutos para verla y evaluar si tiene sentido para sus prioridades?

Saludos,  
[Nombre]  
[Rol / estudio]  
[Teléfono] · [LinkedIn]

### LinkedIn

Hola, [Nombre]. Preparé una propuesta funcional para mostrar cómo podría evolucionar la experiencia digital de CFMOTO Uruguay en marca, descubrimiento de producto y generación de consultas. Me gustaría presentarla en una demo de 20 minutos, sin compromiso. ¿Sos la persona indicada para conversarlo?

### WhatsApp

Hola, [Nombre]. Soy [Nombre]. Analicé la experiencia digital pública de CFMOTO Uruguay y preparé una propuesta funcional enfocada en catálogo, producto y contacto comercial. Quisiera mostrarla en una reunión breve y conocer sus prioridades. ¿Podemos coordinar 20 minutos o me indicás con quién corresponde hablar?

## Meeting objective

El objetivo de la primera reunión es obtener:

- interés explícito en continuar;
- validación de las oportunidades prioritarias;
- acceso a un responsable de datos/operación;
- acuerdo para preparar una propuesta final de alcance, tiempos y precio.

La llamada a la acción recomendada es: **validar el alcance y preparar una propuesta final con los responsables de Marketing y Comercial**.

## Meeting structure

### 20-minute meeting

| Time        | Purpose                                                               |
| ----------- | --------------------------------------------------------------------- |
| 0:00–2:00   | Introductions, current context and permission to show the proposal    |
| 2:00–4:00   | Five priority opportunities, stated without a defect-by-defect audit  |
| 4:00–12:00  | Live demo: Home, 450SR, Catalog, Compare, Service/Quote and Mobile    |
| 12:00–15:00 | Business value for customers, Sales, Marketing and content operations |
| 15:00–18:00 | Demo-to-production gap and indicative commercial range                |
| 18:00–20:00 | Questions and agreement on a scope-validation workshop                |

### 40-minute meeting

| Time        | Purpose                                         |
| ----------- | ----------------------------------------------- |
| 0:00–3:00   | Introductions and business context              |
| 3:00–8:00   | Current journey and prioritized opportunities   |
| 8:00–18:00  | Ten-minute live demo                            |
| 18:00–25:00 | Stakeholder questions and CFMOTO priorities     |
| 25:00–30:00 | Content governance, leads and measurement model |
| 30:00–35:00 | Production plan, responsibilities and risks     |
| 35:00–38:00 | Commercial model and indicative ranges          |
| 38:00–40:00 | Owners, next workshop and follow-up date        |

Do not spend the additional time touring every page. Use it to learn how CFMOTO operates and to identify the people who own catalog, leads and locations.

## Negotiation principles

- Si preguntan precio antes de la demo, compartir el rango objetivo y explicar qué supuestos incluye. No ocultarlo ni convertirlo en una cotización final sin inputs.
- Vender alcance, entregables, reducción de riesgo y capacidad de evolución. Usar horas solo para control interno.
- No descontar por inseguridad. Cualquier concesión debe intercambiarse por alcance menor, pago anticipado, compromiso mínimo de mantenimiento o permiso contractual para un caso de estudio.
- Mantener separados proyecto inicial, costos de terceros y servicio mensual.
- No prometer resultados de ventas. Proponer una línea base y medición posterior.
- Si ya existe proveedor, posicionar la propuesta como posible evolución o colaboración. No forzar un reemplazo.

## Ownership, hosting, CMS and integrations

- CFMOTO conserva dominio, marca, datos, cuentas, analítica y assets oficiales.
- Tras el pago completo, el cliente recibe el código específico del proyecto y una licencia/cesión acordada. Las herramientas genéricas y conocimiento reutilizable del proveedor permanecen fuera de la exclusividad.
- El hosting debe quedar en una cuenta controlada por el cliente, con CDN, SSL, despliegues versionados y acceso del proveedor según necesidad.
- Para actualizar motos existen dos caminos: servicio gestionado mensual o CMS futuro. No agregar CMS sin confirmar frecuencia, responsables y necesidad de autonomía.
- Las cotizaciones pueden conectarse a email, CRM o routing existente. Antes se necesita definir receptor, SLA, campos, consentimiento y fallback.
- Analytics puede medir vistas de producto, Compare, inicio/envío de leads, contacto a la red, WhatsApp, campañas y Core Web Vitals. El dashboard se cotiza cuando plataforma y gobernanza estén definidas.

## KPIs after launch

Establecer una línea base antes o inmediatamente después del lanzamiento y revisar:

- tasa ficha de producto a inicio y envío de cotización;
- solicitudes de test ride;
- clics de contacto a dealer/Service y WhatsApp verificado;
- comparaciones iniciadas y productos abiertos desde Compare;
- interacción con fichas y filtros;
- tráfico orgánico no vinculado a marca;
- Core Web Vitals y errores por plantilla;
- completitud y antigüedad de datos del catálogo.

No interpretar una mejora de interfaz como incremento causal de ventas. Relacionar leads con resultados comerciales solo cuando CRM y atribución permitan hacerlo.

## Public-demo policy

Mantener la demo en una URL privada o difícil de descubrir, con `noindex` y contraseña si el acceso se amplía. Mostrar claramente que es una propuesta no oficial. No promocionarla públicamente con branding CFMOTO ni entregar assets conceptuales como material autorizado.
