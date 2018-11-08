/* eslint-disable no-undef */
import { isSpecialChar } from "../src/index";
var assert = chai.assert;

describe("检查是否为特殊字符的测试", () => {
  it("~！@#￥%……&*应该是特殊字符", () => {
    assert.equal(isSpecialChar("~！@#￥%……&*"), true);
  });
  it("数字不应该是特殊字符", () => {
    assert.equal(isSpecialChar(1234567890), false);
  });
  it("字母不应该是特殊字符", () => {
    assert.equal(isSpecialChar("ABCDabcd"), false);
  });
  it("文字不应该是特殊字符", () => {
    assert.equal(isSpecialChar("你好"), false);
  });
});
