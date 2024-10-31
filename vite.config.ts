import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

import type { InlineConfig } from 'vitest'
import type { UserConfig } from 'vite'

// https://vite.dev/config/
type ViteConfig = UserConfig & { test: InlineConfig }
const config: ViteConfig = {
  base: './',
  plugins: [vue(), vueJsx(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],

    globals: true,
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    server: {
      deps: {
        inline: ['@vue', '@vueuse', 'vue-demi', '@testing-library/jest-dom'],
      },
    },
  },
}
export default defineConfig(config)
