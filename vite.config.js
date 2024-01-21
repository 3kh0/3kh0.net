import { ViteMinifyPlugin } from 'vite-plugin-minify'
import { resolve } from 'path'

export default {
  build: {
    outDir: 'dist',
    base: '/',
    minify: 'esbuild',
    cssMinify: 'lightningcss',
    sourcemap: 'true',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        extra: resolve(__dirname, 'extra/index.html'),
      },
    },
  },
  plugins: [
    ViteMinifyPlugin(),
  ],
};