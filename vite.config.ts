import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-nocheck
import { svgstore } from './src/vite_plugins/svgstore';
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/mangosteen-f/dist/',
  plugins: [
    vue(),
    vueJsx({
      transformOn: true,
      mergeProps: true
    }),
    svgstore(),
  ],
  server: {
    host: "0.0.0.0",
    port: 3001,
  }
})
