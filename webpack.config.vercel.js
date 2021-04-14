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
        use: ['raw-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css']
  },
  output: {
    filename: 'shoelace-theme-designer.js',
    path: path.resolve(__dirname, 'public')
  },
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
}
