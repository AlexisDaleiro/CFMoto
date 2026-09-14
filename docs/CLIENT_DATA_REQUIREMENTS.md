# Client Data Requirements

Checklist para convertir la demo comercial en una operación conectada y publicable. Cada entrega debe identificar owner, fuente maestra, fecha de vigencia y responsable de actualización.

## Locations

- Lista autoritativa de concesionarios y puntos de venta.
- Lista autoritativa de talleres y puntos de Service.
- Nombre comercial y razón social cuando corresponda.
- Dirección/NAP normalizados: calle, número, localidad y departamento.
- Capabilities confirmadas por ubicación: sales, service, parts y testRide.
- Teléfonos con formato público y reglas de derivación.
- Números de WhatsApp confirmados explícitamente y propósito de cada canal.
- Horarios regulares, feriados, cierres y excepciones temporales.
- Coordenadas verificadas o proveedor autorizado de geocoding.
- Categorías/modelos atendidos y cualquier restricción operativa.
- Owner y frecuencia de actualización de la red.
- Validación prioritaria de BIKEUP, MYM, CAFE RACE y la grafía CREDIBIKERSS.

## Leads

- CRM, formulario, email transaccional o proveedor receptor.
- Recipients y routing por solicitud, producto, categoría, departamento y ubicación.
- SLA de primera respuesta y texto comercial autorizado.
- Campos realmente necesarios y reglas de obligatoriedad.
- Lead ownership y procedimiento de reasignación/escalamiento.
- Notificaciones internas y al usuario.
- Deduplicación, idempotencia, estados de entrega y fallback manual.
- Estrategia antispam: honeypot, rate limit, Turnstile u opción del proveedor.
- Validación y sanitización server-side.

## Test Ride

- Modelos y variantes elegibles.
- Ubicaciones y categorías habilitadas.
- Disponibilidad de unidades y owner operativo.
- Proceso de coordinación, aprobación y confirmación.
- Si se solicitan preferencias, ventanas válidas y reglas de calendario.
- Copy que diferencie solicitud, coordinación y reserva confirmada.

## Legal

- Política de privacidad vigente y URL pública.
- Texto/versionado de consentimiento operacional.
- Consentimiento de marketing separado, si aplica.
- Finalidad, base legal, recipients y transferencias de datos.
- Retención, borrado, acceso y responsable de privacidad.
- Política de menores y datos sensibles, si correspondiera.

## Analytics

- Plataforma y propietario de medición.
- Eventos/conversiones aprobados para Quote, Test Ride, teléfono, indicaciones y WhatsApp.
- Definición de lead válido frente a assisted conversion.
- Política de consentimiento/cookies.
- Integración de resultados offline/CRM sin exponer PII.
- Convención de campaign/source attribution y allowlist UTM.
