import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import '~/styles/main.css'
import 'uno.css'

const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(App, { routes, base: import.meta.env.BASE_URL }, (ctx) => {
  // auto import modules from './modules', this from vitesse :)
  Object.values(import.meta.globEager('./modules/*.ts')).forEach((i) => i.install?.(ctx))
})
