/* eslint-disable no-undef */
import {getThumbnails} from '../src/index';
var assert = chai.assert;

describe("获取缩略图的测试", function() {
  it("如果没有提供任何参数，应该返回空字符串", function() {
    assert.equal(getThumbnails(), "");
  });
  it("如果没有提供图片url，应该返回空字符串", function() {
    assert.equal(getThumbnails({src: ""}), "");
  });
});
