// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    ApiKey: process.env.SUPABASE_KEY, // Keep this secret
    public: {
    ApiUrl: process.env.SUPABASE_URL // Publicly accessible
    }
  },

  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },

  compatibilityDate: '2024-08-21',

  modules: ['@nuxtjs/supabase'],
 
 
    


});

// IMAnoob133$
// SUPABASE_URL="https://ehkuhspixiclvrzyeshh.supabase.co"
// SUPABASE_KEY="<eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoa3Voc3BpeGljbHZyenllc2hoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ2Mzc1NjQsImV4cCI6MjA0MDIxMzU2NH0.K3AXi_1QZ61ZIWkay4TM98kxHLq6rTYDJ7k2gNjvjT8>"
