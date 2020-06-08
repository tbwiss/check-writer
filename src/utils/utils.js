const numberRegex = new RegExp('^[0-9]{1,6}[.]?[0-9]{0,2}$');

function _hasLeadingElements(elmt1 = null, elmt2 = null, elmt3 = null) {
  return !!(elmt1 || elmt2 || elmt3);
}

function _zeroIfHasNoLeadingElements(elmt1 = null, elmt2 = null) {
  return (elmt1 || elmt2) ? 0 : null;
}

function _firstThousandsTrunk(eurosSplit) {
  const tempFirstHundreds = eurosSplit[eurosSplit.length - 2] ||  null;
  const firstHundreds = tempFirstHundreds ?
    `${eurosSplit[eurosSplit.length - 2]}${eurosSplit[eurosSplit.length - 1]}`
    : eurosSplit[eurosSplit.length - 1];
  const firstThousands = eurosSplit[eurosSplit.length - 3];
  return { firstHundreds, firstThousands };
}

function _secondThousandsTrunk(eurosSplit) {
  const tempSecondHundreds = eurosSplit[eurosSplit.length - 5] || null;
  const secondHundreds = tempSecondHundreds ?
    `${eurosSplit[eurosSplit.length - 5]}${eurosSplit[eurosSplit.length - 4]}`
    : eurosSplit[eurosSplit.length - 4];
  const secondThousands = eurosSplit[eurosSplit.length - 6];
  return { secondHundreds, secondThousands };
}

function _centsTrunk(centsTrunk) {
  let isSingularCent = false;
  let centDigits = 0;

  if (centsTrunk) {
    const centsSplit = centsTrunk.split('');
    if (!centsSplit || !centsSplit.length) return null;

    if (centsSplit.length === 2 && centsSplit[0] === '0') {
      centDigits = Number.parseInt(centsSplit[1], 10) || 0;
      if (centDigits === 1) isSingularCent = true;
    }
    else if (centsSplit.length === 2) {
      centDigits = Number.parseInt(centsTrunk, 10);
    }
    else if (centsSplit.length === 1) {
      centDigits = Number.parseInt(`${centsSplit[0]}0`, 10);
    }
  }

  return { centDigits, isSingularCent };
}

function firstLetterUppercase(element) {
  if (!element) return '';
  return element.charAt(0).toUpperCase() + element.slice(1);
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
    secondDigit = Number.parseInt(digits[0], 10);
  } else {
    firstDigit = Number.parseInt(digits[0], 10);
    secondDigit =  Number.parseInt(digits[1], 10);
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

  const { firstHundreds, firstThousands } = _firstThousandsTrunk(eurosSplit);
  const { secondHundreds, secondThousands } = _secondThousandsTrunk(eurosSplit);
  const { centDigits, isSingularCent } = _centsTrunk(centsTrunk)

  return {
    centDigits,
    isSingularCent,
    firstHundreds: Number.parseInt(firstHundreds, 10) || 0,
    firstThousands: Number.parseInt(firstThousands, 10) || _zeroIfHasNoLeadingElements(secondHundreds, secondThousands),
    secondHundreds: Number.parseInt(secondHundreds, 10) || _zeroIfHasNoLeadingElements(secondThousands),
    secondThousands: Number.parseInt(secondThousands, 10) || null,
    isSingularEuro: (Number.parseInt(firstHundreds, 10) === 1 && !_hasLeadingElements(firstThousands, secondHundreds, secondThousands)),
  }
}

module.exports = {
  numberRegex,
  firstLetterUppercase,
  zeroToNineConverter,
  twoDigitConverter,
  splitGivenAmount
}