// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://1404.io',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/analyst/') && !page.includes('/demos'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
});
