import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  theme: {
    extend: {
      colors: {
        'rose-gold': '#e0bfb8',
        'rose-gold-dark': '#d4a59a',
        'rose-gold-light': '#f0d8d3',
        'black': '#1a1a1a',
        'black-light': '#2d2d2d',
      },
    },
  },
})