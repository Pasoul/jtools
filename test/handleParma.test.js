/* eslint-disable no-undef */
import { handleParam } from "../src/index";
var expect = chai.expect;

describe("删除对象里面value值为null的键值对", () => {
  it("{a:1,b:null}应该返回{a:1}", () => {
    expect(handleParam({ a: 1, b: null })).to.not.include.keys("b");
  });
});
