/**
 * 图像处理获取缩略图
 * @param   {Object}  opts - 参数对象
 * @param   {string}  opts.src - 处理源路径
 * @param   {string}  opts.type - 处理类型 2:图片 4:视频
 * @param   {string}  opts.payload - 负载参数: https://help.aliyun.com/document_detail/44688.html?spm=a2c4g.11186623.6.1148.4d7d176cZS0ozx
 * @param   {boolean} opts.ifSelf - 返回源路径
 * @param   {string}  opts.ossdomain - 图片对应的oss域名
 * @returns {string} 处理后的图片路径
 */

function getThumbnails(
  opts = {
    src: "",
    type: "",
    payload: {
      width: 750
    },
    ifSelf: true,
    ossdomain: "https://images2.bestjlb.com/"
  }
) {
  let { src, type, payload, ifSelf, ossdomain } = opts;
  if (!src) return "";
  if (src.indexOf("?") > -1) return src;
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
module.exports = getThumbnails;
