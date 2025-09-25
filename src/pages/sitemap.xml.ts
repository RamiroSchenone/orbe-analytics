---
// Archivo de configuración para sitemap personalizado
---

export const site = 'https://orbeanalytics.com.ar';

export default function getSiteMap() {
  return [
    {
      url: '/',
      lastmod: new Date(),
      changefreq: 'weekly',
      priority: 1.0,
    },
    {
      url: '/gracias',
      lastmod: new Date(),
      changefreq: 'monthly',
      priority: 0.3,
    },
  ];
}
