import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/mangosteen-f/dist/',
  plugins: [
    vue(),
    vueJsx({
      transformOn: true,
      mergeProps: true
    })
  ],
  server: {
    host: "0.0.0.0",
    port: 3001,
  }
})
