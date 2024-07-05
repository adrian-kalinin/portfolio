<script setup>
const colorMode = useColorMode()
const showNextColorModeLabel = ref(false)

const colorModes = [
  'system',
  'light',
  'dark',
]
const colorModeIcons = {
  system: '🌓',
  light: '🌕',
  dark: '🌑',
}

const nextColorMode = computed(() => {
  const currentColorModeIndex = colorModes.indexOf(colorMode.preference)
  const nextColorModeIndex = currentColorModeIndex + 1 !== colorModes.length ? currentColorModeIndex + 1 : 0
  return colorModes[nextColorModeIndex]
})

const nextColorModeIcon = computed(() => {
  return colorModeIcons[nextColorMode.value]
})

function toggleColorMode() {
  colorMode.preference = nextColorMode.value
}
</script>

<template>
  <div class="flex items-center space-x-2">
    <div v-if="showNextColorModeLabel" class="text-sm text-gray-500">
      Change to {{ nextColorMode }}
    </div>
    <button
      class="px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-800"
      @click="toggleColorMode"
      @mouseenter="showNextColorModeLabel = true"
      @mouseleave="showNextColorModeLabel = false"
    >
      {{ nextColorModeIcon }}
    </button>
  </div>
</template>
