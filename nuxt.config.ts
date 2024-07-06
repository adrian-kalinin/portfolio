export default defineNuxtConfig({
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
})
