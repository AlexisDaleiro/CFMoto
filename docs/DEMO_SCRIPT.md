# CFMOTO Uruguay — Demo Script

Target duration: 7 to 10 minutes. The live product is the center of the meeting; slides establish context and close the conversation.

## Demo preparation

- Use a private/noindex URL and verify every route before the meeting.
- Open the required tabs in order and clear previous Compare/filter state.
- Use the approved browser at 1280–1440 px and a real phone or a separate 390 px viewport.
- Hide bookmarks, developer tools, local paths, notifications and personal accounts.
- Confirm that the proposal/non-official notice remains visible where conceptual media appears.
- Have a short screen recording or screenshots available only as a technical fallback.
- Do not enter real personal data in the demo form.

## Opening 60 seconds

### Open

`/`

### Say

“La plataforma actual cumple una función básica y ya ofrece un catálogo y una red de Service. Preparé esta propuesta funcional para mostrar una posible evolución: una presencia de marca más fuerte, mejores herramientas para investigar vehículos y recorridos comerciales con contexto. La demo usa contenido y assets de propuesta donde todavía necesitamos validación oficial.”

### Show

1. Home hero and category choices.
2. Scroll briefly to the featured 450SR.
3. Open `/motos/450sr/` before the first minute ends.

Do not start with documentation, code, performance tooling or a long audit summary.

## Five-minute version

| Time      | Open             | Main point                                              |
| --------- | ---------------- | ------------------------------------------------------- |
| 0:00–0:45 | Home             | Brand hierarchy and clear paths to products             |
| 0:45–1:35 | 450SR            | Premium presentation plus trusted technical information |
| 1:35–2:15 | Motos catalog    | Discovery by family and use                             |
| 2:15–3:05 | Compare          | Decision support inside CFMOTO                          |
| 3:05–3:40 | Racing           | Brand content connected to product                      |
| 3:40–4:20 | Service          | Searchable local-network experience                     |
| 4:20–4:45 | Quote            | Contextual UX; no data transmission in demo             |
| 4:45–5:00 | Mobile menu/Home | Designed for mobile from the start                      |

### Close

“La propuesta ya permite evaluar la experiencia y la arquitectura. Para llevarla a producción necesitamos validar catálogo, assets, red, leads y marca con ustedes. El siguiente paso que propongo es una reunión de alcance con Marketing y Comercial para preparar una propuesta final.”

## Ten-minute version

### 1. Home — 1 minute

Open `/`.

Say:

- “La apertura instala producto y marca antes de pedir una acción.”
- “Las tres categorías son claras y el usuario no necesita conocer una cilindrada para empezar.”
- “Racing, Adventure y Technology funcionan como entradas al catálogo, no como contenido aislado.”
- “Las rutas hacia producto, Service y contacto se mantienen visibles sin competir entre sí.”

Navigate: click **Ver 450SR**.

### 2. Product — 1 minute 30 seconds

Open `/motos/450sr/`.

Say:

- “La apertura crea deseo, mientras datos y decisiones vuelven inmediatamente a una interfaz precisa.”
- “La ficha se construye con módulos reutilizables. Un nuevo modelo se incorpora principalmente como contenido estructurado.”
- “Las especificaciones visibles tienen fuente y estado de verificación.”
- “La composición y los crops cambian para móvil sin crear otro sistema visual.”

Do not imply that the visual is official. Do not dwell on unavailable price or commercial actions.

Navigate: use breadcrumb or header to **Motos**.

### 3. Catalog — 1 minute

Open `/motos/`.

Actions:

1. Open filters.
2. Select Family SR or Usage Sport.
3. Apply and show the result count and active filter.
4. Clear the filter.

Say:

“El catálogo acompaña a quien explora por familia o uso. Los filtros aparecen solo cuando existe información confiable. Sin JavaScript, el catálogo completo sigue disponible.”

Navigate: click **Comparar 450SR**, then add 700CL-X Heritage or 800MT Touring.

### 4. Compare — 1 minute 30 seconds

Open `/comparar/?models=450sr,800mt-touring`.

Actions:

1. Point to the two product columns and grouped attributes.
2. Add a third compatible motorcycle if useful.
3. Briefly show that ATV cannot mix with motorcycles.
4. On mobile, show the local horizontal comparison viewport and explicit previous/next controls.

Say:

“Compare permite investigar diferencias dentro de CFMOTO en lugar de obligar al usuario a buscar una tabla externa. Solo cruza categorías compatibles y solamente muestra especificaciones verificadas. No declara un ganador.”

Navigate: open **Experiencia**, then **Racing**.

### 5. Racing — 50 seconds

Open `/experiencia/racing/`.

Say:

“Esta vertical demuestra que el sitio puede sostener campañas y contenido de marca sin convertirse únicamente en un catálogo. Racing conecta la narrativa con la familia SR y con el siguiente paso de producto. El copy actual es de propuesta y requiere aprobación.”

Do not tour Adventure, Technology and Community unless the stakeholder asks.

Navigate: use the header to **Service**.

### 6. Service — 1 minute

Open `/service/`.

Actions:

1. Search a locality or location name.
2. Filter by department.
3. Show phone, detail and directions.
4. Clear filters.

Say:

“La lista pública puede transformarse en una herramienta para localizar y contactar Service. La experiencia funciona sin mapa y queda preparada para coordenadas verificadas. Los diez registros actuales provienen del sitio público y necesitan validación del cliente antes de producción.”

Navigate: open `/cotizar/?product=450sr`.

### 7. Quote — 1 minute

Actions:

1. Point out the preselected vehicle.
2. Submit the empty form to show the error summary and labels.
3. If time permits, use synthetic values and show the demo success state.

Say:

“Esta demo valida la experiencia de cotización, pero no transmite datos. La versión final puede integrarse con el email, CRM o routing que CFMOTO ya utilice. Antes debemos acordar responsables, SLA, privacidad y protección antiabuso.”

### 8. Mobile — 1 minute

Use a 390 px viewport or physical phone.

Show:

1. Home hero and category entry.
2. Mobile menu opening, grouped navigation and focus-safe close.
3. 450SR hero and specifications.
4. Catalog filter dialog or Compare viewport.

Say:

“Móvil no es una reducción tardía del desktop. Navegación, filtros, comparación, targets y crops cambian según la tarea.”

### 9. Close — 30 seconds

Return to Home or the closing slide.

Say:

“La propuesta funcional está lista para evaluación comercial, no para publicación. Con sus assets, master data y flujo de leads podemos cerrar el alcance de producción. Propongo una segunda instancia con Marketing y Comercial para validar inputs y preparar la oferta final.”

## Click-by-click route list

1. `/`
2. `/motos/450sr/`
3. `/motos/`
4. `/comparar/?models=450sr,800mt-touring`
5. `/experiencia/racing/`
6. `/service/`
7. `/cotizar/?product=450sr`
8. Repeat Home/Product/Compare at 390 px.

## Optional branches

- For Adventure stakeholders: replace Racing with `/experiencia/adventure/` and 450SR with `/motos/800mt-touring/` after the opening.
- For commercial/operations stakeholders: spend less time on Racing and more on Service, Quote and content governance.
- For a technical stakeholder: show the Phase 9 metrics on one slide after the live demo. Do not open source code unless asked.

## Things not to show

- internal documentation, content JSON, source code or development tools;
- internal labels such as `proposal`, `needsReview` or schema terminology;
- the old development fixture or local filesystem paths;
- records known to contain doubtful technical data;
- proposal assets as if CFMOTO supplied or approved them;
- forms as if they already reached Sales;
- unverified prices, availability, WhatsApp, Dealer roles or test-ride eligibility;
- all four Experience pages in a short meeting;
- Lighthouse or conversion numbers that were not measured.

## Demo failure recovery

- If the live URL fails, use the prepared recording and continue the same story.
- If a filter or Compare state starts with old data, clear it and explain the user-controlled persistence only if asked.
- If internet is unstable, use the static build locally. Do not expose the local path in the presentation window.
- If the meeting runs short, keep Home, 450SR, Compare and the closing next step. Remove the other stops.
