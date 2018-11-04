import { utf16toEntities } from "../.internal/utf16toEntities";
import { entitiestoUtf16 } from "../.internal/entitiestoUtf16";

/**
 * @description 处理emoji，用于把用utf16编码的字符转换成实体字符
 * @param {string} str 需要编译/转义的字符串
 * @param {string} type encode 编译 decode 转义
 * @returns {string} 编译/转义后的字符串
 */
export function handleEmoji(str = "", type = "encode") {
  if (!str) return "";
  if (type === "encode") {
    return utf16toEntities(str);
  } else if (type === "decode") {
    return entitiestoUtf16(str);
  } else {
    return str;
  }
}
