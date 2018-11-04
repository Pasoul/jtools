/**
 * 获取默认头像
 * @param {*} userId
 */
export function getDefaultHeader({userId, imageDomain}) {
  if (!imageDomain) return "";
  return imageDomain + "/photo/user_header" + ((userId || 0) % 10) + ".png";
}
