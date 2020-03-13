const assert = require("assert");
const { parseToWordedOutput } = require("./checkWriter");

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
    input: 0.001,
    expected: "Invalid input type"
  },
  {
    input: 0.0009,
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
  },
  {
    input: 20000264,
    expected: "Number out of range"
  }
];

outOfRangeTests.forEach(elmt => {
  test(`Not a number, i: ${elmt.input}; e: ${elmt.expected}`, () => {
    assert.equal(parseToWordedOutput(elmt.input), elmt.expected);
  });
});
