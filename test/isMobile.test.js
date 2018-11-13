/* eslint-disable */
import { isMobile } from "../src/index";
var expect = chai.expect;

describe("判断是否合法手机号", () => {
  it("17682340575应该是合法手机号", () => {
    expect(isMobile(17682340575)).to.be.true;
  });
});
describe("异常流程测试", () => {
  it("什么都不传应该返回false", () => {
    expect(isMobile()).to.be.false;
  });
  it("传入非手机号应该返回false", () => {
    expect(isMobile(null)).to.be.false;
    expect(isMobile("123")).to.be.false;
    expect(isMobile("😈")).to.be.false;
    expect(isMobile("你好")).to.be.false;
    expect(isMobile("hello$&")).to.be.false;
  });
});
