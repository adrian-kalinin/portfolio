export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },

  devtools: {
    enabled: true,
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxt/icon',
  ],

  colorMode: {
    classSuffix: '',
  },

  content: {
    highlight: {
      theme: {
        default: 'monokai',
      },
    },
  },

  icon: {
    size: '28px',
  },

  compatibilityDate: '2025-01-05',
})
