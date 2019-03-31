Object.defineProperty(exports, "__esModule", { value: true });
var utf16toEntities_1 = require("./_internal/utf16toEntities");
var entitiestoUtf16_1 = require("./_internal/entitiestoUtf16");
/**
 * @description 处理文本，客户端无法识别h5的br标签和空格符，因此需要处理br标签为\n和空格符为 ''
 * @param {string} str 需要编译/转义的字符串
 * @param {string} type encode 编译 decode 转义
 * @returns {string} 编译/转义后的字符串
 * @example
 * handleText("<br>&nbsp;&lt;&gt;", "encode") => "\n <>"
 * handleText("\n <>", "decode") => "<br>&nbsp;&lt;&gt;"
 */
function handleText(str, type) {
    if (str === void 0) { str = ""; }
    if (type === void 0) { type = "encode"; }
    if (!str)
        return "";
    if (typeof str !== "string") {
        console.error("handleText数据类型需要是字符串类型");
        return str;
    }
    /* eslint-disable no-unused-vars */
    var newStr = null;
    if (type === "encode") {
        newStr = entitiestoUtf16_1.entitiestoUtf16(str)
            .replace(/<br>/gi, "\n")
            .replace(/&nbsp;/g, " ")
            .replace("&lt;", "<")
            .replace("&gt;", ">");
    }
    else if (type === "decode") {
        newStr = utf16toEntities_1.utf16toEntities(str)
            .replace("<", "&lt;")
            .replace(">", "&gt;")
            .replace(/\n|\r\n/g, "<br>")
            .replace(/[ ]/g, "&nbsp;");
    }
    else {
        return str;
    }
    return newStr;
}
exports.handleText = handleText;
