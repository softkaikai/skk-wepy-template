const merge = require('webpack-merge');

var prod = process.env.NODE_ENV === 'production'

const baseConfig = require('./build/wepy.base')
const devConfig = require('./build/wepy.dev');
const proConfig = require('./build/wepy.pro');

let allConfig = prod ? merge(baseConfig, proConfig) : merge(baseConfig, devConfig);

module.exports = allConfig;
