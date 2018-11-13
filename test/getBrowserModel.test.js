/* eslint-disable no-undef */
import { getBrowserModel } from "../src/index";
var assert = chai.assert;

describe("浏览器类型校验", () => {
  it("PhantomJS校验应该为Unknown", () => {
    assert.equal(getBrowserModel(), "Unknown");
  });
});
