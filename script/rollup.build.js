const fs = require("fs");
const path = require("path");
const rollup = require("rollup");
const uglify = require("uglify-js");
const zlib = require("zlib");
const ora = require("ora");
const chalk = require("chalk");
const copy = require('copy')
const rimraf = require("rimraf");

const rootPath = path.resolve(__dirname, '../')

if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist");
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

function copyJsToLib() {

}

// copy代码到lib目录下
function copyJsToLib() {
  let copying = ora("copying... \n");
  copying.start();
  rimraf(path.resolve(rootPath, "lib/*.js"), (err) => {
    if(err) throw(err);
    let folderList = fs.readdirSync(path.resolve(rootPath, "src"));
    folderList.forEach((item, index) => {
      if (item === '.internal') {
        copy(`src/.internal/*`, path.resolve(rootPath, "lib/.internal"),  (err, files) => {
          if(err) throw err;
        })
      } else if (!/index.js/.test(item)) {
        let folderList1 = fs.readdirSync(path.resolve(rootPath, `src/${item}`));
        folderList1.forEach(itemChild => {
          if (!/index.js/.test(itemChild)) {
            fs.readFile(path.resolve(rootPath, `src/${item}/${itemChild}`), (err,data) => {
              const handleContent = data.toString().replace(/\.\.\/\.internal/g,"./.internal");
              fs.writeFileSync(path.resolve(rootPath, `lib/${itemChild}`), handleContent)
            })
          }
        })
        if (index === folderList.length - 1) {
          console.log(chalk.cyan("Copy complete \n"));
          copying.stop();
        }
      }
    });
  })
}

function getSize(code) {
  return (code.length / 1024).toFixed(2) + "kb";
}

function logError(e) {
  spinner.stop();
  console.log(e);
}
