---
// Archivo de configuración para manifest.json
---

export default function getManifest() {
  return {
    name: 'Orbe Analytics - Inteligencia de Negocios',
    short_name: 'Orbe Analytics',
    description: 'Transformamos datos en decisiones estratégicas. Consultoría en BI, Data Warehouse, Power BI y Metabase.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F0F23',
    theme_color: '#8B5CF6',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
