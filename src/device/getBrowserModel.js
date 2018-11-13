/**
 * 获取浏览器类型和版本
 * @return {string}
 * @example
 * getBrowserModel() => "Chrome:70.0.3538.102"
 */
function getBrowserModel() {
  var sys = {};
  var ua = navigator.userAgent.toLowerCase();
  var s = null;
  /* eslint-disable */
  (s = ua.match(/rv:([\d.]+)\) like gecko/))
    ? (sys.ie = s[1])
    : (s = ua.match(/msie ([\d\.]+)/))
    ? (sys.ie = s[1])
    : (s = ua.match(/edge\/([\d\.]+)/))
    ? (sys.edge = s[1])
    : (s = ua.match(/firefox\/([\d\.]+)/))
    ? (sys.firefox = s[1])
    : (s = ua.match(/(?:opera|opr).([\d\.]+)/))
    ? (sys.opera = s[1])
    : (s = ua.match(/chrome\/([\d\.]+)/))
    ? (sys.chrome = s[1])
    : (s = ua.match(/version\/([\d\.]+).*safari/))
    ? (sys.safari = s[1])
    : (s = ua.match(/micromessenger\/([\d\.]+)/))
    ? (sys.micromessenger = s[1])
    : (s = ua.match(/QQ\/([\d\.]+)/gi))
    ? (sys.qq = s[1])
    : 0;

  // 根据关系进行判断
  if (sys.ie) return "IE:" + sys.ie;
  if (sys.edge) return "Edge:" + sys.edge;
  if (sys.firefox) return "Firefox:" + sys.firefox;
  if (sys.chrome) return "Chrome:" + sys.chrome;
  if (sys.opera) return "Opera:" + sys.opera;
  if (sys.safari) return "Safari:" + sys.safari;
  if (sys.micromessenger) return "Micromessenger:" + sys.micromessenger;
  if (sys.qq) return "QQ:" + sys.qq;

  return "Unknown";
}
module.exports = getBrowserModel;
