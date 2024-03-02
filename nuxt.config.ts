// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false
  },
  modules: [
    '@vueuse/nuxt',
    'vuetify-nuxt-module',
    '@nuxt/image',
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
  }
})
