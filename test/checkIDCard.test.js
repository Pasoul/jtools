/* eslint-disable no-undef */
import {checkIDCard} from '../src/index';
var assert = chai.assert;

describe("校验18位身份证号码", function() {
  it("如果没有提供任何参数，应该返回false", function() {
    assert.equal(checkIDCard(), false);
  });
  it("411523198292820911应该返回true", function() {
    assert.equal(checkIDCard(411523198292820911), true);
  });
  it("41152319829282091x应该返回true", function() {
    assert.equal(checkIDCard('41152319829282091x'), true);
  });
  it("1232132131应该返回false", function() {
    assert.equal(checkIDCard(1232132131), false);
  });
});
