/*!
 * jtools v0.0.2
 * jlb web team
 */
/**
 * @description 两个数字详解
 * @param {Number} a 数字a
 * @param {Number} b 数字b
 * @return {Number} 两个数字相加结果
 */
var add = function add(a, b) {
  return a + b;
};

var decrease = function decrease(a, b) {
  return a - b;
};

/**
 * @description 检查是否为特殊字符
 * @author pengyong
 * @param {*} value 正则校验的变量
 * @returns {Boolean} 正则校验结果
 */
function isSpecialChar(value) {
  var regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]\s]/im;
  var regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]\s]/im;
  return regEn.test(value) || regCn.test(value);
}

export { add, decrease, isSpecialChar };
