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
      href: 'https://fonts.googleapis.com/css2?family=Varela&display=swap',
      crossorigin: '',
    },
  ],
})
</script>

<template>
  <div class="">
    <MenuHeader />
    <main class="mx-auto max-w-2xl mt-10 p-2">
      <slot />
    </main>
  </div>
</template>

<style>
body {
  font-family: 'Varela', arial, sans-serif;
  @apply bg-white text-black dark:bg-black dark:text-white;
}
</style>
