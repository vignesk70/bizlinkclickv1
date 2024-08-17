// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  modules:[// '@nuxtjs/tailwindcss',
  '@nuxt/ui', '@vueuse/nuxt', "@sidebase/nuxt-auth", "@nuxtjs/google-fonts"],
  googleFonts: {
    download: true,
    outputDir: 'assets',
    stylePath: 'google-fonts.css',
    fontsDir: 'fonts',
    fontsPath: 'fonts',
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      'Barlow+Condensed':true,
      'Montserrat': true,
      'Ultra':true,
    },
    display: 'swap',
  },

  compatibilityDate: '2024-08-02',

  runtimeConfig: {
    authOrigin: 'http://localhost:3000',
    authSecret: 'my-superb-secret',  
  }
})