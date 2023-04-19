import { defineConfig } from 'vite';

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
  },
});
