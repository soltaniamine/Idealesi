import path from "path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';
import postcssNesting from 'postcss-nesting';
import tailwindcss from 'tailwindcss';
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0' // Permet au serveur de développement de Vite d'écouter sur toutes les interfaces réseau
  },
  plugins: [
    react(),
    reactRefresh(),
    postcssNesting(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
