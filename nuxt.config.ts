// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },

  compatibilityDate: '2024-08-21',

  modules: ['@nuxtjs/supabase'],
 
  supabase: {
    redirect: false
  }

 
    


});
