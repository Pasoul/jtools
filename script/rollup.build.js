const fs = require("fs");
const path = require("path");
const rollup = require("rollup");
const uglify = require("uglify-js");
const zlib = require("zlib");
const ora = require("ora");
const chalk = require("chalk");
const copy = require('copy')
const rimraf = require("rimraf");
const gulp = require("gulp");
const ts = require("gulp-typescript");
const insert = require('gulp-insert');
const rename = require("gulp-rename");

const rootPath = path.resolve(__dirname, '../')

if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist");
}
if (!fs.existsSync("lib")) {
  fs.mkdirSync("lib");
}

// 构建压缩包
let spinner = ora("building...").start();
// terminal spinner
spinner.color = "yellow";

let builds = require("./rollup.conf.js").getAllBuilds();

build(builds);

// 根据代码运行环境进行打包
function build(builds) {
  let built = 0;
  const total = builds.length;
  const next = () => {
    buildEntry(builds[built])
      .then(() => {
        built++;
        if (built < total) {
          next();
        } else {
          spinner.stop();
          copyJsToLib();
        }
      })
      .catch(logError);
  };
  next();
}

// 构建打包任务
function buildEntry(config) {
  const output = config.output;
  const { file, banner } = output;
  const isProd = /min\.js$/.test(file);
  return rollup
    .rollup(config)
    .then(bundle => bundle.generate(output))
    .then(({ code }) => {
      if (isProd) {
        var minified = (banner ? banner + "\n" : "") + uglify.minify(code).code;
        return write(file, minified, true);
      } else {
        return write(file, code);
      }
    });
}

// 向dist目录写入打包好的文件，如果是min.js，则启用gzip
function write(dest, code, zip) {
  return new Promise((resolve, reject) => {
    function report(extra) {
      console.log(chalk.blue("\n" + path.relative(process.cwd(), dest)) + " " + getSize(code) + (extra || ""));
      resolve();
    }

    fs.writeFile(dest, code, err => {
      if (err) return reject(err);
      if (zip) {
        zlib.gzip(code, (err, zipped) => {
          if (err) return reject(err);
          report(" (gzipped: " + getSize(zipped) + ")");
        });
      } else {
        report();
      }
    });
  });
}

// copy代码到lib目录下
function copyJsToLib() {
  var tsProject = ts.createProject('tsconfig.json');
  gulp.task("compile-ts", () => {
    return tsProject.src()
        .pipe(insert.transform((content, file) => {
          if (content.search('../_internal') > -1) {
            content = content.replace(/\.\.\/\_internal/g,"./_internal");
          }
          return content;
        }))
        .pipe(rename(function(path) {
          // 更改模块路径，eg: transfer/handleEmoji
          if (path.dirname !== '_internal') {
            path.dirname = '';
          }
        }))
        .pipe(tsProject())
        // path.resolve(rootPath, "lib")
        .js.pipe(gulp.dest("lib"));
  });
  gulp.start("compile-ts");
  // 删除构建冗余项
  if (fs.existsSync(".rpt2_cache")) {
    rimraf(".rpt2_cache", () => {})
  }
}

function getSize(code) {
  return (code.length / 1024).toFixed(2) + "kb";
}

function logError(e) {
  spinner.stop();
  console.log(e);
}
