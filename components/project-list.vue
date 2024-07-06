<script setup>
import ProjectDetail from '~/components/project-detail.vue'

const { data, pending, error } = await useFetch('https://api.github.com/users/adrian-kalinin/repos')
const repositories = computed(() => data.value.filter(repo => !repo.fork).sort((a, b) => b.stargazers_count - a.stargazers_count))
</script>

<template>
  <p class="mb-10">
    Take a look at my GitHub projects!
  </p>
  <section v-if="pending">
    Loading...
  </section>
  <section v-else-if="error">
    Something went wrong...
  </section>
  <section v-else>
    <ul class="grid grid-cols-1 gap-4">
      <ProjectDetail
        v-for="repository in repositories"
        :key="repository.id"
        :repository="repository"
      />
    </ul>
  </section>
</template>
