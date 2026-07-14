import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    proxy: {
      // 将 /api 和 /webhook 请求代理到后端，避免跨域
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true
      },
      '/webhook': {
        target: 'http://localhost:8000',
        changeOrigin: true
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
