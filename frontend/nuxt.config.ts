export default {
  ssr: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "frontend",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Env: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-env/
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
    appName: process.env.VUE_APP_NAME,
    apiUrl: `http://${process.env.VUE_APP_DOMAIN}`,
  },

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
  ],
  build: {
    transpile: ['bootstrap'],
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "bootstrap";',
        },
      },
    },
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

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    //'@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},


  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},
}