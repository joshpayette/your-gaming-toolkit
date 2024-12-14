import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import preserveDirectives from 'rollup-preserve-directives';

export default [
  {
    input: './src/link/index.tsx',
    output: {
      file: 'dist/link.js'
    }
  },
  {
    input: './src/root-layout/index.tsx',
    output: {
      file: 'dist/root-layout.js'
    }
  }
].map(entry => ({
  ...entry,
  external: ['react/jsx-runtime'],
  plugins: [
    typescript(),
    preserveDirectives(),
    postcss({
      plugins: []
    })
  ]
}));
