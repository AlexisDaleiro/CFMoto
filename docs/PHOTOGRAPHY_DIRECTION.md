# Photography Direction

La fotografía debe vender forma, función y posibilidad de uso. Todo asset necesita `owner`, `rightsStatus`, `allowedUse`, producto/variante/año/color, alt, focal point y fecha de verificación.

## Principios comunes

- Producto reconocible antes que efecto.
- Una imagen tiene un trabajo: identidad, deseo, prueba, detalle o contexto humano.
- Dirección de movimiento deja espacio hacia delante del vehículo; la composición no lo “encierra”.
- Color grading consistente dentro de una historia, sin falsear colores de producto.
- No screenshots, thumbnails ampliados, logos/texto embebido evitables ni fotos de variante incorrecta.
- El texto se compone en safe zone real; si no existe, va fuera de la imagen o sobre velo localizado, nunca sobre caos.

## Taxonomía

### Product studio

Cutout o fondo continuo, luz que revela carenado, chasis, neumático y materiales. Cámara/escala comparables dentro de categoría, no necesariamente entre moto y SxS. Sirve para listing, selector, compare, hero fallback y datos. Solicitar vistas 3/4 consistentes, lateral y detalles, con sombra separada cuando sea posible.

### Product environmental

Vehículo en uso en contexto creíble. Muestra postura, escala y propósito sin convertirse en foto genérica de paisaje. La superficie y vestimenta deben ser coherentes con el producto, mercado y seguridad.

### Racing

Pista, boxes, frenada, ápice, preparación y detalle técnico. Mezclar plano amplio de velocidad con primer plano de concentración/material. Motion blur puede expresar movimiento solo si el producto principal conserva lectura. Claims/resultados exigen fecha, fuente y relación aprobada con el modelo.

### Adventure

Territorio con profundidad, ruta legible, clima y escala humana. Evitar “vehículo diminuto en paisaje bonito”: al menos una imagen por historia debe permitir evaluar la máquina. Rutas/localizaciones y permisos se documentan; no presentar un terreno como Uruguay si no lo es.

### Technology

Macro y detalle funcional: motor, freno, suspensión, iluminación, TFT/conectividad, estructura o ergonomía. La imagen debe corresponder al feature explicado. Diagramas, callouts o renders técnicos requieren fuente y aprobación; no inventar piezas internas.

### Community

Ownership real, eventos, preparación, encuentro, servicio y entrega. Priorizar diversidad natural y consentimiento explícito. Evitar stock aspiracional indistinguible, poses artificiales o conductas inseguras. Registrar permiso de personas, ubicación, evento, canales y expiración.

## Vehículo por categoría

- **Motos:** silueta completa, óptica/carenado, ergonomía y ángulo de inclinación. SR admite pista; MT territorio; NK/CL entorno urbano/editorial.
- **ATV / CFORCE:** neumáticos, despeje, racks, postura y terreno. Alternar recreación y capacidad sin promesas de carga/arrastre no verificadas.
- **UFORCE:** cabina, plazas, caja/carga y contexto de trabajo. La utilidad se muestra con dignidad premium, no como catálogo agrícola genérico.
- **ZFORCE:** ancho/postura, suspensión, protección y acción off-road. Mantener ocupantes/equipamiento de seguridad y suficiente detalle de vehículo.

## Crop strategy

Cada asset crítico necesita tres composiciones aprobadas o un master con suficiente resolución y safe zones documentadas.

### Desktop

Usar panorámica para producto + copy lateral o full-bleed con focal point fuera del área de navegación. El producto puede ocupar aproximadamente la mitad o más del canvas cuando la apertura sea comercial. Preservar ruedas, extremo frontal y dirección de viaje.

### Tablet

Reducir simultaneidad: copy sobre zona tranquila o en bloque separado. Mantener producto entero antes de conservar paisaje periférico. Reencuadrar, no solo centrar el crop desktop.

### Mobile

Preferir master vertical o crop específico. Producto, modelo y CTA deben convivir sin reducirse a miniatura. Cuando no exista safe zone, separar imagen y copy. Puede usarse segundo asset/detalle en lugar de forzar el horizontal.

Focal point se almacena por breakpoint y se valida también con textos largos, barras del navegador y sticky actions.

## Calidad y entrega

- Solicitar source original, perfil de color conocido y resolución suficiente para el mayor uso previsto.
- Mantener master sin texto; derivados web se generarán en AVIF/WebP y fallback cuando corresponda.
- Conservar metadatos de crédito/licencia fuera del archivo si el DAM los elimina.
- Variantes de color requieren correspondencia verificable; no recolorear producto para simular disponibilidad.
- La previsualización debe reservar dimensiones y evitar CLS; el hero LCP tendrá selección y presupuesto propios en Phase 3/implementación.

## Fallback ladder

1. Campaign/lifestyle aprobado y crop específico.
2. Product environmental aprobado con copy separado.
3. Cutout oficial de alta resolución sobre superficie neutra.
4. Vista oficial de producto con encuadre conservador y composición tipográfica.
5. Sin asset fiable: no publicar el módulo; nunca generar una representación fotorrealista que pueda confundirse con producto real.

El fallback conserva identidad mediante escala, modelo, dato verificado y ritmo de superficie. Video o 3D siempre son enhancement.

## Derechos

| Estado             | Uso permitido                                                             |
| ------------------ | ------------------------------------------------------------------------- |
| Reference only     | Research/moodboard interno con fuente; no demo pública ni producción      |
| Proposal-cleared   | Presentación privada dentro del alcance/fecha acordados                   |
| Production-cleared | Canales, territorios, duración y transformaciones autorizados por escrito |
| Unknown            | No usar; solicitar autorización o reemplazo                               |

Que un archivo esté en CFMOTO Global, prensa o redes no concede automáticamente derechos a CFMOTO Uruguay. También se verifica talento, fotógrafo/agencia, música, circuitos/localizaciones, dorsal/equipo y marcas de terceros.

## Checklist de selección

- ¿Es el modelo, variante, año y color correcto?
- ¿Se entiende el producto a tamaño móvil?
- ¿La imagen demuestra el claim que acompaña?
- ¿Tiene safe zones/crops reales?
- ¿El contraste es suficiente sin degradado agresivo?
- ¿Conducta y equipamiento son seguros?
- ¿Derechos, crédito, territorio y expiración están claros?
- ¿Existe alternativa si el asset expira o pesa demasiado?

La lista priorizada de solicitudes vive en `ASSET_REQUIREMENTS.md`.
