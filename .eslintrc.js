module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
  rules: {
    "linebreak-style": ["error", "unix"],
    'vue/multi-word-component-names': 'off',
    "eol-last": "error",
    "no-mixed-spaces-and-tabs": "error",
  },
}
