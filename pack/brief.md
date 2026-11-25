Archivo: brief.md
# Brief de la marca

> **Estudiante:** este archivo lo genera la IA (fase 2) a partir de tu plan aprobado. Revísalo antes de usar Cline: todo lo que dice aquí es lo que se va a construir.
> Si algo dice `POR DEFINIR`, decídelo tú y pídele a la IA que lo actualice.
>
> **Agente:** este brief es la única fuente de decisiones de diseño y contenido.
> Si un campo que necesitas dice `POR DEFINIR` o está vacío, **detente y pregunta**: no inventes, no busques en otros archivos, no supongas.
> Copia los textos tal cual están escritos (no los reescribas ni "mejores").

## 1. Marca

| Campo | Decisión |
| --- | --- |
| Nombre de la marca | FENDER |
| Tipo | Real |
| Qué hace, en una frase | Fabricación y distribución de guitarras, bajos y amplificadores legendarios. |
| Para quién es (público) | Músicos, guitarristas y apasionados del rock y la música en vivo de todo el mundo. |
| Personalidad (3 adjetivos) | Legendaria, innovadora, cercana. |
| Eslogan | Make History con Fender. |
| Descripción para Google (máx. 155 caracteres) | Descubre el catálogo oficial de Fender, guitarras icónicas, artistas y la historia que definió generaciones de la música. |

## 2. Referencias

Qué tomar de cada sitio de referencia (las capturas están en el plan, `pack/plan.pdf`).

| Ref | Sitio | Detalle que tomamos | Dónde se aplica |
| --- | --- | --- | --- |
| 1a | Gibson.com | Estructura de navegación en escritorio y móvil como referencia visual | Menú y encabezado (Header) |
| 1b | Taylor Guitars | Presentación de productos con jerarquía clara y estética premium | Página Inicio, Sección Tarjetas de catálogo |
| 2a | PRS Guitars | Sección hero con enfoque editorial y narrativo de marca | Página Inicio, Sección Hero Editorial |
| 2b | Martin Guitars | Narrativa editorial que guía la mirada en forma de Z, alternando contenido visual e histórico con contenido textual | Página Inicio, Sección Storytelling Z-pattern |

## 3. Paleta de color

Exactamente estos 7 colores, en hex (`#1a1a1a`). No se agregan otros.
`npm run verificar` exige contraste 4.5:1 o más en: `texto` sobre `fondo` y `superficie`, `texto-suave` sobre `fondo`, `marca-contraste` sobre `marca`.

| Token | Hex | Para qué se usa |
| --- | --- | --- |
| `fondo` | `#141210` | Fondo de toda la página |
| `superficie` | `#1F1C18` | Tarjetas, bloques destacados |
| `texto` | `#F5F2E8` | Texto principal |
| `texto-suave` | `#CA8EB2` | Texto secundario, etiquetas |
| `borde` | `#3D352E` | Líneas y bordes |
| `marca` | `#D9381E` | Color principal: botones, resaltados |
| `marca-contraste` | `#FFFFFF` | Texto que va encima de `marca` |

## 4. Tipografías

Archivos (`.woff2`, `.woff`, `.ttf` u `.otf`) en `pack/fuentes/`. Solo fuentes con licencia libre.

| Uso | Nombre de la fuente | Archivo(s) en `pack/fuentes/` | Grosores |
| --- | --- | --- | --- |
| Títulos | Montserrat | `pack/fuentes/montserrat-bold.woff2` | 700 |
| Texto | Montserrat | `pack/fuentes/montserrat-regular.woff2` | 400 |

## 5. Forma

| Decisión | Opciones | Decisión |
| --- | --- | --- |
| Esquinas (`radio`) | `0px` recto · `4px` · `8px` · `16px` · `9999px` píldora | `4px` |
| Grosor de borde | `0px` sin borde · `1px` · `2px` · `3px` | `1px` |
| Sombra | `none` · suave `0 4px 12px rgb(0 0 0 / 0.12)` · dura `4px 4px 0 0 <hex de borde>` | suave `0 4px 12px rgb(0 0 0 / 0.12)` |
| Ancho máximo del contenido | `max-w-3xl` estrecho · `max-w-5xl` medio · `max-w-7xl` ancho | `max-w-7xl` |

## 6. Animación

| Decisión | Opciones | Decisión |
| --- | --- | --- |
| Intensidad | `ninguna` · `sutil` · `marcada` | `sutil` |

## 7. Logo y menú

| Decisión | Opciones | Decisión |
| --- | --- | --- |
| Logo (archivo en `pack/logos/` + texto alternativo) | o "sin logo, solo nombre" | `pack/logos/fender-logo.svg`, alt: "Fender" |
| Tipo de menú | `barra` (enlaces siempre visibles) · `desplegable` (botón "Menú" en celular y tablet, barra en computadora) · `desplegable-siempre` (botón en todas las pantallas) | `desplegable` |
| Encabezado fijo arriba al bajar | `sí` · `no` | `sí` |

## 8. Mapa del sitio

Una fila por página. La primera es Inicio.

| Página | Ruta | Archivo | Texto en el menú | Título de la pestaña |
| --- | --- | --- | --- | --- |
| Inicio | `/` | `src/pages/index.astro` | Inicio | Inicio \| Fender |
| Productos | `/productos` | `src/pages/productos.astro` | PRODUCTOS | Productos \| Fender |
| Artistas | `/artistas` | `src/pages/artistas.astro` | ARTISTAS | Artistas \| Fender |
| Historia | `/historia` | `src/pages/historia.astro` | HISTORIA | Historia \| Fender |
| Soporte | `/soporte` | `src/pages/soporte.astro` | SOPORTE | Soporte \| Fender |

## 9. Contenido por página

Una sub-sección por página del mapa, y dentro sus secciones en orden de arriba hacia abajo.
La **disposición** describe el boceto en palabras (el agente no ve imágenes).
La primera sección de Inicio lleva el título principal (`<h1>`); en las demás páginas, la primera sección también lleva el `<h1>` de esa página.

### Página: Inicio (`/`)

#### Sección: Hero Editorial

- **id:** `hero-editorial`
- **Título:** A Higher Standard
- **Texto:** Instruments built for a life of music. Explore the craft, the people and the stories behind every guitar.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"): ninguno
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/hero-guitarra.jpg` + texto alternativo: Guitarra eléctrica en primer plano
- **Botones** (texto → destino, o "ninguno"): EXPLORE → → /productos
- **Disposición** (celular / computadora): celular: elementos apilados verticalmente con título, texto descriptivo, botón de acción e imagen; computadora: distribución horizontal 50/50 con texto a la izquierda (título en gran formato, texto descriptivo y botón con flecha) y fotografía de guitarra en primer plano a la derecha.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): 2a

#### Sección: Tarjetas de catálogo

- **id:** `tarjetas-catalogo`
- **Título:** Modelos icónicos
- **Texto:** Explora guitarras y bajos diseñados para definir tu sonido en cada escenario.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - PLAYER TELECASTER®: Electric Guitar, $799.99, botón VER DETALLES
  - PLAYER STRATOCASTER®: Electric Guitar, $799.99, botón VER DETALLES
  - PLAYER PRECISION BASS®: Electric Bass, $849.99, botón VER DETALLES
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"):
  - `pack/imagenes/telecaster.jpg` + texto alternativo: Player Telecaster
  - `pack/imagenes/stratocaster.jpg` + texto alternativo: Player Stratocaster
  - `pack/imagenes/precision-bass.jpg` + texto alternativo: Player Precision Bass
- **Botones** (texto → destino, o "ninguno"):
  - VER DETALLES → /productos
  - VER DETALLES → /productos
  - VER DETALLES → /productos
- **Disposición** (celular / computadora): celular: tarjetas de producto apiladas verticalmente en una sola columna con imagen, nombre, subtítulo, precio y botón de ancho completo; computadora: cuadrícula de 3 columnas horizontales de tarjetas sobre fondo de superficie oscura (`#1F1C18`) con borde de 1px (`#3D352E`) y esquinas redondeadas de 4px, con imagen de guitarra en parte superior, nombre en blanco, tipo de instrumento en texto suave, precio destacado en color marca (`#D9381E`) y botón rojo al pie.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): 1b

#### Sección: Storytelling Z-pattern

- **id:** `storytelling-z-pattern`
- **Título:** Nuestra Historia
- **Texto:** Más de medio siglo creando los instrumentos que transformaron la historia de la música moderna.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - 1833: El inicio de un legado. Una tradición de artesanía que transformó la música para siempre. Enlace: VER HISTORIA →
  - 1959: Un sonido que definió generaciones. Instrumentos que marcaron la música moderna. Enlace: VER MÁS →
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"):
  - `pack/imagenes/historia-1833.jpg` + texto alternativo: Artesano construyendo guitarra en taller
  - `pack/imagenes/historia-1959.jpg` + texto alternativo: Músico tocando guitarra en concierto
- **Botones** (texto → destino, o "ninguno"):
  - VER HISTORIA → → /historia
  - VER MÁS → → /artistas
- **Disposición** (celular / computadora): celular: bloques apilados verticalmente en columna única; computadora: patrón en Z compuesto por dos filas horizontales de proporción 50/50: primera fila con bloque de texto a la izquierda e imagen a la derecha; segunda fila con imagen a la izquierda y bloque de texto a la derecha, con bordes redondeados de 4px.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): 2b

### Página: Productos (`/productos`)

#### Sección: Catálogo de Instrumentos

- **id:** `catalogo-instrumentos`
- **Título:** Catálogo de Instrumentos Fender
- **Texto:** Conoce la línea completa de guitarras eléctricas, bajos de precisión y amplificadores legendarios creados para guitarristas de todo el mundo.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Guitarras Eléctricas: Modelos legendarios Stratocaster, Telecaster y Jazzmaster con acabados premium y pastillas de alta fidelidad.
  - Bajos Eléctricos: Precision Bass y Jazz Bass con ergonomía avanzada y frecuencias graves contundentes.
  - Amplificadores y Efectos: Tono valvular clásico y tecnología de modelado para el músico contemporáneo.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/telecaster.jpg` + texto alternativo: Colección oficial de guitarras y bajos Fender
- **Botones** (texto → destino, o "ninguno"):
  - Ver especificaciones técnicas → /soporte
- **Disposición** (celular / computadora): celular: título, texto y tarjetas descriptivas apiladas en columna vertical con botón de ancho completo; computadora: cabecera centrada con cuadrícula de 3 columnas para categorías de producto y botón de soporte al pie.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): 1b

### Página: Artistas (`/artistas`)

#### Sección: Artistas y Leyendas

- **id:** `artistas-leyendas`
- **Título:** Artistas de la Familia Fender
- **Texto:** Desde los pioneros del rock hasta los creadores contemporáneos que continúan escribiendo la historia de la música viva.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Leyendas del Escenario: Íconos globales que adoptaron Fender como extensión natural de su voz musical.
  - Artistas Contemporáneos: Nuevas generaciones explorando géneros híbridos y sonidos vanguardistas.
  - Ediciones Signature: Instrumentos personalizados según las especificaciones exactas de los artistas más respetados.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/historia-1959.jpg` + texto alternativo: Guitarrista tocando en directo ante el público
- **Botones** (texto → destino, o "ninguno"):
  - Ver instrumentos de artistas → /productos
- **Disposición** (celular / computadora): celular: imagen destacada superior y contenido apilado con lista de categorías; computadora: estructura a 2 columnas con panel narrativo y lista a la izquierda, e imagen en vivo a la derecha.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): 2a

### Página: Historia (`/historia`)

#### Sección: Legado e Innovación

- **id:** `legado-innovacion`
- **Título:** Historia y Evolución del Tono
- **Texto:** Una trayectoria marcada por la constante búsqueda de innovación acústica y electrónica que transformó para siempre los escenarios mundiales.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Orígenes Artesanales: La visión fundacional enfocada en instrumentos fiables, accesibles y fáciles de reparar.
  - La Revolución Eléctrica: El nacimiento de cuerpos macizos que facilitaron amplificar el sonido sin acoples indeseados.
  - Presente y Futuro: Técnicas de manufactura moderna que preservan la pureza tímbrica y el tacto original.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/historia-1833.jpg` + texto alternativo: Taller histórico con instrumentos en proceso de calibración
- **Botones** (texto → destino, o "ninguno"):
  - Explorar modelos históricos → /productos
- **Disposición** (celular / computadora): celular: secuencia vertical de hitos históricos e imagen complementaria; computadora: diseño editorial estructurado con fotografía histórica a la izquierda y línea cronológica explicativa a la derecha.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): 2b

### Página: Soporte (`/soporte`)

#### Sección: Centro de Soporte y Servicio

- **id:** `centro-soporte-servicio`
- **Título:** Soporte Oficial y Asistencia Técnica
- **Texto:** Recursos autorizados para registro de instrumentos, guías de calibración, diagramas técnicos y asistencia directa.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Registro de Garantía: Valida tu instrumento con su número de serie y accede a cobertura de fabricante.
  - Manuales y Diagramas: Documentación técnica completa sobre cableado, pastillas y mantenimiento del mástil.
  - Red de Asistencia: Centros autorizados para ajustes de luthería y reemplazo de componentes originales.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/hero-guitarra.jpg` + texto alternativo: Revisión técnica y ajuste de guitarra eléctrica
- **Botones** (texto → destino, o "ninguno"):
  - Escribir a soporte → mailto:contacto@fender-tribute.com
- **Disposición** (celular / computadora): celular: tarjeta informativa y bloques de soporte apilados con botón de contacto; computadora: cuadrícula de 3 columnas de opciones de asistencia con bloque de contacto al pie.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): 1a

## 10. Contacto y pie de página

| Campo | Decisión |
| --- | --- |
| Correo | contacto@fender-tribute.com |
| Redes (nombre → enlace) | Instagram → https://instagram.com/fender, YouTube → https://youtube.com/@fender |
| Texto del pie | © 2026 Fender Musical Instruments Corporation. Todos los derechos reservados. Logo Fender al 80% de opacidad. |