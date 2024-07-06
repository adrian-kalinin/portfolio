<template>
  <nav class="flex items-center gap-5 border-b border-black/35 dark:border-white/35">
    <!-- Header logo -->
    <div class="flex w-auto flex-col items-center bg-black p-5 text-xs font-black uppercase text-white h-[50px] hover:underline hover:underline-offset-4 dark:bg-white dark:text-black">
      <NuxtLink to="/" class="m-auto">
        Adrian Kalinin
      </NuxtLink>
    </div>
    <!-- Navigation links -->
    <div>
      <NuxtLink to="/projects" class="text-xs font-semibold uppercase hover:underline hover:underline-offset-4">
        Work
      </NuxtLink>
    </div>
    <div>
      <NuxtLink to="/blog" class="text-xs font-semibold uppercase hover:underline hover:underline-offset-4">
        Blog
      </NuxtLink>
    </div>
    <!-- Color mode selector -->
    <div class="mr-2 ml-auto flex items-center space-x-4">
      <ClientOnly>
        <ColorModeSelector />
      </ClientOnly>
    </div>
  </nav>
</template>
