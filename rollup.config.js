import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import babel from 'rollup-plugin-babel';

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
    ],
    plugins: [
      typescript(),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
  {
    input: 'src/development.tsx',
    output: [
      {
        file: 'development/development.js',
        format: 'iife'
      }
    ],
    plugins: [
      typescript(),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/env', '@babel/preset-react'],
      })
    ],
  }
];