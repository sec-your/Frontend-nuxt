// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  devtools: { enabled: true },

  alias: {
    "@": "/"+__dirname,
  },

  runtimeConfig: {
    public: {
      SITE_URL: process.env.SITE_URL
    }
  },

  modules: ['@pinia/nuxt'],

  plugins: [
      '~/plugins/click-outside.js',
  ],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
