const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { WebpackPluginServe: Serve } = require('webpack-plugin-serve')

const serveOptions = {
  host: 'localhost',
  port: 55555,
  open: true,
  liveReload: true,
  static: [
    path.resolve(__dirname, './public'),
    path.resolve(__dirname, './dist')
  ]
}

module.exports = {
  entry: [
    'webpack-plugin-serve/client', // ← important: this is required, where the magic happens in the browser
    './src/main/index'
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['raw-loader' /*, 'css-loader'*/]
      }
      /*
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
          'scss-loader'
        ]
      }
      */
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css']
  },
  output: {
    filename: 'shoelace-theme-designer.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),

    new Serve(serveOptions)
  ],
  watch: true // ← important: webpack and the server will continue to run in watch mode
}
