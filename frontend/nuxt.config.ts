// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  modules:[// '@nuxtjs/tailwindcss',
  '@nuxt/ui', '@vueuse/nuxt', "@sidebase/nuxt-auth"],

  compatibilityDate: '2024-08-02',
})