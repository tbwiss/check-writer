const {
  numberRegex,
  firstLetterUppercase,
  zeroToNineConverter,
  twoDigitConverter,
  splitGivenAmount
} = require('../utils/utils');

const UPPER_THRESHOLD = 999999.00;

function parseToWordedOutput(number) {
  let input = number || 0;
  if (number === 0) input = 0;
  else if (!number) {
    return "Invalid input type";
  }

  if (!numberRegex.test(input)) {
    return "Invalid input type";
  }

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

  const {
    cD,
    f2D,
    f3rdD,
    s2D,
    s3rdD,
    isSingularCent,
    isSingularEuro
  } = splitGivenAmount(input);

  const hundredThousandTrunk = s3rdD ? `${zeroToNineConverter(s3rdD)} hundred `: "";
  const thousandTrunk = s2D ? `${twoDigitConverter(s2D)} thousand `: "";
  const hundredTrunk = f3rdD ? `${zeroToNineConverter(f3rdD)} hundred `: "";
  const euroLiteral =
    `${hundredThousandTrunk}${thousandTrunk}` +
    `${hundredTrunk}${twoDigitConverter(f2D)}`;
  const centLiteral = twoDigitConverter(cD);

  const euroLabel = isSingularEuro ? "Euro" : "Euros";
  const centLabel = isSingularCent ? "cent" : "cents";
  const result = 
    `${firstLetterUppercase(euroLiteral)} ${euroLabel} and ` +
    `${centLiteral} ${centLabel}`;
  return result;
}

module.exports = {
  parseToWordedOutput
};
