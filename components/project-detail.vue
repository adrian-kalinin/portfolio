<script setup>
defineProps({
  repository: Object,
})
</script>

<template>
  <li class="rounded-sm border border-gray-200 p-4 font-mono hover:bg-gray-200 dark:hover:bg-gray-800">
    <a :href="repository.html_url" target="_blank">
      <div class="flex items-center justify-between text-sm">
        <div class="font-semibold">{{ repository.name }}</div>
        <div>{{ repository.stargazers_count }} *</div>
      </div>
      <p class="text-sm">{{ repository.description || "No description here..." }}</p>
    </a>
  </li>
</template>
