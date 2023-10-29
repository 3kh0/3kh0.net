import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default {
  build: {
    outDir: 'dist',
    base: '/',
    minify: 'esbuild',
    cssMinify: 'lightningcss',
    sourcemap: 'true',
  },
  plugins: [
    ViteMinifyPlugin(),
  ],
};