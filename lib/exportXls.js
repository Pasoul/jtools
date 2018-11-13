/**
 * 删除对象里面value值为null的键值对
 * @param {*} data 接口返回的blob数据
 * @param {*} name excel名称
 * @param {*} callBack 导出成功/失败回调  回调返回{type:fail/success}  fail情况下 返回{ type: "fail", code, msg }
 */
function exportXls(data, name = "jtools", callBack) {
  if (!data || data.size == 0) {
    callBack && callBack({ type: "fail", msg: "数据为空" });
    return false;
  }
  let reader = new FileReader();
  reader.readAsText(data, "utf-8");
  reader.onload = e => {
    try {
      let { code, msg } = JSON.parse(reader.result);
      if (code && code != 200) {
        callBack && callBack({ type: "fail", code, msg });
        return false;
      } else {
        _downFile(data, name);
      }
      callBack && callBack({ type: "success" });
    } catch (error) {
      _downFile(data, name);
      callBack && callBack({ type: "success" });
    }
  };
}
function _downFile(data, fileName) {
  let blob = new Blob([data], { type: "application/vnd.ms-excel,charset=UTF-8" });
  if (window.navigator.msSaveOrOpenBlob) {
    navigator.msSaveBlob(blob, fileName + ".xlsx");
  } else {
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName + ".xlsx";
    link.click();
    window.URL.revokeObjectURL(link.href);
  }
}
module.exports = exportXls;
