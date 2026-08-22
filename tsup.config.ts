import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  clean: false,
  sourcemap: false,
  target: 'es2022',
  external: ['react', 'react-dom'],
})
