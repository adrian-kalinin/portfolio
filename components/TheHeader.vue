<template>
  <header class="mt-5 flex items-center justify-between">
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
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="postcss">
.nav-link {
  @apply p-2 hover:bg-gray-200;
}
</style>
