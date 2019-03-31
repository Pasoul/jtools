Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 删除对象里面value值为null的键值对
 * @param {*} obj 需要处理的参数
 * @return {object} 返回结果
 */
function handleParam(obj) {
    if (obj === void 0) { obj = {}; }
    if (JSON.stringify(obj) === "{}")
        return {};
    var res = {};
    var arr = Object.keys(obj);
    arr.forEach(function (item) {
        if (obj[item] !== null) {
            res[item] = obj[item];
        }
    });
    return res;
}
exports.handleParam = handleParam;
