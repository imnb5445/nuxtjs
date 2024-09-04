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
      supaBase_Url: "https://ehkuhspixiclvrzyeshh.supabase.co",
      supaBase_Key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoa3Voc3BpeGljbHZyenllc2hoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ2Mzc1NjQsImV4cCI6MjA0MDIxMzU2NH0.K3AXi_1QZ61ZIWkay4TM98kxHLq6rTYDJ7k2gNjvjT8",

      
     
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
    redirect: false,
    key: process.env.SUPABASE_KEY,
    url: process.env.SUPABASE_URL
  }

  

 
    


});
