export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content',
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
})
