/**
 * 校验十八位身份证号码
 * @param {*} idcard 身份证号码
 * @return {boolean} 验证结果true/false
 */
Object.defineProperty(exports, "__esModule", { value: true });
function isIDCard(idcard) {
    var reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    return reg.test(idcard);
}
exports.isIDCard = isIDCard;
