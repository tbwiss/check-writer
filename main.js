const { parseToWordedOutput } = require('./src/checkWriter/checkWriter');

function execute(number) {
  console.log('************************');
  console.log('Number:', number);
  console.log('In words:', parseToWordedOutput(number));
  console.log('************************');
}

const arg = process.argv.slice(2);
if (!arg || !arg.length) {
  return console.error('No arg specified, aborting');
}
execute(arg[0]);
