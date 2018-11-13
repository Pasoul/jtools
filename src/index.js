// canvas
const getImgBase64 = require("./canvas/getImgBase64");

// dateFormat
const dateFormat1 = require("./dateFormat/dateFormat1");
const dateFormat2 = require("./dateFormat/dateFormat2");
const elDateFormat = require("./dateFormat/elDateFormat");

// device
const getBrowserModel = require("./device/getBrowserModel");
const getDeviceModel = require("./device/getDeviceModel");

// export
const exportXls = require("./export/exportXls");

// oss
const getThumbnails = require("./oss/getThumbnails");
const getDefaultAvatar = require("./oss/getDefaultAvatar");

// reg
const isEmoji = require("./reg/isEmoji");
const isIDCard = require("./reg/isIDCard");
const isSpecialChar = require("./reg/isSpecialChar");
const isMobile = require("./reg/isMobile");

// transfer
const handleEmoji = require("./transfer/handleEmoji");
const handleText = require("./transfer/handleText");
const handleParam = require("./transfer/handleParam");

module.exports = {
  getImgBase64,
  dateFormat1,
  dateFormat2,
  elDateFormat,
  getBrowserModel,
  getDeviceModel,
  exportXls,
  getThumbnails,
  getDefaultAvatar,
  isEmoji,
  isIDCard,
  isSpecialChar,
  isMobile,
  handleEmoji,
  handleText,
  handleParam
};
