const numberRegex = new RegExp('^[0-9]{0,6}[.]?[0-9]{0,2}$');

function _hasLeadingElements(ele1 = null, ele2 = null, ele3 = null) {
  return !!(ele1 || ele2 || ele3);
}

function _zeroIfHasNoLeadingElements(ele1 = null, ele2 = null) {
  return (ele1 || ele2) ? 0 : null;
}

function _firstThousandsTrunk(eurosSplit) {
  const tempF2D = eurosSplit[eurosSplit.length - 2] ||  null;
  const f2D = tempF2D ? 
    `${eurosSplit[eurosSplit.length - 2]}${eurosSplit[eurosSplit.length - 1]}`
    : eurosSplit[eurosSplit.length - 1];
  const f3rdD = eurosSplit[eurosSplit.length - 3];
  return { f2D, f3rdD };
}

function _secondThousandsTrunk(eurosSplit) {
  const tempS2D = eurosSplit[eurosSplit.length - 5] || null;
  const s2D = tempS2D ? 
    `${eurosSplit[eurosSplit.length - 5]}${eurosSplit[eurosSplit.length - 4]}`
    : eurosSplit[eurosSplit.length - 4];
  const s3rdD = eurosSplit[eurosSplit.length - 6];
  return { s2D, s3rdD };
}

function _centsTrunk(centsTrunk) {
  let isSingularCent = false;
  let centDigits = 0;

  if (centsTrunk) {
    const centsSplit = centsTrunk.split('');
    if (!centsSplit || !centsSplit.length) return null;

    if (centsSplit.length === 2 && centsSplit[0] === '0') {
      centDigits = Number.parseInt(centsSplit[1]) || 0;
      if (centDigits === 1) isSingularCent = true;
    }
    else if (centsSplit.length === 2) {
      centDigits = Number.parseInt(centsTrunk);
    }
    else if (centsSplit.length === 1) {
      centDigits = Number.parseInt(`${centsSplit[0]}0`);
    }
  }
  return { centDigits, isSingularCent };
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

function tensConverter(number) {
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
  if (secondDigit === 0) return tensConverter(firstDigit);
  return `${tensConverter(firstDigit)} ${zeroToNineConverter(secondDigit)}`;
}

function splitGivenAmount(number) {
  let input = number || 0;
  if (number === 0) input = 0;
  else if (!number) return null;

  const commaSplit = input.toString().split('.');
  if (!commaSplit || !commaSplit.length) return null;

  const eurosSplit = commaSplit[0].split('');
  if (!eurosSplit || !eurosSplit.length || eurosSplit.length > 6) return null;

  const centsTrunk = commaSplit[1] || '';

  const { f2D, f3rdD } = _firstThousandsTrunk(eurosSplit);
  const { s2D, s3rdD } = _secondThousandsTrunk(eurosSplit);
  const { centDigits, isSingularCent } = _centsTrunk(centsTrunk)

  return {
    cD: centDigits,
    isSingularCent,
    f2D: Number.parseInt(f2D) || 0,
    f3rdD: Number.parseInt(f3rdD) || _zeroIfHasNoLeadingElements(s2D, s3rdD),
    s2D: Number.parseInt(s2D) || _zeroIfHasNoLeadingElements(s3rdD),
    s3rdD: Number.parseInt(s3rdD) || null,
    isSingularEuro: (Number.parseInt(f2D) === 1 && !_hasLeadingElements(f3rdD, s2D, s3rdD)),
  }
}

module.exports = {
  numberRegex,
  firstLetterUppercase,
  zeroToNineConverter,
  twoDigitConverter,
  splitGivenAmount
}