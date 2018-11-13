/**
 * 检查是否是emoji表情
 * @param {*} value 正则校验变量
 * @return {boolean} 正则校验结果 true: 是emoji表情 false: 不是emoji表情
 */
function isEmoji(value) {
  var arr = ["\ud83c[\udf00-\udfff]", "\ud83d[\udc00-\ude4f]", "\ud83d[\ude80-\udeff]"];
  return new RegExp(arr.join("|"), "g").test(value);
};
module.exports = isEmoji;
