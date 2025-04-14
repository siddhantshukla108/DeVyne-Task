import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/114/', // <-- Add this line with your repo name
  plugins: [react()],
})