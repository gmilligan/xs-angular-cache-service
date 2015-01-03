// Karma configuration
// Generated on Wed Dec 03 2014 11:17:31 GMT-0500 (EST)

module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    //browsers: ['Chrome', 'Firefox'],
    //browsers: ['Chrome'],
    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher'
      //'karma-chrome-launcher'
    ],
    files: [
      'vendor/angular/angular.js',
      'vendor/angular-mocks/angular-mocks.js',
      'src/xs-angular-cache-service.js',
      'test/test-app.js',
      'test/test-helper.js',
      'test/spec/*.spec.js'
    ],
    exclude: [],
    preprocessors: {},
    captureTimeout: 60000,
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true
  });
};
