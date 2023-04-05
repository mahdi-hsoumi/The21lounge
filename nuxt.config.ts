import IconsResolver from 'unplugin-icons/resolver';
import UnpluginComponentsVite from 'unplugin-vue-components/vite';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // server side rendering mode
  ssr: false,

  // typescripts
  typescript: {
    strict: true,
    typeCheck: true,
  },

  // css
  css: ['~/assets/sass/vendor.scss', '~/assets/sass/app.scss'],

  // plugins
  plugins: [],

  // build
  build: {
    transpile: ['@headlessui/vue'],
  },

  // modules
  modules: [
    'unplugin-icons/nuxt',
    '@pinia/nuxt',
    '@nuxt/content',
    'nuxt-windicss',
  ],

  // experimental features
  experimental: {
    reactivityTransform: false,
  },

  // auto import components
  components: true,

  // vite plugins
  vite: {
    plugins: [
      UnpluginComponentsVite({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
    ],
  },

  // app config
  app: {
    // global transition
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  // windicss
  windicss: {
    analyze: {
      analysis: {
        interpretUtilities: false,
      },
      server: {
        port: 4000,
        open: false,
      },
    },
    scan: true,
  },

  // content
  content: {
    documentDriven: true,
    markdown: {
      mdc: true,
    },
  },
})
