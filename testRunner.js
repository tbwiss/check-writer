let tests = [];

function test(name, fn) {
  tests.push({ name, fn });
}

function run() {
  tests.forEach(test => {
    try {
      test.fn();
      console.log('✅', test.name);
    } catch (error) {
      console.log('❌', test.name);
      console.error(error.stack);
    }
  });
}

const files = process.argv.slice(2);
// INFO: expose test as global
global.test = test;

if (files && files.length) {
  files.forEach(file => require(file));
} else {
  console.error('No test files found');
}

run();
