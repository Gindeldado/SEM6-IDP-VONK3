import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' 
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  server: {
    host: "0.0.0.0", // Allow access from outside the container
    port: 5173,      // Ensure Vite runs on the correct port
    watch: {
      usePolling: true, // Required for file change detection in Docker
    },
    hmr: {
      clientPort: 5000, // Ensures HMR correctly connects to the frontend
    },
  },
})
