import { utf16toEntities } from "../.internal/utf16toEntities";
import { entitiestoUtf16 } from "../.internal/entitiestoUtf16";

/**
 * @description 处理文本，客户端无法识别h5的br标签和空格符，因此需要处理br标签为\n和空格符为 ''
 * @param {string} str 需要编译/转义的字符串
 * @param {string} type encode 编译 decode 转义
 * @returns {string} 编译/转义后的字符串
 */
export function handleText(str = "", type = "encode") {
  if (!str) return "";
  let newStr = null;
  if (type === "encode") {
    newStr = entitiestoUtf16(str)
      .replace(/<br>/gi, "\n")
      .replace(/&nbsp;/g, " ")
      .replace("&lt;", "<")
      .replace("&gt;", ">");
  } else if (type === "decode") {
    newStr = utf16toEntities(str)
      .replace("<", "&lt;")
      .replace(">", "&gt;")
      .replace(/\n|\r\n/g, "<br>")
      .replace(/[ ]/g, "&nbsp;");
  }
  return newStr;
}
