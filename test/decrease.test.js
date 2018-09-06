/* eslint-disable no-undef */
import { decrease } from "../src/index";
var assert = chai.assert;

describe("test", function() {
  describe("加法函数的测试", function() {
    it("1 减 1 应该等于 0", function() {
      assert.equal(decrease(1, 1), 0);
    });
  });
});
