/**
 * 日期格式化
 * 时间规则：
 * 今天显示：xx:xx
 * 昨天显示：昨天 xx:xx
 * 一周内显示：星期x xx:xx
 * 一年内显示：xx月xx日 xx:xx
 * 更早日期显示：xx年xx月xx日 xx:xx
 * @param {*} value 时间戳，单位s
 * @return {*} 格式化后的日期
 */
function dateFormat1(value) {
  if (!value) return "";
  let time = value * 1000;
  let now = new Date().getTime();
  let year = new Date(time).getFullYear();
  let month = new Date(time).getMonth() + 1;
  let date = new Date(time).getDate();
  let hour = new Date(time).getHours();
  let min = new Date(time).getMinutes();
  let weekType = ["日", "一", "二", "三", "四", "五", "六"];
  let week = "星期" + weekType[new Date(time).getDay()];
  if (min < 10) {
    min = "0" + min;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (new Date().getDate() - new Date(time).getDate() === 0) {
    return hour + ":" + min;
  } else if (new Date().getDate() - new Date(time).getDate() === 1) {
    return "昨天 " + hour + ":" + min;
  } else if (
    new Date().getTime() < new Date(time).getTime() &&
    new Date().getDate() - new Date(time).getDate() < 7 &&
    new Date().getDay() - new Date(time).getDay() > 0
  ) {
    return week + hour + ":" + min;
  } else if (year < new Date(now).getFullYear()) {
    return year + "年" + month + "月" + date + "日   " + hour + ":" + min;
  } else {
    return month + "月" + date + "日   " + hour + ":" + min;
  }
}
module.exports = dateFormat1;
