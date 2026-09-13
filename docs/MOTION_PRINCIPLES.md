# Motion Principles

Motion comunica velocidad, precisión, descubrimiento y continuidad. Nunca transporta información indispensable ni compensa una jerarquía débil. Este documento no elige librería ni valores finales.

## Principios

- **Directo:** la respuesta de un control comienza inmediatamente.
- **Breve:** interacción más rápida que relato; el usuario nunca espera a una animación para actuar.
- **Direccional:** entrada/salida conserva origen, destino y sentido de desplazamiento.
- **Jerárquico:** primero identidad/producto, luego dato/copy, por último acciones; no todo aparece a la vez.
- **Físico, no fantástico:** aceleración, frenada, cambio de plano y precisión mecánica; no partículas, glow o flotación perpetua.
- **Interrumpible:** navegación, filtro y compare responden aunque una transición esté en curso.

## Categorías

### Reveal editorial

Revela bloques al entrar en lectura con desplazamiento corto, máscara o cambio de opacidad. No oculta contenido si JS falla. Máximo una secuencia clara por momento; listas largas no animan cada fila.

### Image transition

Cambio de campaña, galería o color conserva escala y foco. Crossfade o wipe direccional controlado; no carrusel automático esencial. Cambio de color no debe sugerir que una variante está localmente disponible sin dato.

### Product change

En listing/selector/compare, identidad y estado cambian de forma estable; el vehículo puede hacer un desplazamiento corto o disolver, mientras texto y controles mantienen posición para evitar reorientación.

### Section transition

El paso dark → light → photo puede usar corte, reveal de superficie o cambio de contraste ligado a scroll natural. No hijacking, páginas atadas a una timeline ni parallax que desacople control del usuario.

### Compare and filter feedback

Añadir/quitar/filtrar confirma inmediatamente, actualiza conteo y anuncia estado. Las columnas pueden reacomodarse suavemente sin perder header/atributo/foco. Undo permanece accionable sin depender de animación.

### Navigation

Paneles aparecen desde su origen, foco entra al primer destino útil y vuelve al trigger. Header transparente adopta superficie sólida con cambio corto, sin parpadeo sobre media.

### Conversion feedback

Loading evita doble envío; success/error priorizan mensaje, foco y recuperación. Nada de confetti, loops o escenas largas en formularios comerciales.

## Personalidad por dirección

- **Performance Editorial:** cortes más decisivos, secuencia tipográfica y wipes inspirados en paso por cuadro; mayor contraste, siempre breve.
- **Precision Tech:** interpolación contenida, alineación, conteo/datos y estados casi instrumentales; menor amplitud.
- **Terrain / Adventure Premium:** transiciones más respiradas entre escalas de paisaje y detalle, sin parallax extremo ni lentitud ceremonial.

La diferencia está en ritmo y gesto, no en hacer una dirección más difícil de usar.

## Reduced motion

Con `prefers-reduced-motion: reduce`:

- reemplazar desplazamiento, máscara, zoom y parallax por corte o fade mínimo;
- detener autoplay y loops; ofrecer controles de video;
- mantener contenido, orden, comparación, feedback y navegación completos;
- no esconder contenido esperando Intersection Observer;
- preservar foco sin scroll animado obligatorio.

Las pruebas deben cubrir sistema operativo, teclado, zoom y dispositivos reales; “menos duración” no basta si persiste movimiento espacial problemático.

## Timing philosophy para Phase 3

Phase 3 definirá rangos tras prototipos y pruebas, no una cifra universal. Orden conceptual:

1. Estado/control: inmediato y corto.
2. Navegación/product change: corto, suficiente para continuidad.
3. Reveal editorial: moderado y no bloqueante.
4. Media narrativa: solo con control explícito y presupuesto de performance.

Easing debe sugerir respuesta y asentamiento, no rebote elástico. Stagger se limita a grupos pequeños y se elimina en UI funcional densa.

## Prohibido

- Scroll hijacking o scroll-jacking horizontal.
- Cursor custom.
- Parallax extremo, zoom continuo o fondo que nunca se detiene.
- Autoplay con sonido o video sin pausa/control.
- Texto esencial que solo se revela por hover/scroll.
- Animar tablas completas, todos los números o cada card.
- Transiciones de varios segundos antes de navegación/CTA.
- Efectos de velocidad que reduzcan legibilidad o oculten el vehículo.
- Motion que cause layout shift o cargue librerías sin beneficio medible.

## Acceptance questions

- ¿Aclara relación u origen/destino?
- ¿Mejora percepción de producto o feedback?
- ¿Funciona igual sin animación?
- ¿Es interrumpible y no bloquea acción?
- ¿Respeta foco, lectura y performance?
- ¿Sigue pareciendo ingeniería/movimiento físico, no gaming?

Si no supera estas preguntas, se elimina.
