export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Swim shot | Школа плавания в Зеленограде и Москве',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Научим плавать вас и вашего ребенка. Лучшие тренеры. Групповые и индивидуальные занятия. Пробная тренировка со скидкой 75%' },
      { hid: 'keywords', name: 'keywords', content: 'плавание, школа, детей, взрослых, тренер, дружинин, давыдов, астапов, касандра, зеленоград, москва, тренировки, плавать, научиться, swimshot, swim, shot, свимшот, свим, шот' },
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
    '~assets/css/base.css',
    '~assets/css/container.css',
    '~assets/css/fonts.css',
    '~assets/css/properties.css',
    '~assets/css/spacing.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/slide-menu', ssr: false },
    { src:  '~plugins/main', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/gtm',
    'nuxt-svg-loader',
    '@nuxt/image',
    [
      'nuxt-mq',
      {
        // Default breakpoint for SSR
        defaultBreakpoint: 'tablet',
        breakpoints: {
          tablet: 960,
          desktopXl: Infinity,
        }
      }
    ]
  ],

  // Google Tag Manager
  gtm: {
    id: 'GTM-N5XZZBJ'
  },

  loading: {
    color: '#29b1ff',
    height: '5px !important'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-url': true,
        'postcss-normalize': true,
        'postcss-custom-media': { importFrom: './assets/css/media.css'},
        'postcss-nested': true,
        'postcss-pxtorem': true,
        'postcss-inline-svg': true,
        'autoprefixer': true,
      },
    }
  },

  buildModules: [
    '@nuxt/postcss8',
  ],
}
