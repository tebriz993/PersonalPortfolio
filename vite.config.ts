// vite.config.ts (SADƏLƏŞDİRİLMİŞ)

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // path modulunu import etməyi unutmayın!

export default defineConfig({
  root: 'client', // Vite-a client qovluğunu göstəririk
  plugins: [
    react() 
    // Tailwind plagini avtomatik olaraq postcss.config.js-dən oxunmalıdır, 
    // əgər yenə problem olsa, bura əlavə edərik.
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client/src'),
      '@shared': path.resolve(__dirname, 'shared'),
    },
  },
  build: {
    outDir: '../dist/client'
  }
})