const path = require('path');

module.exports = {
  css: {
    sourceMap: true,
  },
  devServer: {
    host: '0.0.0.0',
    port: 6044, // CHANGE YOUR PORT HERE!
    https: false,
    hotOnly: false,
  },
  pages: {
    index: {
      entry: 'dev/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  chainWebpack: config => {
    config.optimization.splitChunks(false);
    config.merge({ devtool: 'source-map' });
    config.resolve.symlinks(false);
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'));
    config.resolve.alias.set('tests', path.resolve(__dirname, 'tests'));
  },
};
