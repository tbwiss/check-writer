const {
  firstLetterUppercase,
  zeroToNineConverter,
  twoDigitConverter,
  splitGivenAmount
} = require('./utils');

const UPPER_THRESHOLD = 999999.00;

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

  // REGEX!!!!!

  const { cD, f2D, f3rdD, s2D, s3rdD } = splitGivenAmount(input);


  const isEuroLabelSingular = false;
  const isCentLabelSingular = false;

  const preHundredThousand = s3rdD ? `${zeroToNineConverter(s3rdD)} hundred `: '';
  const preThousand = s2D ? `${twoDigitConverter(s2D)} thousand `: '';
  const preHundred = f3rdD ? `${zeroToNineConverter(f3rdD)} hundred `: '';
  const euroLiteral = `${preHundredThousand}${preThousand}${preHundred}${twoDigitConverter(f2D)}`;
  const centLiteral = twoDigitConverter(cD);

  const euroLabel = isEuroLabelSingular ? "Euro" : "Euros";
  const centLabel = isCentLabelSingular ? "cent" : "cents";
  return `${firstLetterUppercase(euroLiteral)} ${euroLabel} and ${centLiteral} ${centLabel}`
}

module.exports = {
  parseToWordedOutput
};
