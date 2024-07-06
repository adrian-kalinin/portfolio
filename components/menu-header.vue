<template>
  <header class="mt-5 flex items-center justify-between">
    <div class="flex items-center space-x-12">
      <!-- Header logo -->
      <div>
        <NuxtLink to="/" class="text-xl font-semibold nav-link">
          Adrian Kalinin
        </NuxtLink>
      </div>
      <!-- Navigation links -->
      <nav class="font-mono">
        <ul class="flex space-x-4">
          <li>
            <NuxtLink to="/" class="nav-link">
              Main
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="nav-link">
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projects" class="nav-link">
              Projects
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog" class="nav-link">
              Blog
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <!-- Color mode selector -->
    <ClientOnly>
      <ColorModeSelector />
    </ClientOnly>
  </header>
</template>

<style scoped lang="postcss">
.nav-link {
  @apply p-2 hover:bg-gray-200 dark:hover:bg-gray-800;
}
</style>
<script setup lang="ts">
</script>
