# Check-writer

The application requires [Node.js](https://nodejs.org/) and [npm](https://nodejs.org/) to run.
No external dependencies are used.

The application was developed in a TDD approach.

The test files end with `.spec.js` and can be found in this repo under `/src`.

To execute the tests run:
```sh
$ npm run test
```

To "check-write" an arbitrary number:
```sh
$ node main.js <number>
```

F.e.
```sh
$ node main.js 2564.34
```

OBS! A valid input number must be between 0 and 999999.00

A message is displayed in case the number is outside of this range.