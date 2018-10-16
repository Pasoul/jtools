/**
 * 图像处理
 * @param {string} src - 处理源路径
 * @param {string} type - 处理类型 2:图片 4:视频
 * @param {string} payload - 负载参数: https://help.aliyun.com/document_detail/44688.html?spm=a2c4g.11186623.6.1148.4d7d176cZS0ozx
 * @param {boolean} ifSelf - 返回源路径
 * @param {string} ossdomain - 图片对应的oss域名
 * @returns {string} 处理后的图片路径
 */

export function getThumbnails(
  src,
  type,
  payload = {
    width: 750
  },
  ifSelf,
  ossdomain = "https://images2.bestjlb.com/"
) {
  if (!src) return;
  if (src.indexOf(ossdomain) > -1) {
    return src.indexOf("v2jlboss") > -1 ? handleoss(true) : handleoss();
  } else {
    if (src.indexOf("jlboss") > -1) {
      return ossdomain + handleoss();
    } else if (src.indexOf("v2jlboss") > -1) {
      return ossdomain + handleoss(true);
    }
  }
  return src;

  function handleoss(oss) {
    if (src.indexOf("?") > -1) return;
    if (type === 2 && !ifSelf) {
      return `${src}?x-oss-process=image/resize,w_${payload.width}/auto-orient,1`;
    } else if (type === 4 && !ifSelf) {
      if (oss) {
        return `${src}.jpeg?x-oss-process=image/format,jpg/resize,w_${payload.width}/auto-orient,1`;
      } else {
        return `${src}?x-oss-process=video/snapshot,t_1000,w_${payload.width}`;
      }
    } else {
      return src;
    }
  }
}
