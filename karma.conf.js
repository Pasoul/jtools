// Karma configuration
// Generated on Mon Aug 13 2018 11:55:46 GMT+0800 (CST)
var webpack = require("webpack");
var path = require("path");
var webpackConfig = {
  resolve: {
    extensions: [".js"],
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"test"'
      }
    })
  ],
  devtool: "#inline-source-map"
};
module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["mocha", "chai"],

    // 定义测试和被测代码文件
    // list of files / patterns to load in the browser
    files: ["src/index.js", "test/*.test.js"],

    // list of files / patterns to exclude
    exclude: [],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    // 配置预处理器，哪些文件需要统计测试覆盖率
    preprocessors: {
      "./src/index.js": ["webpack", "sourcemap"],
      "./test/*.js": ["webpack", "sourcemap"]
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    plugins: [
      "karma-chrome-launcher",
      "karma-phantomjs-launcher",
      "karma-phantomjs-shim",
      "karma-mocha",
      "karma-coverage",
      "karma-chai",
      "karma-babel-preprocessor",
      "karma-webpack",
      "karma-sourcemap-loader"
    ],
    client: {
      mocha: {
        opts: "test/mocha.opts"
      }
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // 激活覆盖率报告器
    reporters: ["progress", "coverage"],
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
