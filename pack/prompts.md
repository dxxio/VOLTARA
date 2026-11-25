# Prompts

Este archivo se reemplaza por el `prompts.md` de tu pack.
Archivo: prompts.md
# Prompts

## Prompt 01 · Global · Identidad

**Tarea:** Configurar tokens de color oficiales, tipografía Montserrat (@font-face), variables de forma, sombras y animación sutil en los estilos globales y configuración.
**Datos:** brief, secciones 3 (Paleta de color), 4 (Tipografías), 5 (Forma) y 6 (Animación).
**Pega estos archivos (versión actual, con su ruta):**
- `src/styles/global.css`
- `src/components/ui/Contenedor.astro`
- `src/datos/sitio.ts`
**Devuélveme completos:**
- `src/styles/global.css` (REEMPLAZA)
- `src/components/ui/Contenedor.astro` (REEMPLAZA)
- `src/datos/sitio.ts` (REEMPLAZA)
**Borrar:** nada
**Terminado cuando:**
- Los 7 tokens de color oficiales (`fondo: #141210`, `superficie: #1F1C18`, `texto: #F5F2E8`, `texto-suave: #CA8EB2`, `borde: #3D352E`, `marca: #D9381E`, `marca-contraste: #FFFFFF`) están declarados y accesibles.
- Las fuentes Montserrat (regular 400 y bold 700) están configuradas con `@font-face` desde `pack/fuentes/`.
- El radio de bordes de 4px, grosor de borde de 1px, sombra suave de `0 4px 12px rgb(0 0 0 / 0.12)`, ancho máximo de 1280px (`max-w-7xl`) y transición sutil (0.3s) están aplicados.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 02 · Global · Marco del sitio y navegación

**Tarea:** Configurar datos generales del sitio, encabezado fijo (sticky) con logo oficial Fender, menú responsive con todas las páginas, crear páginas vacías para cada ruta y remover secciones de ejemplo.
**Datos:** brief, secciones 1 (Marca), 7 (Logo y menú), 8 (Mapa del sitio) y 10 (Contacto y pie de página).
**Pega estos archivos (versión actual, con su ruta):**
- `src/datos/sitio.ts`
- `src/pages/index.astro`
- `src/components/Encabezado.astro`
**Devuélveme completos:**
- `src/datos/sitio.ts` (REEMPLAZA)
- `src/pages/index.astro` (REEMPLAZA)
- `src/components/Encabezado.astro` (REEMPLAZA)
- `src/pages/productos.astro` (NUEVO)
- `src/pages/artistas.astro` (NUEVO)
- `src/pages/historia.astro` (NUEVO)
- `src/pages/soporte.astro` (NUEVO)
**Borrar:**
- `src/components/inicio/Portada.astro`
- `src/components/inicio/Comprobacion.astro`
- `src/components/inicio/Pasos.astro`
**Terminado cuando:**
- El logo oficial `pack/logos/fender-logo.svg` se muestra en el header fijo a 32px de alto y en el footer con 80% de opacidad.
- El menú muestra enlaces a PRODUCTOS, ARTISTAS, HISTORIA y SOPORTE en escritorio (>768px) y menú desplegable en móvil (<768px).
- Todas las rutas (`/productos`, `/artistas`, `/historia`, `/soporte`) cargan con sus respectivos títulos de pestaña.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 03 · Inicio · Sección Hero Editorial

**Tarea:** Crear el componente de sección hero con enfoque editorial y narrativo e integrarlo en la página de inicio.
**Datos:** brief, sección 9, Página Inicio, Sección Hero Editorial.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/index.astro`
**Devuélveme completos:**
- `src/components/inicio/HeroEditorial.astro` (NUEVO)
- `src/pages/index.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: elementos apilados verticalmente con título, texto descriptivo, botón de acción e imagen; computadora: distribución horizontal 50/50 con texto a la izquierda (título en gran formato, texto descriptivo y botón con flecha) y fotografía de guitarra en primer plano a la derecha.
**Referencia:** 2a (Sección hero con enfoque editorial y narrativo de marca, basada en PRS Guitars).
**Terminado cuando:**
- Se muestra el `<h1>` "A Higher Standard", el párrafo descriptivo y el botón interactivo "EXPLORE →" que enlaza a `/productos`.
- La imagen `pack/imagenes/hero-guitarra.jpg` carga correctamente con su texto alternativo "Guitarra eléctrica en primer plano".
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 04 · Inicio · Sección Tarjetas de catálogo

**Tarea:** Crear el componente de tarjetas de catálogo de productos destacados e integrarlo en la página de inicio.
**Datos:** brief, sección 9, Página Inicio, Sección Tarjetas de catálogo.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/index.astro`
**Devuélveme completos:**
- `src/components/inicio/TarjetasCatalogo.astro` (NUEVO)
- `src/pages/index.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: tarjetas de producto apiladas verticalmente en una sola columna con imagen, nombre, subtítulo, precio y botón de ancho completo; computadora: cuadrícula de 3 columnas horizontales de tarjetas sobre fondo de superficie oscura (`#1F1C18`) con borde de 1px (`#3D352E`) y esquinas redondeadas de 4px, con imagen de guitarra en parte superior, nombre en blanco, tipo de instrumento en texto suave, precio destacado en color marca (`#D9381E`) y botón rojo al pie.
**Referencia:** 1b (Presentación de productos con jerarquía clara y estética premium en tarjetas de catálogo, basada en Taylor Guitars).
**Terminado cuando:**
- Se visualizan las 3 tarjetas de productos: "PLAYER TELECASTER®" ($799.99), "PLAYER STRATOCASTER®" ($799.99) y "PLAYER PRECISION BASS®" ($849.99).
- Cada tarjeta contiene su botón rojo "VER DETALLES" enlazando a `/productos` y su imagen correspondiente con texto alternativo.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 05 · Inicio · Sección Storytelling Z-pattern

**Tarea:** Crear el componente de narrativa histórica en patrón Z e integrarlo en la página de inicio.
**Datos:** brief, sección 9, Página Inicio, Sección Storytelling Z-pattern.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/index.astro`
**Devuélveme completos:**
- `src/components/inicio/StorytellingZPattern.astro` (NUEVO)
- `src/pages/index.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: bloques apilados verticalmente en columna única; computadora: patrón en Z compuesto por dos filas horizontales de proporción 50/50: primera fila con bloque de texto a la izquierda e imagen a la derecha; segunda fila con imagen a la izquierda y bloque de texto a la derecha, con bordes redondeados de 4px.
**Referencia:** 2b (Narrativa editorial que guía la mirada en forma de Z, alternando contenido visual e histórico con contenido textual, basada en Martin Guitars).
**Terminado cuando:**
- Se presentan los dos bloques con los años destacados ("1833" y "1959"), títulos y textos correspondientes.
- Los botones "VER HISTORIA →" y "VER MÁS →" enlazan correctamente a `/historia` y `/artistas`.
- Las imágenes `pack/imagenes/historia-1833.jpg` y `pack/imagenes/historia-1959.jpg` alternan su posición en escritorio formando el patrón en Z.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 06 · Productos · Sección Catálogo de Instrumentos

**Tarea:** Crear el componente de catálogo de instrumentos e integrarlo en la página de productos.
**Datos:** brief, sección 9, Página Productos, Sección Catálogo de Instrumentos.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/productos.astro`
**Devuélveme completos:**
- `src/components/productos/CatalogoInstrumentos.astro` (NUEVO)
- `src/pages/productos.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: título, texto y tarjetas descriptivas apiladas en columna vertical con botón de ancho completo; computadora: cabecera centrada con cuadrícula de 3 columnas para categorías de producto y botón de soporte al pie.
**Referencia:** 1b (Presentación de productos con jerarquía clara y estética premium en tarjetas de catálogo, basada en Taylor Guitars).
**Terminado cuando:**
- La página muestra el `<h1>` "Catálogo de Instrumentos Fender", su descripción y las 3 categorías principales (Guitarras Eléctricas, Bajos Eléctricos, Amplificadores y Efectos).
- El botón "Ver especificaciones técnicas" enlaza a `/soporte`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 07 · Artistas · Sección Artistas y Leyendas

**Tarea:** Crear el componente editorial de artistas e integrarlo en la página de artistas.
**Datos:** brief, sección 9, Página Artistas, Sección Artistas y Leyendas.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/artistas.astro`
**Devuélveme completos:**
- `src/components/artistas/ArtistasLeyendas.astro` (NUEVO)
- `src/pages/artistas.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: imagen destacada superior y contenido apilado con lista de categorías; computadora: estructura a 2 columnas con panel narrativo y lista a la izquierda, e imagen en vivo a la derecha.
**Referencia:** 2a (Sección hero con enfoque editorial y narrativo de marca, basada en PRS Guitars).
**Terminado cuando:**
- Se muestra el `<h1>` "Artistas de la Familia Fender", la descripción y las 3 categorías de artistas (Leyendas del Escenario, Artistas Contemporáneos, Ediciones Signature).
- La imagen `pack/imagenes/historia-1959.jpg` se muestra correctamente con su texto alternativo y el botón enlaza a `/productos`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 08 · Historia · Sección Historia y Evolución del Tono

**Tarea:** Crear el componente cronológico de historia e integrarlo en la página de historia.
**Datos:** brief, sección 9, Página Historia, Sección Historia y Evolución del Tono.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/historia.astro`
**Devuélveme completos:**
- `src/components/historia/LegadoInnovacion.astro` (NUEVO)
- `src/pages/historia.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: secuencia vertical de hitos históricos e imagen complementaria; computadora: diseño editorial estructurado con fotografía histórica a la izquierda y línea cronológica explicativa a la derecha.
**Referencia:** 2b (Narrativa editorial que guía la mirada en forma de Z, alternando contenido visual e histórico con contenido textual, basada en Martin Guitars).
**Terminado cuando:**
- Se presenta el `<h1>` "Historia y Evolución del Tono" junto con los hitos cronológicos (Orígenes Artesanales, La Revolución Eléctrica, Presente y Futuro).
- La fotografía histórica `pack/imagenes/historia-1833.jpg` se visualiza con su texto alternativo y el botón enlaza a `/productos`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 09 · Soporte · Sección Centro de Soporte y Servicio

**Tarea:** Crear el componente de centro de asistencia técnica e integrarlo en la página de soporte.
**Datos:** brief, sección 9, Página Soporte, Sección Centro de Soporte y Servicio.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/soporte.astro`
**Devuélveme completos:**
- `src/components/soporte/CentroSoporteServicio.astro` (NUEVO)
- `src/pages/soporte.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: tarjeta informativa y