import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    define: {
      'process.env': env,
    },
    plugins: [react()],
    base: './',
    server: {
      port: 3000,
      host: true,
      watch: {
        usePolling: true,
      },
    },
  }
})
