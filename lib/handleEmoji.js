Object.defineProperty(exports, "__esModule", { value: true });
var utf16toEntities_1 = require("./_internal/utf16toEntities");
var entitiestoUtf16_1 = require("./_internal/entitiestoUtf16");
/**
 * @description 处理emoji，用于把用utf16编码的字符转换成实体字符
 * @param {string} str 需要编译/解析的字符串
 * @param {string} type encode 编译 decode 转义
 * @returns {string} 编译/解析后的字符串
 * @example
 * handleEmoji("😃", "encode") => "&#128515;"
 * handleEmoji("&#128522;", "decode") => "😊"
 */
function handleEmoji(str, type) {
    if (str === void 0) { str = ""; }
    if (type === void 0) { type = "encode"; }
    if (!str)
        return "";
    if (typeof str !== "string") {
        console.error("handleEmoji数据类型需要是字符串类型");
        return str;
    }
    if (type === "encode") {
        return utf16toEntities_1.utf16toEntities(str);
    }
    else if (type === "decode") {
        return entitiestoUtf16_1.entitiestoUtf16(str);
    }
    else {
        return str;
    }
}
exports.handleEmoji = handleEmoji;
