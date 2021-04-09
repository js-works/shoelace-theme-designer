const path = require('path')

const serveOptions = {
  host: 'localhost',
  port: 55555,
  open: true,
  liveReload: true,
  static: [
    path.resolve(__dirname, './src/dev'),
    path.resolve(__dirname, './dist')
  ]
}

module.exports = {
  entry: ['./src/main/index'],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'shoelace-theme-designer.js',
    path: path.resolve(__dirname, 'public')
  },
  mode: 'production',
  plugins: []
}
