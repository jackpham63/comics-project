import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - comics-project',
    title: 'comics-project',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  fontawesome: {
    icons:{
      solid:true,
      brands:true
    }
  },
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          development:{
            apiKey: "AIzaSyCp7DIg2VB  Ief0f5d4nEuTloBI31B5I2WU",
            authDomain: "comics-project-57bdb.firebaseapp.com",
            databaseURL: "https://comics-project-57bdb-default-rtdb.firebaseio.com",
            projectId: "comics-project-57bdb",
            storageBucket: "comics-project-57bdb.appspot.com",
            messagingSenderId: "174004654948",
            appId: "1:174004654948:web:ee13b9fd2d1e53e5166071",
            measurementId: "G-CL6WLKMP2S"
          },
          clients: {
            //
          }
        },
        services: {
          auth: {
            persistence: 'local', // default
            initialize: {
              onAuthStateChangedAction: 'onAuthStateChangedAction',
              subscribeManually: false
            },
            ssr: false, // default
          },
          firestore: true,
          functions: true,
          storage: true,
          database: true,
          messaging: true,
          performance: true,
          analytics: true,
          remoteConfig: true
        }
      }
    ],
    ['@nuxtjs/axios'],
  ],
  axios: {
    // proxy: true
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router:{
    middleware: "auth"
  },
  env: {
    FIRE_ENV: process.env.FIRE_ENV
  },
}
