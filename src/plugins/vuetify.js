/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
// import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#F06E8E',
          secondary: '#F06E8E',
        },
      },
      dark: {
        colors: {
          primary: '#F06E8E',
          secondary: '#F06E8E',
        },
      },
    },
  },
})
