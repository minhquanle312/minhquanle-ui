import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: resolve(__dirname, 'minhquanle-ui/lib'),
      // src: './src',
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'minhquanle-ui/lib/index.ts'),
      name: 'minhquanle-ui',

      fileName: 'index',
    },
    rollupOptions: {
      external: ['react'],
    },
  },
})
