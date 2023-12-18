import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
  resolve: {
    alias: {
      // 'minhquanle-ui/es': './src',
      'minhquanle-ui/es': resolve(__dirname, './src'),
      // src: resolve(__dirname, 'minhquanle-ui/es'),
      // src: './src',
    },
  },
  server: { https: true },
  plugins: [react(), mkcert()],
})
