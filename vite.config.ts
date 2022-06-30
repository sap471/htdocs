import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import layouts from 'vite-plugin-vue-layouts'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import unocss from 'unocss/vite'
import markdown from 'vite-plugin-vue-markdown'
import markdownItPrism from 'markdown-it-prism'
import markdownItLinkAttributes from 'markdown-it-link-attributes'
import {
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`
    }
  },
  plugins: [
    vue({
      reactivityTransform: true,
      include: [/\.vue$/, /\.md$/]
    }),

    pages({
      extensions: ['vue', 'md']
    }),

    layouts({}),

    autoImport({
      imports: ['vue', 'vue/macros', 'vue-router', '@vueuse/core', '@vueuse/head'],
      dts: 'src/auto-imports.d.ts',
      dirs: ['./src/composables'],
      vueTemplate: true
    }),

    components({
      dts: 'src/components.d.ts',
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
    }),

    unocss({
      rules: [],
      shortcuts: {},
      presets: [
        presetAttributify(),
        presetUno(),
        presetIcons({
          scale: 1.2,
          warn: true,
          collections: {
            // ri: () => import('@iconify-json/ri/icons.json')
          },
          extraProperties: {},
          cdn: 'https://esm.sh/'
        }),
        presetWebFonts({
          provider: 'google',
          fonts: {
            sans: 'Lato',
            mono: ['Fira Code', 'Fira Mono:400,700']
          }
        }),
        presetTypography()
      ],
      transformers: [transformerDirectives(), transformerVariantGroup()],
      safelist: 'prose prose-sm m-auto text-left'.split(' ')
    }),

    markdown({
      wrapperClasses: 'markdown-body prose prose-md text-left m-auto',
      headEnabled: true,
      frontmatter: true,
      markdownItSetup(md) {
        md.use(markdownItPrism)
        md.use(markdownItLinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener'
          }
        })
      }
    })
  ]
})
