// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserlist" field in package.json
    "autoprefixer": {
      browsers: ['ie>= 8', 'iOS >= 7', 'Android >= 4.1']
    },
    'postcss-pxtorem': {
      rootValue: 100,
      unitPrecision: 8,
      propWhiteList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    }
  }
}
