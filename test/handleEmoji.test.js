/* eslint-disable no-undef */
import { handleEmoji } from "../src/index";
var assert = chai.assert;

describe("给emoji表情编码、解码", function() {
  it("😃编码后的实体字符应该是&#x1F603;", function() {
    assert.equal(handleEmoji("😃", 'encode'), '&#128515;');
  });
  it("😊编码后的实体字符应该是&#x1F60A;", function() {
    assert.equal(handleEmoji("😊", 'encode'), '&#128522;');
  });
});
