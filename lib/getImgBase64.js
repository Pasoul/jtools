/**
 * 获取图片的base64 url
 * @param {string} url 图片url
 * @returns {Promise} 图片base64信息
 */
function getImgBase64(url) {
  /* eslint-disable */
  var Img = new Image(),
    dataURL = "";
  Img.setAttribute("crossOrigin", "anonymous");
  Img.src = url;
  return new Promise((resolve, reject) => {
    Img.onload = function() {
      var canvas = document.createElement("canvas"),
        width = Img.width,
        height = Img.height;
      var ctx = canvas.getContext("2d");
      var scale = 5;
      ctx.scale(scale, scale);
      canvas.width = width * scale;
      canvas.height = height * scale;
      ctx.drawImage(Img, 0, 0, width * scale, height * scale);
      dataURL = canvas.toDataURL("image/png");
      resolve(dataURL);
    };
  });
}
module.exports = getImgBase64;