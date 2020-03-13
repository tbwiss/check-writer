const assert = require("assert");
const { parseToWordedOutput } = require("./checkWriter");

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
    input: 98.01, 
    expected: "Ninety eight Euros and one cent"
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
  test(`Own valid inputs, i: ${elmt.input}; e: ${elmt.expected}`, () => {
    assert.equal(parseToWordedOutput(elmt.input), elmt.expected);
  });
});
