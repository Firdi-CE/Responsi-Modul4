import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // Konfigurasi untuk PWA
      registerType: 'autoUpdate', // Strategi update service worker
      injectRegister: 'auto',
      workbox: {
        // Konfigurasi Workbox
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,txt,woff2}'], // Aset yang akan di-cache
        cleanupOutdatedCaches: true, // Hapus cache lama
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        // Web App Manifest
        name: 'Portofolio PWA Saya',
        short_name: 'Portofolio',
        description: 'Aplikasi PWA Portofolio Pribadi.',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        orientation: 'portrait',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable', // Penting untuk PWA
          },
        ],
      },
    }),
  ],
})