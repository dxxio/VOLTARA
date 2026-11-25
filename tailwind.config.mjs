/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        fondo: "#141210",
        superficie: "#1F1C18",
        texto: "#F5F2E8",
        "texto-suave": "#CA8EB2",
        borde: "#3D352E",
        marca: "#D9381E",
        "marca-contraste": "#FFFFFF",
      },
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
      },
      borderRadius: {
        fender: "4px",
      },
      boxShadow: {
        fender: "0 4px 12px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
