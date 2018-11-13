/**
 * 检查是否为正确手机号 1开头11位数字
 * @param {*} value 正则校验变量
 * @return {boolean} 正则校验结果
 */
function isMobile(value) {
  return /^[1][0-9]{10}$/.test(value);
}
module.exports = isMobile;
