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
    <MenuHeader />
    <main class="mt-10 p-2">
      <slot />
    </main>
  </div>
</template>

<style>
body {
  font-family: 'Roboto', sans-serif;
}
</style>
