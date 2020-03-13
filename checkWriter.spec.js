const assert = require("assert");
const { parseToWordedOutput } = require("./checkWriter");

// out of range (-1, 1000000)
// .0 and .00 are all zero  (float or integer)
// example tests from doc
// no number tests
// the 'worded output' as input

const documentExampleInputTests = [
  {
    input: 112.10,  // TODO: formatter erases trailing zero!
    expected: "One hundred twelve Euros and ten cents"
  },
  {
    input: 874327.9,
    expected:
      "Eight hundred seventy four thousand three hundred twenty seven Euros and ninety cents"
  },
  {
    input: 978,
    expected: "Nine hundred sevety eight Euros and zero cents"
  },
  {
    input: 1.01,
    expected: "One Euro and one cent"
  }
];

documentExampleInputTests.forEach(elmt => {
  test(`Examples from the exercise document, ${elmt.input}`, () => {
    assert.equal(parseToWordedOutput(elmt.input), elmt.expected);
  });
});




const ownValidInputTests = [
  {
    input: 213, 
    expected: "Two hundred thirteen Euros"
  },
];

ownValidInputTests.forEach(elmt => {
  test(`Own valid inputs, ${elmt.input}`, () => {
    assert.equal(parseToWordedOutput(elmt.input), elmt.expected);
  });
});




const zeroRoundedTests = [
  {
    input: 25001,
    expected: "Twenty five thousand one Euros and zero cents"
  },
  {
    input: 25001.0,
    expected: "Twenty five thousand one Euros and zero cents"
  },
  {
    input: 25001.00,    // TODO: formatter erases trailing zero!
    expected: "Twenty five thousand one Euros and zero cents"
  }
];

zeroRoundedTests.forEach(elmt => {
  test(`Zero's getting rounded, ${elmt.input}`, () => {
    assert.equal(parseToWordedOutput(elmt.input), elmt.expected);
  });
});


// TODO: split this up in separate files!


const notANumberTests = [
  {
    input: "Five",
    expected: "Input not a number"
  },
  {
    input: "test",
    expected: "Input not a number"
  },
  {
    input: "this should not work",
    expected: "Input not a number"
  },
  {
    input: "Twenty five thousand one Euros and zero cents",
    expected: "Input not a number"
  },
  {
    input: "a 1 cent piece",
    expected: "Input not a number"
  },
  {
    input: "twelve 12",
    expected: "Input not a number"
  },
  {
    input: "8 eight",
    expected: "Input not a number"
  },
];

notANumberTests.forEach(elmt => {
  test(`Not a number, ${elmt.input}`, () => {
    assert.equal(parseToWordedOutput(elmt.input), elmt.expected);
  });
});




const outOfRangeTests = [
  {
    input: -0.01,
    expected: "Number out of range"
  },
  {
    input: -1.32,
    expected: "Number out of range"
  },
  {
    input: -123,
    expected: "Number out of range"
  },
  {
    input: 999999.01,
    expected: "Number out of range"
  },
  {
    input: 1000000,
    expected: "Number out of range"
  },
  {
    input: 1000264,
    expected: "Number out of range"
  }
];

outOfRangeTests.forEach(elmt => {
  test(`Not a number, ${elmt.input}`, () => {
    assert.equal(parseToWordedOutput(elmt.input), elmt.expected);
  });
});




const specialCasesTest = [
  {
    input: null,
    expected: "Invalid input type"
  },
  {
    input: undefined,
    expected: "Invalid input type"
  },
  {
    input: NaN,
    expected: "Invalid input type"
  },
  {
    input: () => {},
    expected: "Invalid input type"
  },
];

specialCasesTest.forEach(elmt => {
  test(`Special cases, ${elmt.input}`, () => {
    assert.equal(parseToWordedOutput(elmt.input), elmt.expected);
  });
});
