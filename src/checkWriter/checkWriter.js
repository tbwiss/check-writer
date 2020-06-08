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
    centDigits,
    firstHundreds,
    firstThousands,
    secondHundreds,
    secondThousands,
    isSingularCent,
    isSingularEuro
  } = splitGivenAmount(input);

  const hundredThousandTrunk = secondThousands ? `${zeroToNineConverter(secondThousands)} hundred `: "";
  const thousandTrunk = secondHundreds ? `${twoDigitConverter(secondHundreds)} thousand `: "";
  const hundredTrunk = firstThousands ? `${zeroToNineConverter(firstThousands)} hundred `: "";
  
  const euroLiteral =
    `${hundredThousandTrunk}${thousandTrunk}` +
    `${hundredTrunk}${twoDigitConverter(firstHundreds)}`;
  const centLiteral = twoDigitConverter(centDigits);

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
