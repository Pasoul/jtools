function utf16toEntities(str) {
  if (!str) return "";
  var patt = /[\ud800-\udbff][\udc00-\udfff]/g;
  // 检测utf16字符正则
  str = str.replace(patt, function(char) {
    var H, L, code;
    if (char.length === 2) {
      H = char.charCodeAt(0);
      // 取出高位
      L = char.charCodeAt(1);
      // 取出低位
      code = (H - 0xd800) * 0x400 + 0x10000 + L - 0xdc00;
      // 转换算法
      return "&#" + code + ";";
    } else {
      return char;
    }
  });
  return str;
}

function entitiestoUtf16(str) {
  if (!str) return;
  // 检测出形如&#12345;形式的字符串
  var strObj = handleEmoji.utf16toEntities(str);
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

/**
 * @description 处理emoji，用于把用utf16编码的字符转换成实体字符
 * @param {string} str 需要编译/转义的字符串
 * @param {string} type encode 编译 decode 转义
 * @returns {string} 编译/转义后的字符串
 */
export function handleEmoji(str = "", type = "encode") {
  if (type === "encode") {
    return utf16toEntities(str);
  } else if (type === "decode") {
    return entitiestoUtf16(str);
  } else {
    return str;
  }
}
