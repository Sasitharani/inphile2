const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.plugins.push(new NodePolyfillPlugin());
    return config;
  },
};
