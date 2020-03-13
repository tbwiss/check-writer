const assert = require("assert");
const {
  zeroToNineConverter,
  twoDigitConverter,
  splitGivenAmount
} = require("./utils");

const zeroToNineTests = [
  {
    input: 0,  
    expected: "zero"
  },
  {
    input: 1,  
    expected: "one"
  },
  {
    input: 5,  
    expected: "five"
  },
  {
    input: 9,  
    expected: "nine"
  },
  {
    input: 'two',  
    expected: null
  },
  {
    input: null,  
    expected: null
  },
  {
    input: NaN,  
    expected: null
  }
];

zeroToNineTests.forEach(elmt => {
  test(`zeroToNineConverter, ${elmt.input}`, () => {
    assert.equal(zeroToNineConverter(elmt.input), elmt.expected);
  });
});



const twoDigitConverterTests = [
  {
    input: 0,  
    expected: "zero"
  },
  {
    input: 1,  
    expected: "one"
  },
  {
    input: 5,  
    expected: "five"
  },
  {
    input: 9,  
    expected: "nine"
  },
  {
    input: 10,  
    expected: "ten"
  },
  {
    input: 11,  
    expected: "eleven"
  },
  {
    input: 14,  
    expected: "fourteen"
  },
  {
    input: 19,  
    expected: "nineteen"
  },
  {
    input: 20,  
    expected: "twenty"
  },
  {
    input: 21,  
    expected: "twenty one"
  },
  {
    input: 25,  
    expected: "twenty five"
  },
  {
    input: 40,  
    expected: "forty"
  },
  {
    input: 43,  
    expected: "forty three"
  },
  {
    input: 60,  
    expected: "sixty"
  },
  {
    input: 88,  
    expected: "eighty eight"
  },
  {
    input: 99,  
    expected: "ninety nine"
  },
  {
    input: 100,  
    expected: null
  },
  {
    input: 104,  
    expected: null
  },
  {
    input: 10234,  
    expected: null
  },
  {
    input: 'two',  
    expected: null
  },
  {
    input: 'twenty seven',  
    expected: null
  },
  {
    input: null,  
    expected: null
  },
  {
    input: NaN,  
    expected: null
  }
];

twoDigitConverterTests.forEach(elmt => {
  test(`twoDigitConverter, ${elmt.input}`, () => {
    assert.equal(twoDigitConverter(elmt.input), elmt.expected);
  });
});




const splitGivenAmountTests = [
  {
    input: 0,  
    expected: {
      cD: 0,
      f2D: 0,
      f3rdD: null,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 0.0,  
    expected: {
      cD: 0,
      f2D: 0,
      f3rdD: null,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 0.00,  
    expected: {
      cD: 0,
      f2D: 0,
      f3rdD: null,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 0.01,  
    expected: {
      cD: 1,
      f2D: 0,
      f3rdD: null,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 0.07,  
    expected: {
      cD: 7,
      f2D: 0,
      f3rdD: null,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 0.23,  
    expected: {
      cD: 23,
      f2D: 0,
      f3rdD: null,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 0.5,  
    expected: {
      cD: 50,
      f2D: 0,
      f3rdD: null,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 0.7,  
    expected: {
      cD: 70,
      f2D: 0,
      f3rdD: null,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 0.99,  
    expected: {
      cD: 99,
      f2D: 0,
      f3rdD: null,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 1.00,  
    expected: {
      cD: 0,
      f2D: 1,
      f3rdD: null,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 1.0,  
    expected: {
      cD: 0,
      f2D: 1,
      f3rdD: null,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 1,  
    expected: {
      cD: 0,
      f2D: 1,
      f3rdD: null,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 9,  
    expected: {
      cD: 0,
      f2D: 9,
      f3rdD: null,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 12,  
    expected: {
      cD: 0,
      f2D: 12,
      f3rdD: null,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 89,  
    expected: {
      cD: 0,
      f2D: 89,
      f3rdD: null,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 100,  
    expected: {
      cD: 0,
      f2D: 0,
      f3rdD: 1,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 101,  
    expected: {
      cD: 0,
      f2D: 1,
      f3rdD: 1,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 101.2,  
    expected: {
      cD: 20,
      f2D: 1,
      f3rdD: 1,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 467,  
    expected: {
      cD: 0,
      f2D: 67,
      f3rdD: 4,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 999,  
    expected: {
      cD: 0,
      f2D: 99,
      f3rdD: 9,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 1000,  
    expected: {
      cD: 0,
      f2D: 0,
      f3rdD: 0,
      s2D: 1,
      s3rdD: null
    }
  },
  {
    input: 1001,  
    expected: {
      cD: 0,
      f2D: 1,
      f3rdD: 0,
      s2D: 1,
      s3rdD: null
    }
  },
  {
    input: 1451,  
    expected: {
      cD: 0,
      f2D: 51,
      f3rdD: 4,
      s2D: 1,
      s3rdD: null
    }
  },
  {
    input: 32451,  
    expected: {
      cD: 0,
      f2D: 51,
      f3rdD: 4,
      s2D: 32,
      s3rdD: null
    }
  },
  {
    input: 999000,  
    expected: {
      cD: 0,
      f2D: 0,
      f3rdD: 0,
      s2D: 99,
      s3rdD: 9
    }
  },
  {
    input: 900000,  
    expected: {
      cD: 0,
      f2D: 0,
      f3rdD: 0,
      s2D: 0,
      s3rdD: 9
    }
  },
  {
    input: 999999,  
    expected: {
      cD: 0,
      f2D: 99,
      f3rdD: 9,
      s2D: 99,
      s3rdD: 9
    }
  },
  {
    input: 1000000,  
    expected: null
  },
  {
    input: null,  
    expected: null
  },
  {
    input: NaN,  
    expected: null
  }
];

splitGivenAmountTests.forEach(elmt => {
  test(`splitGivenAmount, ${elmt.input}`, () => {
    assert.deepEqual(splitGivenAmount(elmt.input), elmt.expected);
  });
});