# Navigation Specification

## Objectives

- Llegar a categoría/familia en una decisión.
- Mantener visibles las rutas comerciales sin saturar el header.
- Exponer estado de comparación cuando exista.
- Funcionar por teclado, touch y puntero sin depender de hover.

## Information model

### Primary navigation

1. Motos
2. ATV
3. Side-by-Side
4. Experiencia CFMOTO
5. Concesionarios
6. Service

### Utility actions

- **Comparar**: enlace con contador cuando haya selección (`Comparar, 2 seleccionados`).
- **Test ride**: acción secundaria global; solo ofrece modelos/dealers elegibles.
- **Cotizar**: CTA global de mayor énfasis.
- **Contacto**: utility de baja prioridad o footer; no compite con Cotizar.

### Footer-only

CFMOTO/institucional, Noticias, Comunidad cuando aún no tenga profundidad, privacidad, términos, cookies, redes, CFMOTO Global y contacto corporativo. Una vertical pasa al menú de Experiencia cuando tenga contenido publicable.

## Desktop

### Header inicial

- Logo enlaza a Inicio.
- Primary nav en una fila.
- Utility cluster con Comparar, Test ride y Cotizar.
- Skip link es primer elemento enfocable.
- Sobre hero fotográfico, el header debe conservar contraste medido; el comportamiento no depende de transparencia.

### Header durante scroll

- Se compacta en altura, no cambia orden ni nombres.
- Puede fijarse cuando mejora acceso a acciones; no debe cubrir anchor target ni robar espacio excesivo.
- Muestra estado de sección actual y contador compare.
- No aparece/desaparece con micro-scroll; usar umbral estable y respetar reduced motion.

### Menús de producto

Se justifica un panel desplegable compacto, no un mega-menu enciclopédico:

| Trigger      | Columna 1                                                                   | Columna 2                                | Acción final               |
| ------------ | --------------------------------------------------------------------------- | ---------------------------------------- | -------------------------- |
| Motos        | Ver todas; Racing, Naked, Adventure, Heritage                               | Familias activas SR, NK, MT, CL-X        | Ver todas las motos        |
| ATV          | Ver todos; Trabajo, Recreación solo como accesos filtrados si hay contenido | CFORCE + 1–2 destacados                  | Ver todos los ATV          |
| Side-by-Side | Ver todos; Sport/Utility                                                    | ZFORCE, UFORCE + destacados              | Ver todos los Side-by-Side |
| Experiencia  | Hub                                                                         | Racing, Adventure, Technology, Community | Explorar experiencia       |

Productos destacados son editoriales, limitados y verificables; el menú no replica el catálogo completo. Concesionarios y Service navegan directamente, sin panel.

### Interaction contract

- Click/Enter/Space abre el panel; segundo click o Escape lo cierra.
- Hover puede anticipar apertura solo en puntero fino con demora tolerante; nunca es la única vía.
- Solo un panel abierto. Click fuera lo cierra.
- Flechas izquierda/derecha recorren triggers; arriba/abajo recorren items cuando se adopte patrón menubar. Alternativa preferida por simplicidad: tab order nativo entre botones/links y flechas no obligatorias.
- Foco entra al primer link solo por acción explícita; al cerrar vuelve al trigger.
- No cerrar cuando el puntero cruza un pequeño espacio entre trigger/panel.
- Estado actual usa `aria-current="page"`; trigger abierto usa `aria-expanded` y `aria-controls`.
- El panel no es modal y no usa focus trap.

## Mobile

### Header

- Logo, botón `Menú`, indicador/acción `Comparar` y acceso a Cotizar.
- En small mobile, priorizar Logo + Menú + una acción; Comparar/Cotizar restantes aparecen en la primera vista del menú.
- Header sticky compacto únicamente si no colisiona con sticky conversion bar de producto.

### Menu model

Panel modal de pantalla disponible con navegación por niveles:

```text
Nivel 1
Motos >
ATV >
Side-by-Side >
Experiencia CFMOTO >
Concesionarios
Service
────────
Comparar (2)
Test ride
[Cotizar]
```

Nivel 2 muestra `← Volver a Menú`, título del grupo, `Ver todo` y familias/usos. No se abre un tercer nivel; familia/uso navega a landing/listing.

### Mobile behavior

- Abrir bloquea scroll del documento sin perder posición.
- El foco pasa al botón Cerrar o heading del panel; Tab queda contenido dentro mientras sea modal.
- Escape, Cerrar o selección de destino cierran. Foco vuelve al trigger salvo navegación.
- Back interno vuelve de nivel 2 a nivel 1; browser Back conserva semántica de historial y no se secuestra salvo que el panel haya creado explícitamente un state documentado.
- Mantener nombres y selección compare al cambiar de nivel.
- Targets táctiles efectivos ~44×44 px y acciones críticas dentro de alcance sin fijar posiciones visuales en esta fase.
- El menú debe ser usable con zoom/reflow y teclado virtual.

## Current states

- Link de página actual: `aria-current="page"` y señal no dependiente solo de color.
- En producto, el grupo de su categoría puede indicarse como contexto activo sin marcar una landing distinta como página actual.
- En filtros/compare, el header no refleja cada parámetro; conserva el destino base activo.
- Al seleccionar productos, contador compare se actualiza con `aria-live="polite"` sin interrumpir repetidamente.

## Compare entry

- Siempre disponible en utility nav.
- Con 0 seleccionados enlaza al estado introductorio.
- Con 1–3 muestra contador y abre `/comparar/` preservando IDs.
- Al añadir desde card/PDP aparece confirmación discreta con `Ver comparación`; no modaliza el recorrido.
- No usar una bandeja fija desktop si tapa producto; una barra resumida puede aparecer solo tras primera selección y ser cerrable.

## CTA hierarchy

1. **Cotizar** — acción comercial primaria global y de producto.
2. **Test ride** — secundaria cuando categoría/modelo es elegible.
3. **WhatsApp** — contextual en producto, ubicación, service y formularios como alternativa.
4. **Encontrar concesionario / Service** — contextual según intención.
5. **Comparar** — acción de decisión, no se estiliza como conversión primaria.

Una pantalla no muestra simultáneamente todas con igual énfasis. Home orienta; listing favorece detalle/compare; PDP favorece Cotizar; location favorece contacto/indicaciones.

## Responsive behavior by range

- **Small mobile:** un nivel visible, labels cortos, acciones apiladas en menú; sticky bars máximo dos acciones.
- **Large mobile:** puede mostrar Compare junto a Menú; subnav sigue drill-down.
- **Tablet:** menú móvil o panel híbrido según espacio real, no user agent.
- **Desktop:** primary + utility; panels compactos.
- **Large desktop:** aumenta aire, no suma destinos ni ancho excesivo de lectura.

## Failure/fallback

- Sin JS: logo, destinos principales y acciones deben existir como navegación HTML; paneles pueden renderizarse expandidos en una página/estructura accesible.
- Error de estado compare: enlace abre comparador vacío con explicación, nunca bloquea navegación.
- CTA no disponible: no mostrar acción inerte; ofrecer alternativa honesta.
