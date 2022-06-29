import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import '~/styles/main.css'
import 'uno.css'
import { createHead } from '@vueuse/head'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(generatedRoutes)
})
const head = createHead()

app.use(router)
app.use(head)
app.mount('#app')

export default app
