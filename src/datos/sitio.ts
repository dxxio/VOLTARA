export interface EnlaceMenu {
  texto: string;
  ruta: string;
}

export interface RedSocial {
  nombre: string;
  url: string;
}

export interface DatosSitio {
  nombre: string;
  eslogan: string;
  descripcion: string;
  correo: string;
  pie: string;
  menu: EnlaceMenu[];
  redes: RedSocial[];
}

export const sitio: DatosSitio = {
  nombre: "VOLTARA",
  eslogan: "MAKE YOUR SOUND MATTER",
  descripcion:
    "Guitarras eléctricas, acústicas y bajos contemporáneos diseñados con personalidad audaz, sonido contundente y estética cinematográfica.",
  correo: "contacto@voltara-guitars.com",
  pie: "© 2026 VOLTARA Guitars Inc. Todos los derechos reservados. Diseñado para creadores audaces.",
  menu: [
    { texto: "Inicio", ruta: "/" },
    { texto: "Guitarras", ruta: "/guitarras" },
    { texto: "Bajos", ruta: "/bajos" },
    { texto: "Artistas", ruta: "/artistas" },
    { texto: "Historia", ruta: "/historia" },
    { texto: "Soporte", ruta: "/soporte" },
  ],
  redes: [
    { nombre: "Instagram", url: "https://instagram.com" },
    { nombre: "YouTube", url: "https://youtube.com" },
    { nombre: "Spotify", url: "https://spotify.com" },
  ],
};
