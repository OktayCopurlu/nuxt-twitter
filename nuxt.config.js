export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "twitter-nuxt",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.13.0/css/all.css",
        integrity:
          "sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V",
        crossorigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Source+Code+Pro",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/apollo"],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "https://twitter-server-graphql.herokuapp.com/graphql",
      },
    },
  },
};
