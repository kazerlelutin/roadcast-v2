import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [

    tsconfigPaths(),
    preact({
      prerender: {
        enabled: true,
        renderTarget: '#app',
        additionalPrerenderRoutes: ['/404'],
        previewMiddlewareEnabled: true,
        previewMiddlewareFallback: '/404',
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: new URL('./src', import.meta.url).pathname,
      },
    ],
  },
  //@ts-ignore
  test: {
    globals: true,
    pool: 'forks',
    environment: 'jsdom',
    setupFiles: ['./__tests__/units/setupTests.js'],
    exclude: ['node_modules', '__tests__/e2e', '__tests__/step-definitions'],
    server: {},
    coverage: {
      provider: 'istanbul',
      reporter: [
        ['text', { file: 'coverage.txt' }],
        ['text-summary', { file: 'coverage-summary.txt' }],
        'html',
      ],
      reportOnFailure: true,
      reportsDirectory: './coverage',
      include: ['src/'],
      exclude: ['node_modules/', '__tests__/'],
    },
  },
})
