const UPPER_THRESHOLD = 999999.00;

function isInt(n){
  return Number(n) === n && n % 1 === 0;
}

function isFloat(n){
  return Number(n) === n && n % 1 !== 0;
}

function parseToWordedOutput(input) {
  if (!input) {
    return "Invalid input type";
  }

  // input has to be an int or a float
  const parsedInput = Number.parseFloat(input);
  if (Number.isNaN(parsedInput)) {
    return "Input not a number";
  }
  if (!Number.isFinite(parsedInput)) {
    return "Number out of range";
  }
  if (parsedInput > UPPER_THRESHOLD) {
    return "Number out of range";
  }
  if (!isFloat(parsedInput) || !isInt(parsedInput)) {
    return "Input not a number";
  }

  return "to implement";
}

module.exports = {
  parseToWordedOutput
};
