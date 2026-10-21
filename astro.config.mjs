// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// SITE and BASE_PATH are set by the deploy workflow from actions/configure-pages:
//   - on https://lnynano.github.io/portfolio/  -> BASE_PATH=/portfolio
//   - once the custom domain is set            -> BASE_PATH='' (domain root)
// Locally both fall back to the custom domain at the root.
export default defineConfig({
  site: process.env.SITE || 'https://lnynano.com',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
