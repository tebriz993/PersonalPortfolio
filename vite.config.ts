// vite.config.ts (TƏMİZLƏNMİŞ VƏ RENDER ÜÇÜN UYĞUN VERSİYA)

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Replit-ə aid olan bütün plaginləri (cartographer, error-modal) buradan sildik!
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@shared': path.resolve(__dirname, './shared'),
    },
  },
  build: {
    // Client kodunu dist/client qovluğuna yığırıq
    outDir: 'dist/client',
  },
})