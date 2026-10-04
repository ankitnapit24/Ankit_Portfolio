import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks: {
          'framer': ['framer-motion'],
          'particles': ['react-particles', 'tsparticles-slim'],
          'icons': ['react-icons'],
        },
      },
    },
  },
})
