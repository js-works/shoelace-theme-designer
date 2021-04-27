const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: ['./src/main/index'],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg$/i,
        type: 'asset/inline'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css', '.svg']
  },
  output: {
    filename: 'shoelace-theme-designer.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production',
  devtool: false,
  optimization: {},
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
}
