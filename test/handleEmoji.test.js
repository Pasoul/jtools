/* eslint-disable no-undef */
import { handleEmoji } from "../src/index";
var assert = chai.assert;
var expect = chai.expect;

describe("给emoji表情编译", () => {
  it("😃编译后的实体字符应该是&#128515;", () => {
    assert.equal(handleEmoji("😃", "encode"), "&#128515;");
  });
  it("😊编译后的实体字符应该是&#128522;", () => {
    assert.equal(handleEmoji("😊", "encode"), "&#128522;");
  });
  it("任意字符串加emoji，编译后的结果是原字符串加实体字符", () => {
    assert.equal(handleEmoji("😊123hello", "encode"), "&#128522;123hello");
  });
});

describe("给emoji表情解析", () => {
  it("&#128522;解析后的emoji应该是😃", () => {
    assert.equal(handleEmoji("&#128515;", "decode"), "😃");
  });
  it("&#128522;解析后的emoji应该是😊", () => {
    assert.equal(handleEmoji("&#128522;", "decode"), "😊");
  });
  it("任意字符串加实体字符，编译后的结果是原字符串加emoji", () => {
    assert.equal(handleEmoji("&#128522;123hello", "decode"), "😊123hello");
  });
});

describe("异常流程测试", () => {
  it("传入的不是字符串，应该原样出处", () => {
    assert.equal(handleEmoji(123, "encode"), 123);
    expect(handleEmoji(() => {}, "encode")).to.be.a("function");
  });
  it("传入的参数为空，应该返回空字符串", () => {
    assert.equal(handleEmoji(), "");
  });
  it("不传字符串处理类型，默认对字符串进行编码", () => {
    assert.equal(handleEmoji("😊"), "&#128522;");
  });
  it("字符串处理类型错误，原样输出字符串", () => {
    assert.equal(handleEmoji("😊", "hello"), "😊");
  });
});
