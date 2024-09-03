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
      supaBase_Url: process.env.SUPABASE_URL,
      supaBase_Key: process.env.SUPABASE_KEY,
     
    },
   
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false, 
    },
  },



  modules: ['@nuxtjs/supabase'],
 
  supabase: {
    redirect: false
  }

  

 
    


});
