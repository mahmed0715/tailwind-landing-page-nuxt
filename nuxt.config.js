export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{rel:"stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/lato-font/3.0.0/css/lato-font.min.css", integrity:"sha512-rSWTr6dChYCbhpHaT1hg2tf4re2jUxBWTuZbujxKg96+T87KQJriMzBzW5aqcb8jmzBhhNSx4XYGA6/Y+ok1vQ==", crossorigin:"anonymous"},{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
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
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    "@nuxtjs/svg"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-svg-loader'],
  purgeCSS: {
    whitelist: ['hidden'],
    whitelistPatterns: [/md:w-[1-6]/]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      loaders: {
        file: {
          esModule: false
        }
      }
    }
  }
}
