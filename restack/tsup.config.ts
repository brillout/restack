import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    './renderer/+onRenderHtml.tsx',
    './renderer/+onRenderClient.tsx',
    './renderer/+config.ts',
    './renderer/+passToClient.ts',
    './renderer/+onPageTransitionStart.ts',
    './renderer/+onPageTransitionEnd.ts',
    "./pages/test/+config.ts",
    "./pages/test/+Page.tsx",
    './components/usePageContext.tsx',
    './cli/index.ts',
    './index.ts'
  ],
  format: 'esm',
  clean: true,
  // sourcemap: true,
  dts: true
})
