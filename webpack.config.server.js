const path = require('path');
const baseConfig = require('./webpack.config');

module.exports = {
  ...baseConfig,
  target: 'node',
  node: {
    fs: 'empty',
  },
  entry: path.resolve(__dirname, 'src/server/index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
  }
}