/** @type {import('next').NextConfig} */
stylexPlugin = require('@stylexjs/nextjs-plugin')
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
}
module.exports = stylexPlugin({
  useCSSLayers: true,
  rootDir: __dirname,
})(nextConfig)
