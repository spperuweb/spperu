import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    base: '/', // Usar rutas relativas para que funcione out-of-the-box en cualquier hosting/GitHub Pages
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          fd1s: path.resolve(__dirname, 'fd1s/index.html'),
          fd2: path.resolve(__dirname, 'fd2/index.html'),
          fd3: path.resolve(__dirname, 'fd3/index.html'),
          'sd4-plus': path.resolve(__dirname, 'sd4-plus/index.html'),
          accesorios: path.resolve(__dirname, 'accesorios/index.html'),
        },
      },
    },
  };
});
