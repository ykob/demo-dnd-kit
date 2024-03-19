import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/demo-dnd-kit/',
  resolve: {
    alias: {
      '~': `${__dirname}/src/`,
      'styled-system': `${__dirname}/styled-system/`,
    },
  },
  server: {
    host: true,
    port: 3000,
  },
});
