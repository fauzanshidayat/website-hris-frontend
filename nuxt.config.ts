// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-auth-sanctum',
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  sanctum: {
  baseUrl: 'http://localhost:8000',
  origin: 'http://localhost:3000',
  mode: 'cookie',
  endpoints: {
    csrf: '/sanctum/csrf-cookie',
    login: '/login',
    logout: '/logout',
    user: '/api/user',
  },
  csrf: {
    cookie: 'XSRF-TOKEN',
    header: 'X-XSRF-TOKEN',
  },
  client: {
     
    initialRequest: true,
  },
},
})