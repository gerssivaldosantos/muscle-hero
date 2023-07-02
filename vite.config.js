import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    coverage: {
      provider: 'v8' // or 'v8'
    },
    resolve: {
      alias: [
        { find: 'src', replacement: fileURLToPath(new URL('./src', import.meta.url)) }
      ]
    }
  }
})
