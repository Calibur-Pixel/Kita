// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false
  },
  modules: [
    '@nuxt/image',
    '@nuxtjs/stylelint-module',
    '@vueuse/nuxt',
    'vuetify-nuxt-module',
  ],
  vuetify: {
    moduleOptions: {
      ssrClientHints: {
        prefersColorScheme: true,
        prefersColorSchemeOptions: {
          cookieName: 'color-scheme',
          darkThemeName: 'dark',
          lightThemeName: 'light',
          useBrowserThemeOnly: true
        }
      }
    },
    vuetifyOptions: './vuetify.config.ts'
  },
  stylelint: {
    lintOnStart: false,
    chokidar: true
  }
})
