/* eslint-disable no-undef */
import { getDeviceModel } from "../src/index";
var assert = chai.assert;

describe("获取手机操作系统类型校验", () => {
  it("PhantomJS校验应该为Unknown", () => {
    assert.equal(getDeviceModel(), "Unknown");
  });
});
