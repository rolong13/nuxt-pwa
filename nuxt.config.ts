import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: false,
  modules: ['@vite-pwa/nuxt'],
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Nuxt\u00A03\u00A0PWA',
      short_name: 'NuxtPWA',
      description: 'Offline\u2011ready Nuxt\u00A03 app',
      theme_color: '#4A90E2',
      icons: [
        { src: '/pwa-icon-192x192.png', sizes: '192x192', type: 'image/png' },
        { src: '/pwa-icon-512x512.png', sizes: '512x512', type: 'image/png' }
      ]
    }
  }
})
