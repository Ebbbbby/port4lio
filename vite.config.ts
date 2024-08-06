// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Ensures assets are looked up from the correct base path
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Optional: for easier imports
    },
  },
  build: {
    outDir: "dist", // Specify output directory (usually 'dist' by default)
    assetsDir: "assets", // Specify assets directory within outDir
    sourcemap: false, // Disable sourcemaps for production build
    rollupOptions: {
      output: {
        manualChunks: undefined, // Optimize chunking
      },
    },
  },
  server: {
    port: 5173, // Optional: specify dev server port
  },
});