// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en-GB',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'APOD App',
    },
  },

  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxtjs/tailwindcss'],

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  }
})