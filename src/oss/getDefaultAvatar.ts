/**
 * 获取默认头像
 * @param {*} userId
 */
function getDefaultAvatar({ userId, imageDomain } = { userId: 0, imageDomain: "" }) {
  if (!imageDomain) return "";
  return imageDomain + "/photo/user_header" + ((userId || 0) % 10) + ".png";
}

export { getDefaultAvatar };
