const assert = require("assert");
const { twoDigitConverter } = require("./utils");

const twoDigitConverterTests = [
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
    input: 10,  
    expected: "ten"
  },
  {
    input: 11,  
    expected: "eleven"
  },
  {
    input: 14,  
    expected: "fourteen"
  },
  {
    input: 19,  
    expected: "nineteen"
  },
  {
    input: 20,  
    expected: "twenty"
  },
  {
    input: 21,  
    expected: "twenty one"
  },
  {
    input: 25,  
    expected: "twenty five"
  },
  {
    input: 40,  
    expected: "forty"
  },
  {
    input: 43,  
    expected: "forty three"
  },
  {
    input: 60,  
    expected: "sixty"
  },
  {
    input: 88,  
    expected: "eighty eight"
  },
  {
    input: 99,  
    expected: "ninety nine"
  },
  {
    input: 100,  
    expected: null
  },
  {
    input: 104,  
    expected: null
  },
  {
    input: 10234,  
    expected: null
  },
  {
    input: 'two',  
    expected: null
  },
  {
    input: 'twenty seven',  
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

twoDigitConverterTests.forEach(elmt => {
  test(`twoDigitConverter, ${elmt.input}`, () => {
    assert.equal(twoDigitConverter(elmt.input), elmt.expected);
  });
});
