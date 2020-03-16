const assert = require("assert");
const { splitGivenAmount } = require("./utils");

const splitGivenAmountTests = [
  {
    input: 0,  
    expected: {
      cD: 0,
      isSingularCent: false,
      f2D: 0,
      isSingularEuro: false,
      f3rdD: null,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 0.0,  
    expected: {
      cD: 0,
      isSingularCent: false,
      f2D: 0,
      isSingularEuro: false,
      f3rdD: null,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 0.00,  
    expected: {
      cD: 0,
      isSingularCent: false,
      f2D: 0,
      isSingularEuro: false,
      f3rdD: null,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 0.01,  
    expected: {
      cD: 1,
      isSingularCent: true,
      f2D: 0,
      isSingularEuro: false,
      f3rdD: null,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 0.001,  
    expected: {
      cD: 0,
      isSingularCent: false,
      f2D: 0,
      isSingularEuro: false,
      f3rdD: null,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 0.07,  
    expected: {
      cD: 7,
      isSingularCent: false,
      f2D: 0,
      isSingularEuro: false,
      f3rdD: null,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 0.23,  
    expected: {
      cD: 23,
      isSingularCent: false,
      f2D: 0,
      isSingularEuro: false,
      f3rdD: null,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 0.5,  
    expected: {
      cD: 50,
      isSingularCent: false,
      f2D: 0,
      isSingularEuro: false,
      f3rdD: null,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 0.7,  
    expected: {
      cD: 70,
      isSingularCent: false,
      f2D: 0,
      isSingularEuro: false,
      f3rdD: null,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 0.99,  
    expected: {
      cD: 99,
      isSingularCent: false,
      f2D: 0,
      isSingularEuro: false,
      f3rdD: null,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 1.00,  
    expected: {
      cD: 0,
      isSingularCent: false,
      f2D: 1,
      isSingularEuro: true,
      f3rdD: null,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 1.0,  
    expected: {
      cD: 0,
      isSingularCent: false,
      f2D: 1,
      isSingularEuro: true,
      f3rdD: null,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 1,  
    expected: {
      cD: 0,
      isSingularCent: false,
      f2D: 1,
      isSingularEuro: true,
      f3rdD: null,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 9,  
    expected: {
      cD: 0,
      isSingularCent: false,
      f2D: 9,
      isSingularEuro: false,
      f3rdD: null,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 12,  
    expected: {
      cD: 0,
      isSingularCent: false,
      f2D: 12,
      isSingularEuro: false,
      f3rdD: null,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 89,  
    expected: {
      cD: 0,
      isSingularCent: false,
      f2D: 89,
      isSingularEuro: false,
      f3rdD: null,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 100,  
    expected: {
      cD: 0,
      isSingularCent: false,
      f2D: 0,
      isSingularEuro: false,
      f3rdD: 1,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 101,  
    expected: {
      cD: 0,
      isSingularCent: false,
      f2D: 1,
      isSingularEuro: false,
      f3rdD: 1,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 101.2,  
    expected: {
      cD: 20,
      isSingularCent: false,
      f2D: 1,
      isSingularEuro: false,
      f3rdD: 1,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 467,  
    expected: {
      cD: 0,
      isSingularCent: false,
      f2D: 67,
      isSingularEuro: false,
      f3rdD: 4,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 999,  
    expected: {
      cD: 0,
      isSingularCent: false,
      f2D: 99,
      isSingularEuro: false,
      f3rdD: 9,
      s2D: null,
      s3rdD: null
    }
  },
  {
    input: 1000,  
    expected: {
      cD: 0,
      isSingularCent: false,
      f2D: 0,
      isSingularEuro: false,
      f3rdD: 0,
      s2D: 1,
      s3rdD: null
    }
  },
  {
    input: 1001,  
    expected: {
      cD: 0,
      isSingularCent: false,
      f2D: 1,
      isSingularEuro: false,
      f3rdD: 0,
      s2D: 1,
      s3rdD: null
    }
  },
  {
    input: 1451,  
    expected: {
      cD: 0,
      isSingularCent: false,
      f2D: 51,
      isSingularEuro: false,
      f3rdD: 4,
      s2D: 1,
      s3rdD: null
    }
  },
  {
    input: 32451,  
    expected: {
      cD: 0,
      isSingularCent: false,
      f2D: 51,
      isSingularEuro: false,
      f3rdD: 4,
      s2D: 32,
      s3rdD: null
    }
  },
  {
    input: 999000,  
    expected: {
      cD: 0,
      isSingularCent: false,
      f2D: 0,
      isSingularEuro: false,
      f3rdD: 0,
      s2D: 99,
      s3rdD: 9
    }
  },
  {
    input: 900000,  
    expected: {
      cD: 0,
      isSingularCent: false,
      f2D: 0,
      isSingularEuro: false,
      f3rdD: 0,
      s2D: 0,
      s3rdD: 9
    }
  },
  {
    input: 999999,  
    expected: {
      cD: 0,
      isSingularCent: false,
      f2D: 99,
      isSingularEuro: false,
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