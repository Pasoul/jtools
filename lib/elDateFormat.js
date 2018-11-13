/**
 * 获取饿了么框架时间选择器时间戳
 * @param {*} time 时间
 * @param {*} type 类型  默认值 0  0 开始时间  1  结束时间
 * @return {number|string|null} 时间戳
 */
function elDateFormat(time, type = 0) {
  if (!time) {
    return null;
  }
  let timeStamp = null;
  if (Array.isArray(time) && time.length > 0) {
    if (type == 1) {
      timeStamp = Math.floor(new Date(new Date(time[type]).setHours(23, 59, 59, 0)) / 1000);
    } else {
      timeStamp = Math.floor(new Date(new Date(time[type]).setHours(0, 0, 0, 0)) / 1000);
    }
  } else if (Array.isArray(time) && time.length == 0) {
    return null;
  } else if (!Array.isArray(time)) {
    timeStamp = Math.floor(new Date(time).getTime() / 1000);
  } else {
    return null;
  }
  return timeStamp;
}

module.exports = elDateFormat;
