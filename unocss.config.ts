import { defineConfig } from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'
import presetWebFonts from '@unocss/preset-web-fonts'

export default defineConfig({
  rules: [],
  shortcuts: {},
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons({
      scale: 1.2,
      warn: true,
      cdn: 'https://esm.sh/',
      collections: {
        mdi: () => import('@iconify-json/mdi/icons.json')
      },
      extraProperties: {}
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Lato',
        mono: ['Fira Code', 'Fira Mono:400,700']
      }
    })
  ]
})
