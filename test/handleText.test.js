/* eslint-disable no-undef */
import { handleText } from "../src/index";
var assert = chai.assert;

describe("给字符串编译，用于客户端展示", () => {
  it("如果字符串含有br标签、&nbsp;&lt;&gt;，将分别编译成\n、空格、< 和 >", () => {
    assert.equal(handleText("<br>", "encode"), "\n");
    assert.equal(handleText("&nbsp;", "encode"), " ");
    assert.equal(handleText("&lt;", "encode"), "<");
    assert.equal(handleText("&gt;", "encode"), ">");
    assert.equal(handleText("<br>&nbsp;&lt;&gt;", "encode"), "\n <>");
  });
  it("普通字符串原样输出", () => {
    assert.equal(handleText("你好", "encode"), "你好");
  });
  it("数字原样输出", () => {
    assert.equal(handleText(123, "encode"), 123);
  });
});
describe("解析字符串，用于网页展示", () => {
  it("如果字符串含有\n、空格、<、>，将分别编译成<br>、&nbsp;、&lt;和 &gt;", () => {
    assert.equal(handleText("\n", "decode"), "<br>");
    assert.equal(handleText(" ", "decode"), "&nbsp;");
    assert.equal(handleText("<", "decode"), "&lt;");
    assert.equal(handleText(">", "decode"), "&gt;");
    assert.equal(handleText("\n <>", "decode"), "<br>&nbsp;&lt;&gt;");
  });
  it("普通字符串原样输出", () => {
    assert.equal(handleText("你好", "decode"), "你好");
  });
  it("数字原样输出", () => {
    assert.equal(handleText(123, "decode"), 123);
  });
});
describe("异常流程测试", () => {
  it("如果字符串处理类型错误，原样输出字符串", () => {
    assert.equal(handleText("<br>123", "hello"), "<br>123");
  });
  it("如果没有传入参数，返回空字符串", () => {
    assert.equal(handleText(), "");
  });
});
