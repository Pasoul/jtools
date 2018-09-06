// 0 忽略 1 警告 2 错误
module.exports = {
  extends: "standard",
  rules: {
    // 关闭 eslint 强制单引号
    quotes: 0,
    // 强制使用分号结尾
    semi: ["error", "always"],
    // function() {} 括号前不要加空格
    "space-before-function-paren": ["error", "never"]
  }
};
