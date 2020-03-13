const assert = require("assert");
const { parseToWordedOutput } = require("./checkWriter");

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
  test(`Not a number, i: ${elmt.input}; e: ${elmt.expected}`, () => {
    assert.equal(parseToWordedOutput(elmt.input), elmt.expected);
  });
});
