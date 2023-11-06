import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
  "/server": {
    target: "http://localhost:3000",
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/server/, "")
    }
  }
  }
})
