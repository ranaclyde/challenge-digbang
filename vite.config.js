import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://ranaclyde.github.io/challenge-digbang/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setupTest.js'
  }
})
