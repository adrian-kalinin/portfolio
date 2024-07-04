import antfu from '@antfu/eslint-config'

export default antfu({
  vue: {
    overrides: {
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 3,
        },
        multiline: {
          max: 1,
        },
      }],
      'vue/attributes-order': 'error',
    },
  },
  formatters: true,
})
