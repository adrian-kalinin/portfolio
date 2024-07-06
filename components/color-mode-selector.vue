<script setup>
const colorMode = useColorMode()

const colorModes = [
  'light',
  'dark',
]

const nextColorMode = computed(() => {
  const currentColorModeIndex = colorModes.indexOf(colorMode.preference)
  const nextColorModeIndex = currentColorModeIndex + 1 !== colorModes.length ? currentColorModeIndex + 1 : 0
  return colorModes[nextColorModeIndex]
})

function toggleColorMode() {
  colorMode.preference = nextColorMode.value
}
</script>

<template>
  <button class="flex items-center p-1 hover:bg-gray-200 dark:hover:bg-gray-800" @click="toggleColorMode">
    <Icon v-if="colorMode.value === 'light'" name="prime:sun" color="black" />
    <Icon v-if="colorMode.value === 'dark'" name="prime:moon" color="black" />
  </button>
</template>
