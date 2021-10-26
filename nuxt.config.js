export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Swim shot школа плавания',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Swim shot школа плавания для детей и взрослых в Зеленограде и Москве' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'},
      {src: 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&onload=InitMap'},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/slide-menu', ssr: false },
    { src:  '~plugins/main.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/gtm',
    'nuxt-svg-loader',
    [
      'nuxt-mq',
      {
        // Default breakpoint for SSR
        defaultBreakpoint: 'sm',
        breakpoints: {
          mobile: 360,
          mobileLg: 640,
          tablet: 960,
          desktop: 1280,
          desktopLg: 1600,
          desktopXl: 1900,
        }
      }
    ]
  ],

  // Google Tag Manager
  gtm: {
    id: 'GTM-N5XZZBJ'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
