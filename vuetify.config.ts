import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'

export default defineVuetifyConfiguration({
  theme: {
    defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#F06E8E',
            secondary: '#F06E8E',
          },
        },
        dark: {
          dark: true,
          colors: {
            primary: '#F06E8E',
            secondary: '#F06E8E',
          },
        },
      },
  },
})
