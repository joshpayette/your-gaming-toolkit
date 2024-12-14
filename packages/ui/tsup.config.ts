import { defineConfig, type Options } from 'tsup';
import { classModules } from 'esbuild-plugin-class-modules';

export default defineConfig((options: Options) => ({
  entry: ['./src/root-layout/index.tsx', './src/link/index.tsx'],
  format: ['cjs', 'esm'],
  external: ['react'],
  banner: {
    js: "'use client'"
  },
  loader: {
    '.css': 'local-css'
  },
  esbuildPlugins: [classModules()],
  ...options
}));
