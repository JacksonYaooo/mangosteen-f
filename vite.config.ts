import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-nocheck
import { svgstore } from './src/vite_plugins/svgstore';
import vueJsx from '@vitejs/plugin-vue-jsx';
import styleImport, { VantResolve } from 'vite-plugin-style-import';

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
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
  server: {
    proxy: {
      '/api/v1': {
        target: 'http://8.130.47.85:3000/',
      }
    }
  },

})
