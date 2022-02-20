const withPWA = require('next-pwa');
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa : {
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/]
  },
  swcMinify: true,
  reactStrictMode: true,
  extentions: ['.js', '.jsx', '.ts', '.tsx']
})
