const assert = require("assert");
const { parseToWordedOutput } = require("./checkWriter");

const documentExampleInputTests = [
  {
    input: 112.10,
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
  test(`Examples from the exercise document, i: ${elmt.input}; e: ${elmt.expected}`, () => {
    assert.equal(parseToWordedOutput(elmt.input), elmt.expected);
  });
});
