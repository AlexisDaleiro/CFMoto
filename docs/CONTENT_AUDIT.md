# Content Audit

**Corte:** 2026-09-13  
**Regla:** presencia en el sitio no equivale a exactitud. Ningún dato marcado dudoso debe migrarse como hecho sin validación.

## Estados

- `VERIFIED`: publicado y coherente dentro del sitio; no implica certificación de fábrica.
- `PRESENT_BUT_SUSPICIOUS`: existe, pero formato, traducción, plausibilidad o asset generan duda.
- `MISSING`: no aparece en la ficha revisada.
- `CONTRADICTORY`: entra en conflicto con el nombre, otro campo/página o el propio contenido.
- `NEEDS_CLIENT_VALIDATION`: solo cliente/fuente oficial local puede confirmar vigencia, precio, versión o derechos.

## Inventario de páginas

| Grupo                               | Páginas observadas                                                 | Estado                                           |
| ----------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------ |
| Home                                | `/`                                                                | Activa; contenido mínimo basado en slider        |
| Catálogos                           | `/categoria-motocicletas/`, `/categorias-atv/`, `/categoria-side/` | Activos; organización por cilindrada             |
| Institucional                       | `/about-us/`                                                       | Activa; claims sin fecha/fuente                  |
| Red                                 | `/service/`                                                        | 10 ubicaciones; mezcla service/distribuidor      |
| Contacto                            | `/contacto/`                                                       | Activa; formulario genérico                      |
| Editorial                           | `/category/noticias/`, `/category/fancfmotouy/`                    | Escaso/desactualizado; validar vigencia          |
| Placeholders/legacy                 | `/proximamente/`, `/shop-2/`                                       | No deberían integrar IA futura sin propósito     |
| Productos enlazados                 | 15 motos, 7 ATV, 5 SxS                                             | 27 entradas visibles en índices                  |
| Productos no enlazados descubiertos | CFORCE 450L, UFORCE 800                                            | Indexables pero ausentes del índice de categoría |

## Inventario preliminar de productos

Campos comunes en casi todas las fichas: descripción, alguna imagen y especificaciones están `VERIFIED` como **presentes**; precio está `MISSING`; vigencia y versión/año son `NEEDS_CLIENT_VALIDATION`. La tabla destaca excepciones y evita repetir esos estados universales.

| Categoría  | Nombre publicado           | Slug/URL                   | Familia        | Cilindrada publicada | Precio  | Estado / notas                                                            |
| ---------- | -------------------------- | -------------------------- | -------------- | -------------------: | ------- | ------------------------------------------------------------------------- |
| Moto       | 150NK                      | `/150nk/`                  | NK             |             149.5 cc | MISSING | Imágenes/alt CFORCE: CONTRADICTORY                                        |
| Moto       | 250NK                      | `/250nk/`                  | NK             |               249 cc | MISSING | “4 valores”, assets CFORCE: SUSPICIOUS/CONTRADICTORY                      |
| Moto       | 300SR                      | `/300sr/`                  | SR             |             249.2 cc | MISSING | Nombre 300 vs 249.2 requiere validación; assets CFORCE                    |
| Moto       | 300NK                      | `/300nk/`                  | NK             |              Present | MISSING | NEEDS_CLIENT_VALIDATION                                                   |
| Moto       | 400NK                      | `/400nk/`                  | NK             |              Present | MISSING | NEEDS_CLIENT_VALIDATION                                                   |
| Moto       | 400GT                      | `/400gt/`                  | GT             |              Present | MISSING | Vigencia/familia futura a validar                                         |
| Moto       | 450SR                      | `/450sr/`                  | SR/Racing      |               450 cc | MISSING | Compresión `11.1:5`; hero/assets CFORCE; datos SUSPICIOUS                 |
| Moto       | 650MT                      | `/650mt-4/`                | MT/Adventure   |              Present | MISSING | Slug legacy; vigencia a validar                                           |
| Moto       | 650NK                      | `/650nk/`                  | NK             |              Present | MISSING | NEEDS_CLIENT_VALIDATION                                                   |
| Moto       | 650GT                      | `/650gt/`                  | GT             |              Present | MISSING | NEEDS_CLIENT_VALIDATION                                                   |
| Moto       | 650TRG                     | `/650trg/`                 | TR-G/GT?       |              Present | MISSING | Familia/nombre requieren cliente                                          |
| Moto       | 700CL-X Heritage           | `/700cl-x-heritage/`       | CL-X/Heritage  |               693 cc | MISSING | Frenos “ABS y CBS” y assets CFORCE: SUSPICIOUS                            |
| Moto       | 700CL-X Sport              | `/700cl-x-sport-6/`        | CL-X/Sport     |              Present | MISSING | Slug legacy; vigencia a validar                                           |
| Moto       | 800MT Touring              | `/800mt-touring/`          | MT/Adventure   |               799 cc | MISSING | Suspensión contiene dato de ABS: CONTRADICTORY                            |
| Moto       | 800MT Sport                | `/800mt-sport/`            | MT/Adventure   |              Present | MISSING | NEEDS_CLIENT_VALIDATION                                                   |
| ATV        | CFORCE 450S                | `/cforce-450s/`            | CFORCE         |           **495 cc** | MISSING | Nombre/categoría 400cc vs 495; transmisión `CTV`; peso 360 kg: SUSPICIOUS |
| ATV        | CFORCE 520L                | `/cforce-520l/`            | CFORCE         |               495 cc | MISSING | Torque 46 Nm vs familia; imágenes CFORCE450: SUSPICIOUS                   |
| ATV        | CFORCE 625 Touring         | `/cforce-625-touring/`     | CFORCE         |               580 cc | MISSING | `150 kg kg`, imágenes ajenas: SUSPICIOUS                                  |
| ATV        | CFORCE 625                 | `/fuerza-625`              | CFORCE         |                    — | MISSING | URL traducida/cache miss; campos NEEDS_CLIENT_VALIDATION                  |
| ATV        | CFORCE 850 XC              | `/cforce-850-xc/`          | CFORCE         |               800 cc | MISSING | Copy dice 63 CV; tabla 64 HP: CONTRADICTORY                               |
| ATV        | CFORCE 1000 Overland       | `/cforce-1000-por-tierra/` | CFORCE         |               963 cc | MISSING | Copy 75 HP/79 Nm; tabla 79 HP/81 Nm: CONTRADICTORY                        |
| ATV        | CFORCE 1000                | `/cforce-1000/`            | CFORCE         |              Present | MISSING | NEEDS_CLIENT_VALIDATION                                                   |
| SxS        | ZFORCE 550 EX              | `/zforce-550-ex/`          | ZFORCE/Sport   |              Present | MISSING | Vigencia a validar                                                        |
| SxS        | UFORCE 600                 | `/uforce-600/`             | UFORCE/Utility |               580 cc | MISSING | “monocilíndrico…8 válvulas”, `BOSCH EF`: SUSPICIOUS                       |
| SxS        | UFORCE 1000 XL             | `/uforce-1000-xl/`         | UFORCE/Utility |              Present | MISSING | NEEDS_CLIENT_VALIDATION                                                   |
| SxS        | UFORCE 1000                | `/uforce-1000/`            | UFORCE/Utility |              Present | MISSING | NEEDS_CLIENT_VALIDATION                                                   |
| SxS        | ZFORCE 1000 Sport          | `/zforce-1000-sport/`      | ZFORCE/Sport   |               963 cc | MISSING | `80 kW`, “Tuerca máxima”, imágenes CFORCE: SUSPICIOUS                     |
| ATV oculto | CFORCE 450L / heading 450S | `/cforce-450l/`            | CFORCE         |               400 cc | MISSING | Nombre CONTRADICTORY; no listado; validar si activo                       |
| SxS oculto | UFORCE 800                 | `/uforce-800/`             | UFORCE/Utility |           **400 cc** | MISSING | Especificaciones copian CFORCE 450L: CONTRADICTORY/CRITICAL               |

### Cobertura de campos por producto

Esta matriz marca el estado de **cada campo solicitado**. Códigos: `V` VERIFIED (presencia/coherencia interna), `P` PRESENT_BUT_SUSPICIOUS, `M` MISSING, `C` CONTRADICTORY, `N` NEEDS_CLIENT_VALIDATION. `D/F` separa descripción y features; `Cat/Fam` separa categoría/familia cuando el nombre permite una asignación inequívoca. URL completa = `https://cfmotouruguay.com` + slug.

| Producto             | Nombre | Slug | Cat/Fam |  CC | Pot. | Torque | Peso | Precio | Colores | Imágenes | D/F | Specs | URL |
| -------------------- | -----: | ---: | ------: | --: | ---: | -----: | ---: | -----: | ------: | -------: | --: | ----: | --: |
| 150NK                |      V |    V |     V/V |   V |    V |      V |    V |      M |       V |        C | V/P |     P |   V |
| 250NK                |      V |    V |     V/V |   V |    V |      V |    V |      M |       V |        C | V/P |     P |   V |
| 300SR                |      V |    V |     V/V |   P |    V |      V |    V |      M |       M |        C | V/P |     P |   V |
| 300NK                |      V |    V |     V/V |   N |    N |      N |    N |      M |       N |        P | P/N |     P |   V |
| 400NK                |      V |    V |     V/V |   N |    N |      N |    N |      M |       N |        P | P/N |     P |   V |
| 400GT                |      V |    V |     V/N |   N |    N |      N |    N |      M |       N |        P | P/N |     P |   V |
| 450SR                |      V |    V |     V/V |   V |    P |      V |    V |      M |       P |        C | P/P |     P |   V |
| 650MT                |      V |    P |     V/V |   N |    N |      N |    N |      M |       N |        P | P/N |     P |   V |
| 650NK                |      V |    V |     V/V |   N |    N |      N |    N |      M |       N |        P | P/N |     P |   V |
| 650GT                |      V |    V |     V/N |   N |    N |      N |    N |      M |       N |        P | P/N |     P |   V |
| 650TRG               |      V |    V |     V/N |   N |    N |      N |    N |      M |       N |        P | P/N |     P |   V |
| 700CL-X Heritage     |      V |    V |     V/V |   V |    V |      V |    V |      M |       M |        C | P/V |     P |   V |
| 700CL-X Sport        |      V |    P |     V/V |   N |    N |      N |    N |      M |       N |        P | P/N |     P |   V |
| 800MT Touring        |      V |    V |     V/V |   V |    V |      V |    V |      M |       V |        P | P/V |     C |   V |
| 800MT Sport          |      V |    V |     V/V |   N |    N |      N |    N |      M |       N |        P | P/N |     P |   V |
| CFORCE 450S          |      V |    V |     V/V |   C |    M |      V |    P |      M |       M |        V | V/V |     P |   V |
| CFORCE 520L          |      V |    V |     V/V |   V |    P |      P |    V |      M |       M |        P | V/V |     P |   V |
| CFORCE 625 Touring   |      V |    V |     V/V |   V |    V |      V |    P |      M |       M |        C | V/V |     P |   V |
| CFORCE 625           |      V |    P |     V/V |   N |    N |      N |    N |      M |       N |        N | N/N |     N |   P |
| CFORCE 850 XC        |      V |    V |     V/V |   V |    C |      V |    P |      M |       M |        C | P/V |     P |   V |
| CFORCE 1000 Overland |      V |    P |     V/V |   V |    C |      C |    V |      M |       M |        V | P/V |     C |   V |
| CFORCE 1000          |      V |    V |     V/V |   N |    N |      N |    N |      M |       N |        V | P/N |     P |   V |
| ZFORCE 550 EX        |      V |    V |     V/V |   N |    N |      N |    N |      M |       N |        P | P/N |     P |   V |
| UFORCE 600           |      V |    V |     V/V |   V |    V |      V |    V |      M |       M |        C | P/V |     P |   V |
| UFORCE 1000 XL       |      V |    V |     V/V |   N |    N |      N |    N |      M |       N |        P | P/N |     P |   V |
| UFORCE 1000          |      V |    V |     V/V |   N |    N |      N |    N |      M |       N |        P | P/N |     P |   V |
| ZFORCE 1000 Sport    |      V |    V |     V/V |   V |    P |      P |    V |      M |       M |        C | P/V |     P |   V |
| CFORCE 450L oculto   |      C |    V |     V/V |   P |    P |      P |    P |      M |       V |        P | V/P |     P |   V |
| UFORCE 800 oculto    |      V |    V |     V/V |   C |    C |      C |    C |      M |       C |        C | P/C |     C |   V |

`N` no significa que el campo no exista necesariamente: significa que la auditoría pública no pudo considerarlo fiable sin ampliar el acceso/fuente. La matriz es un registro de confianza, no una ficha de producto final.

## Seis modelos propuestos para demo

| Modelo            | Publicación actual                      | Campos clave observados                                                                                  | Resultado                                                                    |
| ----------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 450SR             | Listado                                 | 450 cc; 50 HP; 39 Nm; 168 kg; asiento 795 mm; ABS mencionado; TFT/Bluetooth en copy; Zircon/Nebula Black | Candidato válido tras corregir assets, compresión y confirmar versión local  |
| 800MT Touring     | Listado                                 | 799 cc; 95 HP; 75 Nm; 231 kg; asiento 825 mm; 19 L; TFT 7”; ABS curva                                    | Candidato válido; corregir suspensión y confirmar equipamiento local         |
| 700CL-X Heritage  | Listado                                 | 693 cc; 74 HP; 68 Nm; 193 kg; asiento 800 mm; 13.5 L                                                     | Candidato válido sujeto a vigencia y validación de frenos/colores/assets     |
| CFORCE 450L       | URL existente, no listado; heading 450S | 400 cc; 20.7 kW; 31.1 Nm; 382 kg; 14 L; colores presentes                                                | **Bloqueado por identidad/vigencia**, no sustituir por 450S automáticamente  |
| ZFORCE 1000 Sport | Listado                                 | 963 cc; potencia publicada 80 kW; 78 Nm; 690 kg; 36.5 L                                                  | Candidato válido sujeto a auditoría técnica y assets                         |
| UFORCE 800        | URL existente, no listado               | Copy UFORCE 800; tabla de 400 cc/CFORCE                                                                  | **Bloqueado por datos incorrectos y vigencia**, no sustituir automáticamente |

## Matriz de campos para la demo

| Campo                  | 450SR                   | 800MT T.                | 700CL-X H.              | CFORCE 450L             | ZFORCE 1000 S.          | UFORCE 800              |
| ---------------------- | ----------------------- | ----------------------- | ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| Nombre/slug            | VERIFIED                | VERIFIED                | VERIFIED                | CONTRADICTORY           | VERIFIED                | VERIFIED, no listado    |
| Categoría/familia      | VERIFIED                | VERIFIED                | VERIFIED                | NEEDS_CLIENT_VALIDATION | VERIFIED                | VERIFIED                |
| Cilindrada             | VERIFIED                | VERIFIED                | VERIFIED                | PRESENT_BUT_SUSPICIOUS  | VERIFIED                | CONTRADICTORY           |
| Potencia               | PRESENT_BUT_SUSPICIOUS  | VERIFIED                | VERIFIED                | PRESENT_BUT_SUSPICIOUS  | PRESENT_BUT_SUSPICIOUS  | CONTRADICTORY           |
| Torque                 | VERIFIED                | VERIFIED                | VERIFIED                | PRESENT_BUT_SUSPICIOUS  | PRESENT_BUT_SUSPICIOUS  | CONTRADICTORY           |
| Peso                   | VERIFIED                | VERIFIED                | VERIFIED                | PRESENT_BUT_SUSPICIOUS  | VERIFIED                | CONTRADICTORY           |
| Precio                 | MISSING                 | MISSING                 | MISSING                 | MISSING                 | MISSING                 | MISSING                 |
| Colores                | PRESENT_BUT_SUSPICIOUS  | VERIFIED                | MISSING                 | PRESENT_BUT_SUSPICIOUS  | MISSING                 | CONTRADICTORY           |
| Imágenes               | CONTRADICTORY           | PRESENT                 | CONTRADICTORY           | PRESENT_BUT_SUSPICIOUS  | CONTRADICTORY           | CONTRADICTORY           |
| Descripción/features   | PRESENT_BUT_SUSPICIOUS  | PRESENT_BUT_SUSPICIOUS  | PRESENT_BUT_SUSPICIOUS  | PRESENT                 | PRESENT_BUT_SUSPICIOUS  | CONTRADICTORY           |
| Especificaciones       | PRESENT_BUT_SUSPICIOUS  | CONTRADICTORY           | PRESENT_BUT_SUSPICIOUS  | PRESENT_BUT_SUSPICIOUS  | PRESENT_BUT_SUSPICIOUS  | CONTRADICTORY           |
| Vigencia/versión local | NEEDS_CLIENT_VALIDATION | NEEDS_CLIENT_VALIDATION | NEEDS_CLIENT_VALIDATION | NEEDS_CLIENT_VALIDATION | NEEDS_CLIENT_VALIDATION | NEEDS_CLIENT_VALIDATION |

## Dealer/service preliminar

La página de service lista: Credibikerss, Motos Punta, Cafe Race, Yelton Motos, Multimotos Hogar, Francisco Automotores, Allroad, Bikeup, MYM y Automercado. Presenta dirección y teléfono, pero faltan email, WhatsApp explícito, horarios por local, coordenadas, departamento estructurado, tipos/servicios y estado de vigencia. MYM reutiliza imagen de Multimotos Hogar y el teléfono de Bikeup/MYM es similar; validar.

## Contenido reutilizable

- Nombres/familias y parte de los textos locales, tras edición.
- Fotografías correctas con derechos y versión confirmados.
- Especificaciones verificadas contra ficha técnica oficial/local.
- Historia local, red de service y claims con fuente/fecha.
- Enlaces sociales oficiales.

## Contenido dudoso, obsoleto o duplicado

- Assets genéricos `20211230_CFORCE450...` reutilizados en múltiples productos.
- Disclaimers y copyright internos 2018/2022/2023 junto al copyright 2026.
- MotoGP 2022 como única noticia visible.
- Páginas `shop-2`, `proximamente`, slugs con sufijo numérico o traducción automática.
- Datos de UFORCE 800 duplicados desde CFORCE 450L.
- CFORCE 450L/450S y posibles variantes 625 con identidad ambigua.

## Requiere validación del cliente

Fuente maestra de catálogo, año/versión por unidad, modelos activos/descontinuados, precios/moneda/impuestos, disponibilidad, colores locales, garantía, especificaciones homologadas, red y servicios, ownership editorial, derechos de imágenes/copy, claims institucionales y tiempos/workflows de lead. Ver `OPEN_QUESTIONS.md`.

## Fuentes

Inventarios y fichas del [sitio local](https://cfmotouruguay.com/), incluida la [tienda residual](https://cfmotouruguay.com/shop-2/). CFMOTO Global se usa solo como contraste y no para sobrescribir datos locales sin aprobación.
