import vue from '@vitejs/plugin-vue'
import Sitemap from 'vite-plugin-sitemap'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import { join, parse, resolve } from "path";

// Define your entry points
const entryPoints = getEntryPoints("index.html");

// Transform the entry points into route paths
const dynamicRoutes = Object.keys(entryPoints).map(key => `/${key}`);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      includeAssets: ['img/**/*.*'],
      registerType: 'autoUpdate',
      manifest: {
        name: '3kh0.net',
        short_name: '3kh0.net',
        start_url: './',
        display: 'standalone',
        background_color: '#22c55e',
        theme_color: '#22c55e',
        lang: 'en',
        scope: '/',
        icons: [
          {
            src: '/icons/72.png',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/icons/96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/icons/144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/icons/192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/icons/512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/icons/1028.png',
            sizes: '1028x1028',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    }),
    Sitemap({
      hostname: 'https://3kh0.net/',
      lastmod: new Date(),
      generateRobotsTxt: true,
      dynamicRoutes
    })
  ],
  alias: {
    "~": __dirname,
  },
  build: {
    outDir: 'dist',
    base: '/',
    minify: 'esbuild',
    sourcemap: 'true',
    rollupOptions: {
      input: entryPoints,
    },
  },
})

function getEntryPoints(...paths) {
  const entries = paths.map(parse).map(entry => {
    const { dir, base, name, ext } = entry;
    const key = join(dir, name);
    const path = resolve(__dirname, dir, base);
    return [key, path];
  });
  
  const config = Object.fromEntries(entries);
  return config;
}