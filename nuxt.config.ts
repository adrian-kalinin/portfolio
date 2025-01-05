export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: 'page', mode: 'out-in'
    }
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