import { defineConfig, type Options } from 'tsup';
import CssModulesPlugin from 'esbuild-css-modules-plugin';

export default defineConfig((options: Options) => ({
  entry: [
    './src/layouts/root-layout/index.tsx',
    './src/link/index.tsx',
    './src/counter-button/index.tsx'
  ],
  format: ['cjs', 'esm'],
  external: ['react'],
  // banner: {
  //   js: "'use client'",
  // },
  loader: {
    '.css': 'local-css'
  },
  esbuildPlugins: [
    CssModulesPlugin({
      // @see https://github.com/indooorsman/esbuild-css-modules-plugin/blob/main/index.d.ts for more details
      force: true,
      emitDeclarationFile: true,
      localsConvention: 'camelCaseOnly',
      namedExports: true,
      inject: false
    })
  ],
  ...options
}));
