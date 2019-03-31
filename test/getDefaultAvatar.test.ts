/* eslint-disable no-undef */
import { getDefaultAvatar } from "../src/index";
import chai from "chai";
var assert = chai.assert;

describe("异常流程测试", () => {
  it("如果什么都不传，应该返回空字符串", () => {
    assert.equal(getDefaultAvatar(), "");
  });
});
