// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxtjs/stylelint-module',
    '@vueuse/nuxt',
    'vuetify-nuxt-module',
    '@nuxt/eslint',
  ],

  vuetify: {
    moduleOptions: {
      ssrClientHints: {
        prefersColorScheme: true,
        prefersColorSchemeOptions: {
          cookieName: 'color-scheme',
          darkThemeName: 'dark',
          lightThemeName: 'light',
          useBrowserThemeOnly: true,
        },
      },
    },
    vuetifyOptions: './vuetify.config.ts',
  },

  stylelint: {
    lintOnStart: false,
  },

  compatibilityDate: '2025-01-27',
})
