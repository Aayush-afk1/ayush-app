import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/ayush-app/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'icons/icon-192.png', 'icons/icon-512.png'],
      manifest: {
        name: 'Aakriti',
        short_name: 'Aakriti',
        start_url: '.',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#f06292',
        icons: [
          {
            src: '/ayush-app/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/ayush-app/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});