import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vite + React + Tailwind CSS v4 (no tailwind.config.js needed — the theme lives in src/index.css)
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
