## jlb-tools

[![Build Status](https://travis-ci.com/Pasoul/jtools.svg?branch=master)](https://travis-ci.com/Pasoul/jtools)
[![Coverage Status](https://coveralls.io/repos/github/Pasoul/jtools/badge.svg?branch=master)](https://coveralls.io/github/Pasoul/jtools?branch=master)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![Eclipse Marketplace](https://img.shields.io/eclipse-marketplace/dt/notepad4e.svg)](https://www.npmjs.com/package/jib-tools)
![NpmVersion](https://img.shields.io/npm/v/npm.svg)

### Description:

前端 js 工具库: 封装常用的工具函数，如日期格式化、浏览器判断等，提高开发效率

### How to use:

1. 直接下载 `dist` 目录下的 `jtools.min.js` 使用，支持 UMD 通用模块规范
2. 使用 npm 安装

#### 浏览器：

```js
<script src="jtools.min.js"></script>
<script>
    var result = jtools.add(1, 2)
</script>
```

#### npm:

`npm i jlb-tools`

##### 全部加载（webpack、RequireJS、SeaJS 等）：

```js
var jtools = require("jlb-tools");
var result = jtools.add(1, 2);
```

#### 按需加载

```js
import { add } from "jlb-tools";
var result = jtools.add(1, 2);
```

### 扩展

如果你想添加自己的工具库，在 `src` 目录创建文件，对应 `test` 目录添加测试用例，执行 `yarn test`
