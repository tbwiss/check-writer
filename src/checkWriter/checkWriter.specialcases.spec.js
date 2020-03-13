const assert = require("assert");
const { parseToWordedOutput } = require("./checkWriter");

const specialCasesTest = [
  {
    input: "234,243.01",
    expected: "Invalid input type"
  },
  {
    input: "874,345",
    expected: "Invalid input type"
  },
  {
    input: "234'243.01",
    expected: "Invalid input type"
  },
  {
    input: "874'345",
    expected: "Invalid input type"
  },
  {
    input: "123,21",
    expected: "Invalid input type"
  },
  {
    input: "0,01",
    expected: "Invalid input type"
  },
  {
    input: "123,21",
    expected: "Invalid input type"
  },
  {
    input: "0:01",
    expected: "Invalid input type"
  },
  {
    input: "123:21",
    expected: "Invalid input type"
  },
  {
    input: "0-01",
    expected: "Invalid input type"
  },
  {
    input: "234-23",
    expected: "Invalid input type"
  },
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
  test(`Special cases, i: ${elmt.input}; e: ${elmt.expected}`, () => {
    assert.equal(parseToWordedOutput(elmt.input), elmt.expected);
  });
});
