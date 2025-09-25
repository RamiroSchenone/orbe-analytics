import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const manifest = {
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

  return new Response(JSON.stringify(manifest), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
