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
  
    app: {
      pageTransition: { name: 'page', mode: 'out-in' },
      layoutTransition: { name: 'layout', mode: 'out-in' }
    },
 
  

  runtimeConfig: {
    authOrigin: 'http://localhost:3000',
    authSecret: 'my-superb-secret',  
  },
  neo4j: {
    uri: process.env.NEO4J_URI,
    auth: {
      type: 'basic', // @default: 'basic'
      username: process.env.NEO4J_USERNAME,
      password:  process.env.NEO4J_PASSWORD
    },
  },
})