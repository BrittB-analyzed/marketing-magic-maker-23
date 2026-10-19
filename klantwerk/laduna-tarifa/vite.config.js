// Alleen voor de preview (Lovable / lokaal): serveert de gegenereerde map met nette URL's.
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.preview',
  appType: 'mpa',
  server: { host: '::', port: 8080 },
  preview: { host: '::', port: 8080 },
  build: { outDir: '../dist', emptyOutDir: true },
});
