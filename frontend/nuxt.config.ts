import dotenv from 'dotenv'

dotenv.config()

export default defineNuxtConfig({
  ssr: true,
  modules: [],

  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL || 'http://localhost:8000'
    }
  },

  css: ['bootstrap/dist/css/bootstrap.min.css'],
  build: {
    transpile: ['bootstrap'],
  },
  vite: {
    plugins: [],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "bootstrap";',
        },
      },
    },
  },
  script: [
    {
      src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
      type: 'text/javascript',
      defer: true,
    },
  ],
});