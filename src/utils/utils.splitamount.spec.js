const assert = require("assert");
const { splitGivenAmount } = require("./utils");

const splitGivenAmountTests = [
  {
    input: 0,  
    expected: {
      centDigits: 0,
      isSingularCent: false,
      firstHundreds: 0,
      isSingularEuro: false,
      firstThousands: null,
      secondHundreds: null,
      secondThousands: null
    }
  },
  {
    input: 0.0,  
    expected: {
      centDigits: 0,
      isSingularCent: false,
      firstHundreds: 0,
      isSingularEuro: false,
      firstThousands: null,
      secondHundreds: null,
      secondThousands: null
    }
  },
  {
    input: 0.00,  
    expected: {
      centDigits: 0,
      isSingularCent: false,
      firstHundreds: 0,
      isSingularEuro: false,
      firstThousands: null,
      secondHundreds: null,
      secondThousands: null
    }
  },
  {
    input: 0.01,  
    expected: {
      centDigits: 1,
      isSingularCent: true,
      firstHundreds: 0,
      isSingularEuro: false,
      firstThousands: null,
      secondHundreds: null,
      secondThousands: null
    }
  },
  {
    input: 0.001,  
    expected: {
      centDigits: 0,
      isSingularCent: false,
      firstHundreds: 0,
      isSingularEuro: false,
      firstThousands: null,
      secondHundreds: null,
      secondThousands: null
    }
  },
  {
    input: 0.07,  
    expected: {
      centDigits: 7,
      isSingularCent: false,
      firstHundreds: 0,
      isSingularEuro: false,
      firstThousands: null,
      secondHundreds: null,
      secondThousands: null
    }
  },
  {
    input: 0.23,  
    expected: {
      centDigits: 23,
      isSingularCent: false,
      firstHundreds: 0,
      isSingularEuro: false,
      firstThousands: null,
      secondHundreds: null,
      secondThousands: null
    }
  },
  {
    input: 0.5,  
    expected: {
      centDigits: 50,
      isSingularCent: false,
      firstHundreds: 0,
      isSingularEuro: false,
      firstThousands: null,
      secondHundreds: null,
      secondThousands: null
    }
  },
  {
    input: 0.7,  
    expected: {
      centDigits: 70,
      isSingularCent: false,
      firstHundreds: 0,
      isSingularEuro: false,
      firstThousands: null,
      secondHundreds: null,
      secondThousands: null
    }
  },
  {
    input: 0.99,  
    expected: {
      centDigits: 99,
      isSingularCent: false,
      firstHundreds: 0,
      isSingularEuro: false,
      firstThousands: null,
      secondHundreds: null,
      secondThousands: null
    }
  },
  {
    input: 1.00,  
    expected: {
      centDigits: 0,
      isSingularCent: false,
      firstHundreds: 1,
      isSingularEuro: true,
      firstThousands: null,
      secondHundreds: null,
      secondThousands: null
    }
  },
  {
    input: 1.0,  
    expected: {
      centDigits: 0,
      isSingularCent: false,
      firstHundreds: 1,
      isSingularEuro: true,
      firstThousands: null,
      secondHundreds: null,
      secondThousands: null
    }
  },
  {
    input: 1,  
    expected: {
      centDigits: 0,
      isSingularCent: false,
      firstHundreds: 1,
      isSingularEuro: true,
      firstThousands: null,
      secondHundreds: null,
      secondThousands: null
    }
  },
  {
    input: 9,  
    expected: {
      centDigits: 0,
      isSingularCent: false,
      firstHundreds: 9,
      isSingularEuro: false,
      firstThousands: null,
      secondHundreds: null,
      secondThousands: null
    }
  },
  {
    input: 12,  
    expected: {
      centDigits: 0,
      isSingularCent: false,
      firstHundreds: 12,
      isSingularEuro: false,
      firstThousands: null,
      secondHundreds: null,
      secondThousands: null
    }
  },
  {
    input: 89,  
    expected: {
      centDigits: 0,
      isSingularCent: false,
      firstHundreds: 89,
      isSingularEuro: false,
      firstThousands: null,
      secondHundreds: null,
      secondThousands: null
    }
  },
  {
    input: 100,  
    expected: {
      centDigits: 0,
      isSingularCent: false,
      firstHundreds: 0,
      isSingularEuro: false,
      firstThousands: 1,
      secondHundreds: null,
      secondThousands: null
    }
  },
  {
    input: 101,  
    expected: {
      centDigits: 0,
      isSingularCent: false,
      firstHundreds: 1,
      isSingularEuro: false,
      firstThousands: 1,
      secondHundreds: null,
      secondThousands: null
    }
  },
  {
    input: 101.2,  
    expected: {
      centDigits: 20,
      isSingularCent: false,
      firstHundreds: 1,
      isSingularEuro: false,
      firstThousands: 1,
      secondHundreds: null,
      secondThousands: null
    }
  },
  {
    input: 467,  
    expected: {
      centDigits: 0,
      isSingularCent: false,
      firstHundreds: 67,
      isSingularEuro: false,
      firstThousands: 4,
      secondHundreds: null,
      secondThousands: null
    }
  },
  {
    input: 999,  
    expected: {
      centDigits: 0,
      isSingularCent: false,
      firstHundreds: 99,
      isSingularEuro: false,
      firstThousands: 9,
      secondHundreds: null,
      secondThousands: null
    }
  },
  {
    input: 1000,  
    expected: {
      centDigits: 0,
      isSingularCent: false,
      firstHundreds: 0,
      isSingularEuro: false,
      firstThousands: 0,
      secondHundreds: 1,
      secondThousands: null
    }
  },
  {
    input: 1001,  
    expected: {
      centDigits: 0,
      isSingularCent: false,
      firstHundreds: 1,
      isSingularEuro: false,
      firstThousands: 0,
      secondHundreds: 1,
      secondThousands: null
    }
  },
  {
    input: 1451,  
    expected: {
      centDigits: 0,
      isSingularCent: false,
      firstHundreds: 51,
      isSingularEuro: false,
      firstThousands: 4,
      secondHundreds: 1,
      secondThousands: null
    }
  },
  {
    input: 32451,  
    expected: {
      centDigits: 0,
      isSingularCent: false,
      firstHundreds: 51,
      isSingularEuro: false,
      firstThousands: 4,
      secondHundreds: 32,
      secondThousands: null
    }
  },
  {
    input: 999000,  
    expected: {
      centDigits: 0,
      isSingularCent: false,
      firstHundreds: 0,
      isSingularEuro: false,
      firstThousands: 0,
      secondHundreds: 99,
      secondThousands: 9
    }
  },
  {
    input: 900000,  
    expected: {
      centDigits: 0,
      isSingularCent: false,
      firstHundreds: 0,
      isSingularEuro: false,
      firstThousands: 0,
      secondHundreds: 0,
      secondThousands: 9
    }
  },
  {
    input: 999999,  
    expected: {
      centDigits: 0,
      isSingularCent: false,
      firstHundreds: 99,
      isSingularEuro: false,
      firstThousands: 9,
      secondHundreds: 99,
      secondThousands: 9
    }
  },
  {
    input: 1000000,  
    expected: null
  },
  {
    input: 1000001,  
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