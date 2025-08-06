// tailwind.config.ts (SADƏLƏŞDİRİLMİŞ)

import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', // Əgər qaranlıq tema istifadə edirsinizsə, bu qalsın
  content: [
    './client/src/**/*.{js,ts,jsx,tsx}', // Tailwind-in harada klass axtaracağını göstəririk
  ],
  theme: {
    extend: {
      // Əgər xüsusi rəngləriniz varsa, onları bura birbaşa yaza bilərsiniz.
      // Məsələn:
      // colors: {
      //   primary: '#ff0000',
      // }
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config