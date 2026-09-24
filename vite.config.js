import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Split large vendor libs (swiper, aos) into their own chunk so the
    // main bundle stays small and they can be cached independently.
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          carousel: ["swiper"],
        },
      },
    },
  },
});
