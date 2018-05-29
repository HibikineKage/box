const config = require('./webpack.config');

module.exports = config.map(c => ({
  ...c,
  mode: 'production',
  watch: false,
}));
