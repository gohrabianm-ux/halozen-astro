import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
export default defineConfig({
  site: 'https://halozen.example',
  integrations: [tailwind({ applyBaseStyles: true })],
});
