var utf16toEntities = require("./utf16toEntities")
/**
 * 实体字符转utf16字符串
 * @param {*} str 待解析的字符串
 */
function entitiestoUtf16(str) {
  if (!str) return "";
  if (typeof str !== "string") {
    console.error("需要解析的数据类型需要是字符串类型");
    return str;
  }
  // 检测出形如&#12345;形式的字符串
  var strObj = utf16toEntities(str);
  var patt = /&#\d+;/g;
  var H, L, code;
  var arr = strObj.match(patt) || [];
  for (var i = 0; i < arr.length; i++) {
    code = arr[i];
    code = code.replace("&#", "").replace(";", "");
    // 高位
    H = Math.floor((code - 0x10000) / 0x400) + 0xd800;
    // 低位
    L = ((code - 0x10000) % 0x400) + 0xdc00;
    code = "&#" + code + ";";
    var s = String.fromCharCode(H, L);
    strObj = strObj.replace(code, s);
  }
  return strObj;
}
module.exports = entitiestoUtf16;