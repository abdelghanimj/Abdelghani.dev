import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  base: "/", // ✅ مهم لـ Vercel

  server: {
    port: 3000,
  },
});