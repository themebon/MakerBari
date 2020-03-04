export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],

    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Muli:400,500,700,800|Lato:300,400,700,900"
      },

      { rel: "stylesheet", href: "css/bootstrap.min.css" },
      { rel: "stylesheet", href: "css/fontawesome.min.css" },
      { rel: "stylesheet", href: "css/font-awesome.min.css" },
      { rel: "stylesheet", href: "css/magnific-popup.css" },
      { rel: "stylesheet", href: "css/animate.min.css" },
      { rel: "stylesheet", href: "css/mobiriseicons.css" },
      { rel: "stylesheet", href: "css/owl.carousel.min.css" },
      { rel: "stylesheet", href: "css/themify-icons.css" },
      { rel: "stylesheet", href: "css/style.css" }
    ],

    script: [
      { src: "/js/jquery-min.js", type: "text/javascript" },
      { src: "/js/jquery.magnific-popup.min.js", type: "text/javascript" },
      { src: "/js/bootstrap.min.js", type: "text/javascript" },
      { src: "/js/owl.carousel.min.js", type: "text/javascript" },
      { src: "/js/appear.js", type: "text/javascript" },
      { src: "/js/plugins.js", type: "text/javascript" },
      { src: "/js/popper.min.js", type: "text/javascript" }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#f20930" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
