require('dotenv').config()

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'bredala-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
    '@nuxtjs/google-fonts',
    ['@nuxtjs/router', { keepDefaultRouter: true }],
  ],

  googleFonts: {
    display: 'swap',
    families: {
      Roboto: true,
      Raleway: {
        wght: [100, 400, 600, 700],
        ital: [100],
      },
      'Dancing+Script': {
        wght: [400, 700],
      },
    },
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios', '@nuxtjs/router'],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseUrl: process.env.API_URL,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
