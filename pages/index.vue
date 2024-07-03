<script setup lang="ts">
useSeoMeta({
  title: 'Adrian Kalinin',
  description: 'Software engineer from Helsinki.',
  ogTitle: 'Adrian Kalinin',
  ogDescription: 'Software engineer from Helsinki.',
  twitterTitle: 'Adrian Kalinin',
  twitterDescription: 'Software engineer from Helsinki.',
})

useHead({
  titleTemplate: 'Adrian Kalinin',
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico',
    },
  ],
})
</script>

<template>
  <div>
    Hello, World!
  </div>
</template>
