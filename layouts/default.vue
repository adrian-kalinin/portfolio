<script setup>
useSeoMeta({
  title: 'Adrian Kalinin',
  description: 'Software engineer from Helsinki.',
  ogTitle: 'Adrian Kalinin',
  ogDescription: 'Software engineer from Helsinki.',
  twitterTitle: 'Adrian Kalinin',
  twitterDescription: 'Software engineer from Helsinki.',
})

useHead({
  titleTemplate: '%s - Adrian Kalinin',
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: '',
    },
  ],
})
</script>

<template>
  <div class="mx-auto max-w-2xl">
    <MenuHeader />
    <main class="mt-10 p-2">
      <slot />
    </main>
  </div>
</template>

<style>
body {
  font-family: 'Roboto', sans-serif;
  @apply bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300;
}
</style>
