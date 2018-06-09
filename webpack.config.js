const nodeExternals = require('webpack-node-externals');
const path = require('path');

const baseConfig = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  watch: true,
  watchOptions: {
    poll: true,
    aggregateTimeout: 300,
    ignored: /node_modules/,
  },
  module: {
    /* ファイルローダーなどの設定 */
    rules: [
      {
        oneOf: [
          /* Images */
          {
            test: /\.(png|jpe?g)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: 'static/media/[name].[hash:8].[ext]',
                },
              },
            ],
          },
          {
            /* JavaScript */
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  cacheDirectory: true,
                },
              },
            ],
          },
          /* TypeScript */
          {
            test: /\.tsx?$/,
            use: [
              {
                loader: 'ts-loader',
              },
            ],
            exclude: /node_modules/,
          },
          /* SASS */
          {
            test: /\.scss$/,
            use: [
              {
                loader: 'style-loader',
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                },
              },
            ],
            exclude: /node_modules/,
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.css',
      '.scss',
      '.jpeg',
      '.jpg',
      '.png',
    ],
  },
};
const serverConfig = {
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
module.exports = [baseConfig, serverConfig];
