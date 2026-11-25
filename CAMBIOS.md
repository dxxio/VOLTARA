Bitácora de Cambios - Sitio Web Fender
Documento de registro técnico y seguimiento de versiones correspondiente al desarrollo del sitio web tributo a Fender, desarrollado con Astro y Tailwind CSS, estructurado según las fases de especificación, construcción por componentes y control de calidad institucional.
[Fase 1] Configuración Global, Identidad y Estructura Base (Prompts 01 y 02)
Objetivos y Alcance
Establecer los cimientos del sistema de diseño, configuración de tokens globales, tipografía corporativa y arquitectura de navegación del sitio web según los lineamientos del Brief de Marca.
Implementaciones Técnicas

1. Sistema de Diseño y Tokens Globales (src/styles/global.css)
Declaración de paleta de color oficial:
--fondo: #141210 (Espresso oscuro base para toda la interfaz).
--superficie: #1F1C18 (Superficie contenedora para tarjetas y módulos destacados).
--texto: #F5F2E8 (Texto principal marfil/crema de alta legibilidad).
--texto-suave: #CA8EB2 / #BFA997 (Texto secundario, descripciones y metadatos).
--borde: #3D352E / #453023 (Líneas divisorias y contornos estructurales).
--marca: #D9381E / #E11D1D (Rojo oficial Fender para acentos interactivos y CTAs).
--marca-contraste: #FFFFFF (Texto legible sobre elementos del color de marca).
Integración tipográfica: Configuración de la fuente Montserrat mediante reglas @font-face con soporte local en pack/fuentes/ (montserrat-regular.woff2, montserrat-bold.woff2) y respaldo optimizado en global.css para pesos 400, 700 y 900.
Definición de propiedades geométricas y transiciones:
Radios de borde adaptados a esquinas suaves (var(--radio-suave): 20px) y formato píldora (var(--radio-pildora): 9999px) para elementos interactivos.
Sombra difusa de elevación (0 4px 12px rgba(0, 0, 0, 0.12) / 0 10px 30px rgba(0, 0, 0, 0.4)).
Contenedor con ancho máximo restringido a 1200px / 1280px (max-w-7xl).
Animación sutil de transición (transition: all 0.25s ease-in-out).
2. Configuración Centralizada de Datos (src/datos/sitio.ts)

Creación de la interfaz tipada DatosSitio, EnlaceMenu y RedSocial.
Centralización de metadatos institucionales: nombre (FENDER), eslogan ("Make History con Fender"), descripción para indexación (SEO), correo oficial (contacto@fender-tribute.com) y copyright legal.
Configuración de la estructura del menú principal: Inicio (/), PRODUCTOS (/productos), ARTISTAS (/artistas), HISTORIA (/historia) y SOPORTE (/soporte).

3. Encabezado Fijo y Navegación Responsiva (src/components/Encabezado.astro)
Implementación de cabecera con posicionamiento fijo (sticky top-0) con efecto de desenfoque (backdrop-blur).
Integración del logotipo oficial de Fender vinculado a la ruta raíz /.
Menú de escritorio desplegado horizontalmente con indicadores visuales de página activa y transiciones de color en estado :hover.
Menú móvil interactivo con botón tipo hamburguesa accesible (aria-expanded, aria-controls), despliegue vertical de enlaces y área táctil mínima de 44x44 px.

4. Arquitectura de Rutas (src/pages/)
Limpieza de secciones temporales predeterminadas de la plantilla (Portada.astro, Comprobacion.astro, Pasos.astro).
Creación y enrutamiento modular de vistas base enlazadas a Layout.astro:
src/pages/index.astro (Vista principal).
src/pages/productos.astro (Catálogo de instrumentos).
src/pages/artistas.astro (Artistas y comunidad).
src/pages/historia.astro (Hitos y línea de tiempo).
src/pages/soporte.astro (Asistencia técnica y garantías).
[Fase 2] Estructuración Modular y Desarrollo de Páginas (Prompts 03 al 09)
Objetivos y Alcance
Construir y estilizar cada una de las páginas y componentes del sitio web aplicando las referencias visuales aprobadas (PRS Guitars, Taylor Guitars, Martin Guitars, Gibson.com), garantizando interactividad, jerarquía semántica y consistencia estética.
Implementaciones Técnicas

1. Página de Inicio (src/pages/index.astro)
Sección Hero Editorial (src/components/inicio/HeroEditorial.astro - Ref. PRS Guitars):
Maquetación simétrica a dos columnas (50/50 en escritorio y apilamiento vertical en móviles).
Jerarquía semántica con encabezado principal <h1> ("A Higher Standard"), párrafo narrativo y botón de llamado a la acción ("EXPLORAR CATÁLOGO") enlazado a /productos.
Integración de contenedor visual adaptado para la fotografía de primer plano (/imagenes/hero-guitarra.jpg) con insignias flotantes de especificación técnica.
Bloque métrico con datos clave de la marca (año de fundación 1946, +75 años de historia, 100% tono genuino).
Sección Tarjetas de Catálogo (src/components/inicio/TarjetasCatalogo.astro - Ref. Taylor Guitars):
Cuadrícula responsiva de tres columnas sobre fondo de superficie cálida con esquinas redondeadas.
Presentación de los 3 modelos insignia aprobados en el plan:
Player Telecaster® (Electric Guitar, $799.99, acabado Butterscotch Blonde).
Player Stratocaster® (Electric Guitar, $799.99, acabado Fiesta Red / Sunburst).
Player Precision Bass® (Electric Bass, $849.99, acabado Onyx Black).
Ranuras de imagen listas para telecaster.jpg, stratocaster.jpg y precision-bass.jpg.
Botones individuales interactivos "VER DETALLES" vinculados a /productos.
Sección Storytelling en Patrón Z (src/components/inicio/StorytellingZPattern.astro - Ref. Martin Guitars):
Narrativa editorial alterna en forma de Z:
Fila 1: Bloque textual a la izquierda (Año 1833, "El inicio de un legado") e ilustración/fotografía histórica a la derecha.
Fila 2: Fotografía de concierto a la izquierda y bloque textual a la derecha (Año 1959, "Un sonido que definió generaciones").
Enlaces de profundización "VER HISTORIA COMPLETA" (/historia) y "VER ARTISTAS" (/artistas).

2. Página de Productos (src/components/productos/CatalogoInstrumentos.astro y src/pages/productos.astro)
Cabecera de catálogo con <h1> ("Catálogo de Instrumentos Fender") y descripción oficial.
Barra de filtrado interactivo en tiempo real mediante JavaScript en el cliente para alternar categorías: Todos, Guitarras Eléctricas y Bajos.
Tarjetas de producto estructuradas con microdatos: serie, nombre del instrumento, descripción tonal, acabados, configuración de pastillas y precio.
Botones en formato píldora "VER ESPECIFICACIONES TÉCNICAS" dirigidos a /soporte.

3. Página de Artistas (src/components/artistas/ArtistasLeyendas.astro y src/pages/artistas.astro)
Módulo de galería de músicos icónicos con filtro de categorías (Todos los Artistas, Leyendas del Rock, Ediciones Signature).
Inclusión de figuras legendarias del instrumento con sus configuraciones sonoras:
Mark Knopfler (Dire Straits - 1961 Stratocaster® Fiesta Red, técnica de dedos).
Jon Bon Jovi & Richie Sambora (Bon Jovi - Custom Stratocasters & Telecasters, sonido de estadio).
David Gilmour (Pink Floyd - The Black Strat®).
Jimi Hendrix (The Experience - 1968 Stratocaster® Olympic White).
Stevie Ray Vaughan (Double Trouble - Stratocaster® "Number One" 1963).
Eric Clapton (Slowhand - Stratocaster® "Blackie").
Preparación de marcos visuales conectados a public/imagenes/artistas/*.jpg.

4. Página de Historia (src/components/historia/LegadoInnovacion.astro y src/pages/historia.astro)
Implementación de la línea de tiempo cronológica continua vertical descendente.
Nodos circulares destacados para cada fecha clave:
1946: El taller de radio y fonógrafos de Leo Fender en Fullerton, California.
1951: Creación de la Telecaster y el Precision Bass (nacimiento del bajo eléctrico moderno).
1954: Lanzamiento de la Stratocaster® y su diseño anatómico con trémolo sincronizado.
Época dorada / Actualidad: Expansión global y adopción por parte de leyendas contemporáneas.
Contenedores para imágenes históricas de luthería y escenarios (historia-taller.jpg, historia-concierto.jpg).

5. Página de Soporte (src/components/soporte/CentroSoporteServicio.astro y src/pages/soporte.astro)
Sección de asistencia oficial con 3 pilares de servicio:
Registro de Garantía (validación de número de serie y cobertura de fábrica).
Manuales y Diagramas (planos de cableado y guías de ajuste del mástil).
Red de Asistencia (localización de talleres y luthiers certificados).
Sistema de ventanas modales interactivas para cada servicio activadas por botón sin recarga de página.
Módulo de contacto centralizado con enlace directo mailto:contacto@fender-tribute.com.

6. Pie de Página Corporativo (src/components/Pie.astro)
Estructura simétrica de 4 columnas en escritorio y fluido en móvil:
Columna 1: Logotipo Fender al 80% de opacidad, eslogan y síntesis de marca.
Columna 2: Navegación rápida por páginas principales.
Columna 3: Enlaces directos a artistas destacados.
Columna 4: Correo de contacto y enlaces a canales oficiales (Instagram, YouTube).
Barra inferior con copyright legal y sellos de certificación de estándares web.
[Fase 3] Auditoría de Calidad, Accesibilidad y Optimización (Prompt 10)
Objetivos y Alcance
Verificar que la totalidad del código cumpla con los estándares de rendimiento, responsividad estricta en tres resoluciones clave, compatibilidad de contrastes WCAG AA y validación de compilación sin errores.
Resultados de la Auditoría

1. Responsividad y Adaptabilidad (Cero Scroll Horizontal)
360 px (Dispositivos móviles estrechos):
Los menús se contraen dentro del panel desplegable activado por el botón hamburguesa.
Las cuadrículas (grid) se transforman automáticamente en una columna fluida (grid-cols-1).
Los botones de acción abarcan el ancho completo de sus tarjetas para maximizar la ergonomía táctil.
Imágenes y marcos contenedores respetan la propiedad max-width: 100%, evitando desbordamientos en el eje X.
768 px (Tablets / Laptops intermedias):
Distribución fluida de catálogos en dos o tres columnas según la densidad de información.
Ajuste de márgenes laterales en el contenedor maestro (padding: 0 1.5rem).
1280 px (Monitores de escritorio):
Contenido encuadrado dentro de max-w-7xl (1200px - 1280px) perfectamente centrado.
Despliegue completo de la barra de navegación horizontal y alineación en patrón Z al 50/50.

2. Accesibilidad Web (Estándar WCAG 2.1 Nivel AA)
Medición de relaciones de contraste:
texto (#F5F2E8) sobre fondo (#141210 / #0F0B09): 16.74:1 (Supera ampliamente el mínimo de 4.5:1).
texto (#F5F2E8) sobre superficie (#1F1C18 / #1A130F): 14.83:1 (Cumple AA / AAA).
texto-suave (#CA8EB2 / #BFA997) sobre fondo (#141210): 7.20:1 (Cumple AA).
marca-contraste (#FFFFFF) sobre marca (#D9381E / #E11D1D): 4.63:1 (Cumple AA para texto normal y botones).
Semántica y soporte asistido:
Encabezados estructurados en orden jerárquico lógico (<h1> único por página, seguido de <h2> y <h3>).
Atributos alt descriptivos y no vacíos en la totalidad de las imágenes del sitio.
Estados :focus-visible y :hover claramente diferenciados en todos los elementos interactivos (<a>, <button>).
Roles ARIA en elementos dinámicos (aria-expanded, aria-label, aria-controls).

3. Validación de Compilación y Limpieza
Verificación de dependencias y scripts de Astro sin alertas ni fallos sintácticos.

Ejecución satisfactoria del comando de comprobación institucional:
Bash
npm run verificar

Generación de build estático limpio y optimizado:
Bash
npm run build

Resumen del Estado Final del Proyecto
Parámetro	Estado	Observación
Páginas funcionales	5 / 5	Inicio, Productos, Artistas, Historia, Soporte.
Componentes creados	100%	Estructura modular completa en src/components/.
Sistema de color	Oficial	Paleta institucional Fender con calidez rústica y rojo vibrante.
Responsividad	Validada	360 px, 768 px y 1280 px sin scroll horizontal.
Accesibilidad	WCAG AA	Contrastes superiores a 4.5:1 y semántica limpia.
Compilación	Exitosa	0 errores en npm run verificar y npm run build.