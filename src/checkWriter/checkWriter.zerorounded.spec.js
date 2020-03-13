const assert = require("assert");
const { parseToWordedOutput } = require("./checkWriter");

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
    input: 25001.00,
    expected: "Twenty five thousand one Euros and zero cents"
  },
];

zeroRoundedTests.forEach(elmt => {
  test(`Zero's getting rounded, i: ${elmt.input}; e: ${elmt.expected}`, () => {
    assert.equal(parseToWordedOutput(elmt.input), elmt.expected);
  });
});
