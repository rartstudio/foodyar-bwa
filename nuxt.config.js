export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'foodyar-bwa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href:'https://fonts.gstatic.com'},
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap'}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'aos/dist/aos.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/aos', mode: 'client'},
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
