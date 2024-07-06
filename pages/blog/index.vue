<script setup>
const { data } = useAsyncData('post-list', () => {
  return queryContent('/blog')
    .only(['_path', 'title', 'publishedAt'])
    .sort({ publishedAt: -1 })
    .find()
})

const posts = computed(() => {
  if (!data.value) {
    return []
  }

  let previousYear = null

  return data.value.map((post) => {
    const currentYear = new Date(post.publishedAt).getFullYear()
    post.year = (currentYear !== previousYear) ? currentYear : ''
    previousYear = currentYear
    return post
  })
})
</script>

<template>
  <section>
    <div class="header">
      <div class="w-12">
        Date
      </div>
      <div>
        Title
      </div>
    </div>
    <ul>
      <li v-for="post in posts" :key="post._path">
        <NuxtLink :to="post._path" class="row">
          <div class="w-12 text-gray-500">
            {{ post.year }}
          </div>
          <div>
            {{ post.title }}
          </div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.header {
  @apply flex items-center border-b py-3 text-sm text-gray-400 border-black/35 space-x-8 dark:border-white/35;
}

.row {
  @apply flex items-center border-b py-3 space-x-8 border-black/35 hover:underline hover:underline-offset-4 dark:border-white/35;
}
</style>
