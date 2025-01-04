<template>
  <article class="prose dark:prose-pre:bg-gray-900 dark:prose-invert">
    <ContentDoc>
      <template #not-found>
        <h1>Document not found (404)</h1>
        <p>Blog post could not be found...</p>
      </template>
      <template #default="{ doc }">
        <ContentRenderer :value="doc" />
      </template>
    </ContentDoc>
  </article>
</template>
