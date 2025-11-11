import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import path from 'path';

const basePath = 'rulebook';

export default defineConfig({
  plugins: [solid()],
  base: `/${basePath}/`,
  define: {
    BASE_PATH: `${JSON.stringify(basePath)}`,
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, './src'),
    },
  },
});
