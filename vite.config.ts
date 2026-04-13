import { defineConfig } from 'vite-plus'
import { createRunnableDevEnvironment } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/vite-devtools/',
  resolve: { tsconfigPaths: true },
  environments: {
    ssr: {
      dev: { createEnvironment: (name, config) => createRunnableDevEnvironment(name, config) },
    },
  },
  plugins: [
    devtools(),
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true,
      },
    }),
    viteReact(),
  ],
  server: { port: 3000 },

  // Oxlint — Rust-based linter, 50-100x faster than ESLint
  lint: {
    plugins: ['oxc', 'typescript', 'react'],
    options: { typeAware: true },
    rules: {
      'no-console': ['warn', { allow: ['error', 'warn'] }],
    },
  },

  // Oxfmt — Rust-based formatter
  fmt: {
    singleQuote: true,
    semi: false,
    printWidth: 100,
    trailingComma: 'all',
  },

  // Vitest
  test: {
    environment: 'jsdom',
    include: ['src/**/*.test.{ts,tsx}'],
  },

  // Staged-file checks (runs on git commit)
  staged: {
    '*.{ts,tsx,js,jsx}': 'vp check --fix',
  },
})
