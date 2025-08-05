// vite.config.ts (ALIAS ƏLAVƏ EDİLMİŞ SON VERSİYA)

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path' // path modulunu import etməyi unutmayın!

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // --- DƏYİŞİKLİK BURADADIR ---
  // Vite-a aliasların harada olduğunu göstəririk
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@shared': path.resolve(__dirname, './shared'),
    },
  },
})