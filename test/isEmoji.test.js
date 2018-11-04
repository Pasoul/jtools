/* eslint-disable no-undef */
import { isEmoji } from "../src/index";
var assert = chai.assert;

describe("检查是否为emoji表情的测试", function() {
  it("😃应该是emoji表情", function() {
    assert.equal(isEmoji("😃"), true);
  });
  it("中文不应该是emoji表情", function() {
    assert.equal(isEmoji("你好"), false);
  });
  it("数字不应该是emoji表情", function() {
    assert.equal(isEmoji(12334), false);
  });
  it("特殊字符不应该是emoji表情", function() {
    assert.equal(isEmoji("~!@#%$&*($))"), false);
  });
});
