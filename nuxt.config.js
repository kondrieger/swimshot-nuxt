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
    '~assets/css/base.css',
    '~assets/css/container.css',
    '~assets/css/fonts.css',
    '~assets/css/media.css',
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

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        /* Изменяет url в CSS, чтобы всё корректно собиралось. */
        'postcss-url': true,
        /* Нормализация базовых стилей. Особенность этого плагина в зависимости от Browserslist. */
        'postcss-normalize': true,
        'postcss-custom-media': { importFrom: './assets/css/media.css'},
        /* Позволяет использовать вложенные селекторы, как в SCSS. */
        'postcss-nested': true,
        /* Автоматически конвертирует px в rem, чтобы была возможность указывать величины в пикселях согласно макету и не париться :) */
        'postcss-pxtorem': true,
        /* Позволяет загружать в background svg с возможностью менять его параметры (например, fill) в формате: background-image: svg-load(<путь>, fill: <hex-цвет>); */
        'postcss-inline-svg': true,
      },
      preset: {
        /* Стейджи отключены, так что нужные возможности указываются напрямую, чтобы не тянуть лишний функционал, о котором никто не знает. */
        stage: false,
        /* Возможность использовать диапазоны в медиазапросах. */
        'media-query-ranges': true,
        /* Позволяет использовать множественные селекторы внутри псевдокласса :not() */
        'not-pseudo-class': true,
        /* Позволяет использовать overflow-wrap вместо word-wrap, что считается более корректным. */
        'overflow-wrap-property': true,
        /* В postcss-preset-env встроен autoprefixer, но его актуальность не гарантируется. Мы хотим использовать последнюю версию, которую подключаем отдельно, так что эту отключаем, чтобы она не перекрывала нашу. */
        autoprefixer: true,
      },
    }
  },

  buildModules: [
    '@nuxt/postcss8'
  ]
}
