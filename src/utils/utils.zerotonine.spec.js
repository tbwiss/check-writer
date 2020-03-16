const assert = require("assert");
const { zeroToNineConverter } = require("./utils");

const zeroToNineTests = [
  {
    input: -1,  
    expected: null
  },
  {
    input: 0,  
    expected: "zero"
  },
  {
    input: 1,  
    expected: "one"
  },
  {
    input: 2,  
    expected: "two"
  },
  {
    input: 3,  
    expected: "three"
  },
  {
    input: 4,  
    expected: "four"
  },
  {
    input: 5,  
    expected: "five"
  },
  {
    input: 6,  
    expected: "six"
  },
  {
    input: 7,  
    expected: "seven"
  },
  {
    input: 8,  
    expected: "eight"
  },
  {
    input: 9,  
    expected: "nine"
  },
  {
    input: 10,  
    expected: null
  },
  {
    input: 11,  
    expected: null
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
