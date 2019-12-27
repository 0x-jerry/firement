const terser = require('rollup-plugin-terser').terser
const resolve = require('@rollup/plugin-node-resolve')
const ts2 = require('rollup-plugin-typescript2')
const commonjs = require('@rollup/plugin-commonjs')

const isProd = process.env.NODE_ENV === 'production'

/**
 * @type {import('rollup').RollupOptions}
 */
module.exports = {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/main.js',
      name: 'Firement',
      format: 'umd',
      globals: isProd ? { firebase: 'firebase' } : {},
      plugins: isProd ? [terser()] : [],
      sourcemap: isProd,
      sourcemapFile: 'build.map.js'
    }
  ],
  external: ['firebase'],
  plugins: [
    commonjs(),
    resolve({
      browser: true
    }),
    ts2()
  ]
}
