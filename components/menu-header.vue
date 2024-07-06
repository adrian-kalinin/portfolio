<template>
  <nav class="flex items-center gap-5 border-b border-black/35 dark:border-white/35">
    <!-- Header logo -->
    <div class="flex flex-col items-center bg-black text-xs font-black text-white w-[50px] h-[50px] hover:underline hover:underline-offset-4 dark:bg-white dark:text-black">
      <NuxtLink to="/" class="m-auto">
        AK
      </NuxtLink>
    </div>
    <!-- Navigation links -->
    <div>
      <NuxtLink to="/projects" class="text-xs font-semibold uppercase hover:underline hover:underline-offset-4">
        Projects
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
