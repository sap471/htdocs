// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: 'fade',
      mode: 'out-in'
    }
  },

  modules: ['@unocss/nuxt', '@vueuse/nuxt', '@pinia/nuxt'],

  css: ['@unocss/reset/tailwind.css', 'uno.css'],

  imports: {
    dirs: ['stores']
  },

  nitro: {
    static: true
  }
})
