const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './src/main.js',
    vendors: ['phaser']
  },

  resolve: {
    extensions: ['.js']
  },

  output: {
    filename:
      process.env.NODE_ENV === 'production'
        ? 'app.bundle.[hash].js'
        : 'app.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  mode: 'development',

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|tmx|tsx)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.json$/,
        loader: 'file-loader',
        type: 'javascript/auto'
      }
    ]
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'index.html'),
        to: path.resolve(__dirname, 'dist')
      }
    ]),
    new webpack.DefinePlugin({
      'typeof CANVAS_RENDERER': JSON.stringify(true),
      'typeof WEBGL_RENDERER': JSON.stringify(true)
    })
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};
