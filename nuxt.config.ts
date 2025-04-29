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

  runtimeConfig: {
    NASA_API_KEY: process.env.NASA_API_KEY,
  },

  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss'],

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  }
})