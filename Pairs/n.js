const array = require('./array.json');

const X = process.env.X ? parseInt(process.env.X, 10) : 8;
const diffPositions = {};

let iterations = 0;

const pairs = [];
for (let i = 0; i < array.length; i++) {
  iterations++;
  const current = array[i];
  const difference = X - current;
  if ('undefined' === typeof diffPositions[difference]) {
    diffPositions[difference] = [];
  }
  diffPositions[difference].push(i);
  const previousPositions = 'undefined' === typeof diffPositions[current] ? [] : diffPositions[current];
  for (position of previousPositions) {
    iterations++;
    if (position !== i) {
      pairs.push([position, i]);
    }
  }
}

console.log('List of pairs :', pairs);
console.log('Number of iterations: ', iterations);
