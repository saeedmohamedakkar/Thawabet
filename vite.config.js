import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  /* SPA fallback: all non-file requests return index.html */
  appType: 'spa',
  preview: {
    port: 4173,
  },
})
