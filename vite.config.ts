// vite.config.ts (SON DÜZƏLİŞ)

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// Bu konfiqurasiya `vite build client` əmri ilə işləmək üçün nəzərdə tutulub.
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  
  resolve: {
    // Aliaslarımızı təyin edirik ki, Vite `@/` işarəsini tanıya bilsin.
    alias: {
      '@': path.resolve(__dirname, 'client/src'),
      '@shared': path.resolve(__dirname, 'shared'),
    },
  },

  build: {
    // `vite build client` əmri onsuz da `client` qovluğunu kök götürür.
    // Nəticəni layihənin əsas kökündəki `dist/client` qovluğuna yazırıq.
    // Bu, `esbuild`-in yaratdığı `dist` qovluğu ilə qarışmaması üçün vacibdir.
    outDir: 'dist/client',
  }
})