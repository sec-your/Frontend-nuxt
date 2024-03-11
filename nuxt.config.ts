// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  devtools: { 
    enabled: true,
    timeline: {
        enabled: false,
      }
    },
  components: {
    global: true,
    dirs: ['~/components','~/components/icons']
  },

  alias: {
    "@": "/"+__dirname,
  },

  routeRules: {
    '/panel/*' : { ssr: false }
  },

  runtimeConfig: {
    public: {
      SITE_URL: process.env.SITE_URL,
      API_BASE_URL: process.env.API_BASE_URL,
      API_REGISTER: process.env.API_PUT_REGISTER,
      API_LOGIN: process.env.API_POST_LOGIN,
      API_USER: process.env.API_POST_USER,
      API_UPDATE_MONEY: process.env.API_POST_UPDATE_MONEY,
      API_LOGOUT: process.env.API_POST_LOGOUT,
      API_LAST_SCANS: process.env.API_GET_LAST_SCANS,
      API_FORGET_PASSWORD: process.env.API_POST_FORGET_PASSWORD,
      API_RESET_PASSWORD_TOKEN_CHECK: process.env.API_POST_RESET_PASSWORD_TOKEN_CHECK,
      API_RESET_PASSWORD: process.env.API_POST_RESET_PASSWORD,
      API_FREE_SCAN: process.env.API_POST_FREE_SCAN,
      API_SCAN_CHECK: process.env.API_POST_SCAN_CHECK,
      API_SCAN_DETAILS: process.env.API_GET_SCAN_DETAILS,
      API_TICKETS_LIST: process.env.API_GET_TICKETS_LIST,
      API_TICKET_SUBJECTS_LIST: process.env.API_GET_TICKET_SUBJECTS_LIST,
      API_CLOSE_TICKET: process.env.API_PATCH_CLOSE_TICKET,
      API_NEW_TICKET: process.env.API_PUT_NEW_TICKET,
      API_FAQS_RELATED: process.env.API_GET_FAQS_RELATED,
      API_GET_TICKET: process.env.API_POST_GET_TICKET,
      API_REPLY_TICKET: process.env.API_POST_REPLY_TICKET,
      API_MONITORED_SITES: process.env.API_GET_MONITORED_SITES,
      API_MONITORED_SITE: process.env.API_GET_MONITORED_SITE,
      API_CHANGE_MONITORED_SITES_SCAN_INTERVAL: process.env.API_POST_CHANGE_MONITORED_SITES_SCAN_INTERVAL,
    }
  },

  modules: ['@pinia/nuxt', '@nuxtjs/color-mode'],

  colorMode: {
          preference: 'light',
          fallback: 'light',
          classSuffix: ''
  },

  plugins: [
        '~/plugins/app-service.js',
        '~/plugins/click-outside.js',
        '~/plugins/re-captcha.js',
  ],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      script: [
        { src: '/js/main.js' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: process.env.NODE_ENV !== "development",
})
