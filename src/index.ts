// canvas
import { getImgBase64 } from "./canvas/getImgBase64";

// dateFormat
import { dateFormat1 } from "./dateFormat/dateFormat1";
import { dateFormat2 } from "./dateFormat/dateFormat2";
import { elDateFormat } from "./dateFormat/elDateFormat";

// device
import { getBrowserModel } from "./device/getBrowserModel";
import { getDeviceModel } from "./device/getDeviceModel";

// export
import { exportXls } from "./export/exportXls";

// oss
import { getThumbnails } from "./oss/getThumbnails";
import { getDefaultAvatar } from "./oss/getDefaultAvatar";

// reg
import { isEmoji } from "./reg/isEmoji";
import { isIDCard } from "./reg/isIDCard";
import { isSpecialChar } from "./reg/isSpecialChar";
import { isMobile } from "./reg/isMobile";

// transfer
import { handleEmoji } from "./transfer/handleEmoji";
import { handleText } from "./transfer/handleText";
import { handleParam } from "./transfer/handleParam";

export {
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
