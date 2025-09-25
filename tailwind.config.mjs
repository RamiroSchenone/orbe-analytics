/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'orbe-violet': '#8B5CF6', // RGB 139 92 246
        'orbe-dark': '#100645',   // RGB 16 6 69 - Color principal de marca
        'orbe-gray': '#1A1A2E'    // Mantener para contraste
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        'orbe-brand': ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'], // Para "ORBE"
        'analytics-brand': ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'] // Para "Analytics"
      }
    },
  },
  plugins: [],
}
