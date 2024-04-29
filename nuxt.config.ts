// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: 'fade',
      mode: 'out-in'
    }
  },

  modules: ['@unocss/nuxt', '@vueuse/nuxt', '@nuxtjs/color-mode'],

  css: ['@unocss/reset/tailwind.css', 'uno.css'],

  colorMode: {
    classSuffix: ''
  },

  nitro: {
    static: true
  }
})
