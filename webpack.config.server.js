const path = require('path');
const baseConfig = require('./webpack.config');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  ...baseConfig,
  target: 'node',
  watch: true,
  watchOptions: {
    poll: true,
  },
  node: {
    fs: 'empty',
  },
  externals: [nodeExternals()],
  entry: path.resolve(__dirname, 'src/server/index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.ts$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
            options: {
              configFile: 'tsconfig.server.json',
            },
          },
        ],
      },
    ],
  },
};
