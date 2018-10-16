/**
 * @description 检查是否为特殊字符
 * @author pengyong
 * @param {string} value 正则校验的变量
 * @returns {boolean} 正则校验结果
 */
export function isSpecialChar(value) {
  var regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]\s]/im;
  var regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]\s]/im;

  return regEn.test(value) || regCn.test(value);
}
