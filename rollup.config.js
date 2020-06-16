import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import ts2 from 'rollup-plugin-typescript2'
import serve from 'rollup-plugin-serve'
import reload from 'rollup-plugin-livereload'

const isProd = process.env.NODE_ENV === 'production'

const devPlugins = isProd
  ? []
  : [
      serve(),
      reload({
        watch: 'dist',
        verbose: false, // Disable console output
      }),
    ]

/**
 * @type {import('rollup').RollupOptions}
 */
module.exports = {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/firement.esm.js',
      name: 'Firement',
      format: 'esm',
      plugins: isProd ? [terser()] : [],
      sourcemap: isProd,
      sourcemapFile: 'build.map.js',
    },
  ],
  plugins: [
    commonjs(),
    resolve({
      browser: true,
    }),
    ts2(),
  ].concat(devPlugins),
}
