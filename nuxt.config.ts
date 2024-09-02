// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },

  runtimeConfig: {
    public: {
      login: process.env.LOGIN,
      test: process.env.TEST_VAR,
    }
    
  },

  compatibilityDate: '2024-08-21',

  modules: ['@nuxtjs/supabase'],
 
  supabase: {
    redirect: false
  }

  

 
    


});
