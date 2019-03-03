const webpackResolveConfig = require('./webpack.resolve.config.js');

exports.onCreateWebpackConfig = ({ actions }) =>
  actions.setWebpackConfig(webpackResolveConfig);
