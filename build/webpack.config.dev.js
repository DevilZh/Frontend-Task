const webpack = require('webpack')
const common = require('./webpack.config.base.js')
const merge = require('webpack-merge')

const devConfig = {
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              module: true,
              localIdentName: '[path][name]__[local]'
            }
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              module: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    inline: true,
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = merge(common, devConfig)
