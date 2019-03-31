Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 获取默认头像
 * @param {*} userId
 */
function getDefaultAvatar(_a) {
    var _b = _a === void 0 ? { userId: 0, imageDomain: "" } : _a, userId = _b.userId, imageDomain = _b.imageDomain;
    if (!imageDomain)
        return "";
    return imageDomain + "/photo/user_header" + ((userId || 0) % 10) + ".png";
}
exports.getDefaultAvatar = getDefaultAvatar;
