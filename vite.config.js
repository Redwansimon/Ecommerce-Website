
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Ecommerce-Website/'  // Update this to match your GitHub repository name
})

