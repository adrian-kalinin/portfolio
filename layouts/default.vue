<script setup>
useHead({
  titleTemplate: '%s - Adrian Kalinin',
  link: [
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
    <TheHeader />
    <main class="p-2 mt-10">
      <slot />
    </main>
  </div>
</template>

<style>
body {
  font-family: 'Roboto', sans-serif;
}
</style>
