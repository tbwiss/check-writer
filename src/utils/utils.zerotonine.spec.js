const assert = require("assert");
const { zeroToNineConverter } = require("./utils");

const zeroToNineTests = [
  {
    input: 0,  
    expected: "zero"
  },
  {
    input: 1,  
    expected: "one"
  },
  {
    input: 5,  
    expected: "five"
  },
  {
    input: 9,  
    expected: "nine"
  },
  {
    input: 'two',  
    expected: null
  },
  {
    input: null,  
    expected: null
  },
  {
    input: NaN,  
    expected: null
  }
];

zeroToNineTests.forEach(elmt => {
  test(`zeroToNineConverter, ${elmt.input}`, () => {
    assert.equal(zeroToNineConverter(elmt.input), elmt.expected);
  });
});
