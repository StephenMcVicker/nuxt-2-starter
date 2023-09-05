export default {
  ssr: false,
  target: 'static',
  modern: true,

  head: {
    title: 'nuxt-2-starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/animations.scss', '@/assets/scss/colors.scss', '@/assets/scss/constants.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome',
    '@nuxtjs/i18n',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', 'v-wave/nuxt'],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  fontawesome: {
    icons: {
      solid: [
        'faCalendarWeek',
        'faCheck',
        'faClock',
        'faEnvelope',
        'faHeart',
        'faHome',
        'faMapMarker',
        'faUser'
      ]
    }
  },

  i18n: {
    baseUrl: 'https://www.bonkers.ie',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      alwaysReload: true,
      useCookie: true
    },
    langDir: 'lang/',
    lazy: true,
    locales: [{ code: 'en', file: 'en-IE', name: 'English', iso: 'en-IE' }],
    vueI18n: {
      fallbackLocale: 'en',
      numberFormats: {
        en: {
          currency: {
            style: 'currency',
            currency: 'EUR'
          },
          currencyRound: {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          },
          percent: {
            style: 'percent',
            maximumFractionDigits: 2
          },
          toWholeNumber: {
            style: 'decimal',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          }
        }
      },
      silentTranslationWarn: true
    },
    vueI18nLoader: true,
    vuex: {
      syncLocale: true,
      syncMessages: true
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  styleResources: {
    scss: ['~assets/scss/*.scss']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: null
  }
};
