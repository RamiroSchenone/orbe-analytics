/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'orbe-violet': '#8B5CF6',
        'orbe-dark': '#0e0e0e',
        'orbe-deep': '#794eba',
        'orbe-gray': '#0f0f0f',
        'orbe-chrome': '#C8C8D8',
        'orbe-glow': 'rgba(139,92,246,0.18)'
      },
      fontFamily: {
        serif: ['Montserrat', 'system-ui', 'sans-serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        'orbe-brand': ['Montserrat', 'system-ui', 'sans-serif'],
        'analytics-brand': ['Montserrat', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
