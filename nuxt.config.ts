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
      SITE_URL: process.env.SITE_URL
    }
  },

  watchOptions: {
    ignored: '/node_modules/'
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
