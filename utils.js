const numberRegex = new RegExp('^[0-9]{0,6}.?[0-9]{0,2}$');

function _hasLeadingElements(ele1 = null, ele2 = null, ele3 = null) {
  return !!(ele1 || ele2 || ele3);
}

function _zeroIfHasNoLeadingElements(ele1 = null, ele2 = null) {
  return (ele1 || ele2) ? 0 : null;
}

function firstLetterUppercase(name) {
  if (!name) return '';
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function zeroToNineConverter(number) {
  if (number === 0) return 'zero';
  if (number === 1) return 'one';
  if (number === 2) return 'two';
  if (number === 3) return 'three';
  if (number === 4) return 'four';
  if (number === 5) return 'five';
  if (number === 6) return 'six';
  if (number === 7) return 'seven';
  if (number === 8) return 'eight';
  if (number === 9) return 'nine';
  return null;
}

function tenToNineteenConverter(number) {
  if (number === 0) return 'ten';
  if (number === 1) return 'eleven';
  if (number === 2) return 'twelve';
  if (number === 3) return 'thirteen';
  if (number === 4) return 'fourteen';
  if (number === 5) return 'fifteen';
  if (number === 6) return 'sixteen';
  if (number === 7) return 'seventeen';
  if (number === 8) return 'eighteen';
  if (number === 9) return 'nineteen';
  return null;
}

function tenStepsConverter(number) {
  if (number === 2) return 'twenty';
  if (number === 3) return 'thirty';
  if (number === 4) return 'forty';
  if (number === 5) return 'fifty';
  if (number === 6) return 'sixty';
  if (number === 7) return 'seventy';
  if (number === 8) return 'eighty';
  if (number === 9) return 'ninety';
  return null;
}

function twoDigitConverter(number) {
  let input = number || 0;
  if (number === 0) input = 0;
  else if (!number) return null;

  const digits = input.toString().split('');

  if (digits.length > 2) return null;

  let firstDigit = NaN;
  let secondDigit = NaN;
  if (digits.length <= 1) {
    firstDigit = 0;
    secondDigit = Number.parseInt(digits[0]);
  } else {
    firstDigit = Number.parseInt(digits[0]);
    secondDigit =  Number.parseInt(digits[1]);
  }

  if (Number.isNaN(firstDigit) || Number.isNaN(secondDigit)) return null;

  if (firstDigit === 0) return zeroToNineConverter(secondDigit);
  if (firstDigit === 1) return tenToNineteenConverter(secondDigit);
  if (secondDigit === 0) return tenStepsConverter(firstDigit);
  return `${tenStepsConverter(firstDigit)} ${zeroToNineConverter(secondDigit)}`;
}

function splitGivenAmount(number) {
  let input = number || 0;
  if (number === 0) input = 0;
  else if (!number) return null;

  const commaSplit = input.toString().split('.');
  if (!commaSplit || !commaSplit.length) return null;

  const posSplit = commaSplit[0].split('');
  if (!posSplit || !posSplit.length || posSplit.length > 6) return null;

  const tempF2D = posSplit[posSplit.length - 2] ||  null;
  const f2D = tempF2D ? `${posSplit[posSplit.length - 2]}${posSplit[posSplit.length - 1]}` : posSplit[posSplit.length - 1];
  const f3rdD = posSplit[posSplit.length - 3];

  const tempS2D = posSplit[posSplit.length - 5] || null;
  const s2D = tempS2D ? `${posSplit[posSplit.length - 5]}${posSplit[posSplit.length - 4]}` : posSplit[posSplit.length - 4];
  const s3rdD = posSplit[posSplit.length - 6];

  let isSingularCent = false;
  let centDigits = 0;
  if (commaSplit.length === 2) {
    const afterCommaCombined = commaSplit[1];
    const afterCommaSplit = afterCommaCombined.split('');
    if (!afterCommaSplit || !afterCommaSplit.length) return null;
    if (afterCommaSplit.length === 2 && afterCommaSplit[0] === '0') {
      centDigits = Number.parseInt(afterCommaSplit[1]) || 0;
      if (centDigits === 1) isSingularCent = true;
    }
    else if (afterCommaSplit.length === 2) {
      centDigits = Number.parseInt(afterCommaCombined);
    }
    else if (afterCommaSplit.length === 1) {
      centDigits = Number.parseInt(`${afterCommaSplit[0]}0`);
    }
  }

  return {
    cD: centDigits,
    isSingularCent,
    f2D: Number.parseInt(f2D) || 0,
    isSingularEuro: (Number.parseInt(f2D) === 1 && !_hasLeadingElements(f3rdD, s2D, s3rdD)),
    f3rdD: Number.parseInt(f3rdD) || _zeroIfHasNoLeadingElements(s2D, s3rdD),
    s2D: Number.parseInt(s2D) || _zeroIfHasNoLeadingElements(s3rdD),
    s3rdD: Number.parseInt(s3rdD) || null
  }
}

module.exports = {
  numberRegex,
  firstLetterUppercase,
  zeroToNineConverter,
  twoDigitConverter,
  splitGivenAmount
}