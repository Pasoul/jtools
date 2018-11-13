/**
 * 日期格式化
 * 时间规则：
 * 小于一分钟显示：刚刚
 * 1分钟-60分钟内显示：xx分钟前
 * 大于60分钟显示：xx小时前
 * 昨天显示：昨天 xx:xx
 * 更早日期显示：xx-xx-xx xx:xx
 * @param {*} dateTimeStamp 时间戳，单位s
 * @return {*} 格式化后的日期
 */
function dateFormat2(dateTimeStamp) {
  if (!dateTimeStamp) return "";
  dateTimeStamp = dateTimeStamp * 1000;
  var minute = 1000 * 60; // 把分，时，天，周，半个月，一个月用毫秒表示
  var hour = minute * 60;
  var now = new Date().getTime(); // 获取当前时间毫秒
  var result = "";
  var diffValue = now - dateTimeStamp; // 时间差

  if (diffValue < 0) {
    return;
  }
  var minC = diffValue / minute; // 计算时间差的分，时，天，周，月
  var hourC = diffValue / hour;
  var datetime = new Date();
  datetime.setTime(dateTimeStamp);
  var Nyear = datetime.getFullYear();
  var Nmonth = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
  var Ndate = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
  var Nhour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
  var Nminute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
  if (hourC >= 1 && hourC < 24) {
    result = " " + parseInt(hourC) + "小时前";
  } else if (hourC >= 24 && hourC < 48 && new Date().getDate() - Ndate === 1) {
    result = "昨天 " + Nhour + ":" + Nminute;
  } else if (minC >= 1 && minC < 60) {
    result = " " + parseInt(minC) + "分钟前";
  } else if (diffValue >= 0 && diffValue <= minute) {
    result = "刚刚";
  } else {
    result = Nyear + "-" + Nmonth + "-" + Ndate + " " + Nhour + ":" + Nminute;
  }
  return result;
}
module.exports = dateFormat2;
