const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (angularWebpackConfig, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options);

  // Feel free to modify this webpack config however you'd like to
  return {
    ...singleSpaWebpackConfig,

    externals: {
      "rxjs": "rxjs",
      "zone.js": "zone.js",
      "@angular/core": {
        commonjs2: null,
        commonjs: null,
        amd: null,
        root: ['ng', 'core'] // indicates global variable
      },
      "@angular/common": {
        commonjs2: null,
        commonjs: null,
        amd: null,
        root: ['ng', 'common'] // indicates global variable
      },
      "@angular/platform-browser": {
        commonjs2: null,
        commonjs: null,
        amd: null,
        root: ['ng', 'platformBrowser'] // indicates global variable
      },
      "@angular/platform-browser-dynamic": {
        commonjs2: null,
        commonjs: null,
        amd: null,
        root: ['ng', 'platformBrowserDynamic'] // indicates global variable
      },
      "@angular/compiler": {
        commonjs2: null,
        commonjs: null,
        amd: null,
        root: ['ng', 'compiler'] // indicates global variable
      },
      "@angular/router": {
        commonjs2: null,
        commonjs: null,
        amd: null,
        root: ['ng', 'router'] // indicates global variable
      }
    },
  };
};
