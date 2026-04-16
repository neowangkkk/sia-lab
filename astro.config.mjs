import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://sialab.org',
  base: '/',
  trailingSlash: 'ignore',
  integrations: [tailwind()],
});
