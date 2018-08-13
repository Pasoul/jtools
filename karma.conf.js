// Karma configuration
// Generated on Mon Aug 13 2018 11:55:46 GMT+0800 (CST)

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["mocha", "chai"],

    // 定义测试和被测代码文件
    // list of files / patterns to load in the browser
    files: ["dist/*.min.js", "test/*.test.js"],

    // list of files / patterns to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    // 配置预处理器，哪些文件需要统计测试覆盖率
    // 因为测试文件我们通过obj[key]的方式调用方法，这里统计打包好的min.js，框架会为我们引入obj
    // preprocessors: {
    //   "dist/*.min.js": "coverage"
    // },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // 激活覆盖率报告器
    reporters: ["progress", "coverage"],
    // optionally, configure the reporter
    // coverageReporter: {
    //   reporters: [
    //     {
    //       type: "html",
    //       dir: "coverage/",
    //       subdir: "."
    //       // Would output the results into: .'/coverage/'
    //     },
    //     {
    //       // 这就是Codecov支持的文件类型
    //       type: "cobertura",
    //       subdir: ".",
    //       dir: "coverage/"
    //     }
    //   ]
    // },
    coverageReporter: {
      type: "lcov",
      dir: "coverage/",
      subdir: "."
      // Would output the results into: .'/coverage/'
    },
    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // , "Chrome"
    browsers: ["PhantomJS"],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
