const path = require("path");
const PROJECT_ROOT = path.resolve(__dirname);


module.exports = function (config) {
  config.set({
    browsers: ["ChromeHeadless"],
    concurrency: Infinity,
    debug: true,
    files: ["test/index.js"],
    frameworks: ["jasmine"],
    preprocessors: {
      "app/scripts/**/*.js": ["webpack", "sourcemap"],
      "test/index.js": ["webpack", "sourcemap"]
    },
    reporters: ["spec", "tap"],
    specReporter: {
      suppressPassed: true,
      suppressSkipped: true
    },
    tapReporter: {
      disableStdout: true,
      outputFile: "tests.tap"
    },
    webpack: require(path.join(PROJECT_ROOT, "webpack.test.js")),
    webpackMiddleware: {
      stats: "errors-only"
    }
  });
};