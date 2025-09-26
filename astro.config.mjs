import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://orbeanalytics.com.ar',
  base: '/',
  output: 'static',
  integrations: [
    tailwind(),
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
  compressHTML: true,
  prefetch: true,
});
