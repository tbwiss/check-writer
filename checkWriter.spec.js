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
    expected: "Nine hundred seventy eight Euros and zero cents"
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
    expected: "Two hundred thirteen Euros and zero cents"
  },
  {
    input: 40, 
    expected: "Forty Euros and zero cents"
  },
  {
    input: 534213, 
    expected: "Five hundred thirty four thousand two hundred thirteen Euros and zero cents"
  },
  {
    input: 534299.23, 
    expected: "Five hundred thirty four thousand two hundred ninety nine Euros and twenty three cents"
  },
  {
    input: 0, 
    expected: "Zero Euros and zero cents"
  },
  {
    input: 0.0, 
    expected: "Zero Euros and zero cents"
  },
  {
    input: 0.01, 
    expected: "Zero Euros and one cent"
  },
  {
    input: 0.60, 
    expected: "Zero Euros and sixty cents"
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
    expected: "Invalid input type"
  },
  {
    input: "test",
    expected: "Invalid input type"
  },
  {
    input: "this should not work",
    expected: "Invalid input type"
  },
  {
    input: "Twenty five thousand one Euros and zero cents",
    expected: "Invalid input type"
  },
  {
    input: "a 1 cent piece",
    expected: "Invalid input type"
  },
  {
    input: "twelve 12",
    expected: "Invalid input type"
  },
  {
    input: "8 eight",
    expected: "Invalid input type"
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
    expected: "Invalid input type"
  },
  {
    input: -1.32,
    expected: "Invalid input type"
  },
  {
    input: -123,
    expected: "Invalid input type"
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
