import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html'),
        background: path.resolve(__dirname, 'src/extension/background.ts'), // Service worker
      },
      output: { // Add this output configuration
        entryFileNames: '[name].js', // Use original names for entry points
        chunkFileNames: '[name].js', // Use original names for chunks
        assetFileNames: '[name].[ext]', // Use original names for assets
      },
    },
  },
});
