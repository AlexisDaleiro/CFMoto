# Open Questions

Solo dependencias que requieren cliente, ventas, marketing, infraestructura, CRM o branding. Las decisiones de IA/UX de Phase 1 ya no son preguntas.

## Needed before final visual system

1. ¿Cuál es el brand book vigente y qué versión/mercado aplica en Uruguay?
2. ¿Cuáles son las tipografías oficiales, archivos y licencias web/territorios/pesos? La investigación pública no permitió verificarlas; Phase 3 usa provisionalmente Barlow Condensed Variable + Inter Variable bajo OFL, sin afirmar oficialidad.
3. ¿Cuáles son los masters de logo aprobados, clear space, tamaños mínimos, variantes sobre light/dark/fotografía y reglas de co-branding?
4. ¿Cuál es la especificación oficial de CFMOTO Cyan y qué límites de uso exige la marca? Phase 3 usa provisionalmente `#00B7E5`; cualquier reemplazo debe hacerse en el token semántico y revalidar contraste.
5. ¿Qué assets globales/locales están autorizados para referencia interna, propuesta privada y producción? Distinguir esos tres alcances por escrito.
6. ¿Cuál es la selección final de modelos/variantes para la demo y qué productos deben recibir mayor protagonismo comercial?
7. ¿CFORCE 450L y UFORCE 800 están activos y cuáles son su identidad/especificaciones locales correctas? Hasta resolverlo, su contenido sigue `CLIENT VALIDATION REQUIRED`.
8. ¿Qué tono verbal, slogans, claims institucionales/locales, cifras y premios están aprobados con fuente/fecha?
9. ¿Existen campañas/lanzamientos próximos que deban orientar el sistema visual sin cambiar la arquitectura?

La elección humana y la especificación de Phase 3 están resueltas: **Hybrid — Apex + Engineered Clarity**, un único sistema. Brand book, tipografía/licencia, logo, cyan y derechos no bloquean Phase 4 Technical Foundation porque tienen sustitutos/tokens provisionales responsables; sí bloquean declarar esos elementos finales/oficiales. Placeholders solo pueden ser low-fidelity y claramente etiquetados, nunca datos o productos ficticios.

## Before feature integration

1. ¿Cuál es la fuente maestra y owner de catálogo, specs, colores, precio, disponibilidad y fecha de verificación?
2. ¿Qué CRM/correo/WhatsApp Business recibe cada tipo de lead y cómo se enruta por categoría/departamento/dealer?
3. ¿Cuál es el workflow/SLA real de cotización y test ride? ¿Qué modelos y ubicaciones son elegibles?
4. ¿Quién mantendrá producto, campañas, experiencias y ubicaciones; Content Collections/Git es viable o se necesita CMS?
5. ¿Qué texto legal, consentimiento, retención y campos finales requieren Quote, Test ride y Contact?
6. ¿Qué proveedor de mapas/geocoding se autoriza y existen coordenadas/NAP/capacidades verificadas?
7. ¿Precios/stock son por modelo, variante o dealer? ¿USD/UYU, impuestos, vigencia y frecuencia de actualización?
8. ¿Qué stack/accesos de analytics existen y qué integración CRM/offline outcomes será posible?
9. ¿El lanzamiento es solo español o debe prepararse contenido localizado adicional?

## Before Production

1. ¿Cuál es la URL base canónica verificada y qué hosting, CDN y entornos preview/production se utilizarán? Esto habilita `site`, sitemap, redirects, reglas de indexación y headers por entorno.
2. Entrega completa de fotografía de producto por variante/color y crops desktop/tablet/mobile con owner, alt, focal point y derechos.
3. Campaign, Racing, Adventure, Technology y Community assets finales; dealer/service imagery local; video/3D solo como enhancement.
4. Credenciales/ownership de dominio, DNS, hosting/CDN, email, CRM, analytics y Search Console.
5. Aprobación final de catálogo, specs, precios, disponibilidad, garantía, claims, derechos y disclaimers.
6. Validación de todas las Locations: NAP, horarios, capacidades, contactos, coordenadas y responsable de actualización.
7. Datos de tráfico/backlinks y status de modelos para aprobar el destino final de cada redirect legacy.
8. Prueba end-to-end del SLA y routing de leads, fallback, alertas, deduplicación y ownership.
9. Revisión de privacidad/seguridad, retención, proveedores, cookies/consentimiento y respuesta a incidentes.
10. Plan de cutover, rollback, backups, monitoreo y soporte mensual.

La URL/infraestructura y los masters oficiales de marca siguen pendientes, pero no bloquean Phase 5: el prototipo continuará no indexable, sin canonical ficticia y con valores provisionales centralizados. Sí bloquean declarar el prototipo producción-ready.
