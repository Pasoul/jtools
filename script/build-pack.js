const { resolve } = require("path");
const ora = require("ora");
const rm = require("rimraf");
const chalk = require("chalk");
const webpack = require("webpack");

const config = require("./webpack.conf");
const pkg = require("../package.json");
const rootPath = resolve(__dirname, "../");

// 构建压缩包
let spinner = ora("building...").start();
// terminal spinner
spinner.color = "yellow";

rm(resolve(rootPath, "min", `${pkg.name}.min.js`), err => {
  if (err) throw err;
  webpack(config, function(err, stats) {
    if (err) throw err;
    spinner.stop();
    // 拿到stats打包状态，对打包的配置化
    process.stdout.write(
      stats.toString({
        colors: true, //  让打包的时候有颜色
        modules: false, // 去掉内置模块信息
        children: false, // 去掉子模块
        chunks: false, // 增加包信息（设置为 false 能允许较少的冗长输出）
        chunkModules: false // 去除包里内置模块的信息
      }) + "\n\n"
    );
    console.log(chalk.cyan("  Build complete.\n"));
  });
});
