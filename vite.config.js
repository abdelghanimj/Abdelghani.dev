import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  base: "/MyPortfolio/", // 👈 مهم بزاف (اسم repo ديالك)

  server: {
    port: 3000,
  },
})