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
        aboutblank: resolve(__dirname, 'extra/aboutblank.html.html'),
        iplist: resolve(__dirname, 'extra/iplist.html'),
        urlopen: resolve(__dirname, 'extra/urlopen.html'),
      },
    },
  },
  plugins: [
    ViteMinifyPlugin(),
  ],
};