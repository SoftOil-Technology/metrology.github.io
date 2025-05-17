// astro.config.mjs

// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // Tu plugin existente

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.kepler-metrology.com.mx',
  base: '/',
  output: 'static',

  vite: {
    plugins: [tailwindcss()]
  },

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },

  build: {
    inlineStylesheets: "always",
  },

  integrations: [react()],
});