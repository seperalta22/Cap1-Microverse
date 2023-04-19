import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/Cap1-Microverse/',
  url: 'https://sergioperalta22.github.io',
  define: {
    'process.env': {
      BASE_URL: process.env.BASE_URL || '/',
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
      },
    },
  },
});
