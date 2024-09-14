export default defineNuxtConfig({
  ssr: true,
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
  ],
  build: {
    transpile: ['bootstrap'],
  },

  head: {
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
        type: 'text/javascript',
        defer: true,
      },
    ],
  },
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: 'http://127.0.0.1:8000/',
  },
});


