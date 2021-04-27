const path = require('path')
const config = require('./webpack.config')

const output = config.output
const newOutput = { ...output, path: path.resolve(__dirname, 'public') }
const newConfig = { ...config, output: newOutput }

module.exports = newConfig
