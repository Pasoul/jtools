/* eslint-disable no-undef */
import { isIDCard } from "../src/index";
var assert = chai.assert;

describe("校验18位身份证号码", () => {
  it("如果没有提供任何参数，应该返回false", () => {
    assert.equal(isIDCard(), false);
  });
  it("512501197506045175应该返回true", () => {
    assert.equal(isIDCard(512501197506045175), true);
  });
  it("51052119850508797x应该返回true", () => {
    assert.equal(isIDCard("51052119850508797x"), true);
  });
  it("1232132131应该返回false", () => {
    assert.equal(isIDCard(1232132131), false);
  });
});
