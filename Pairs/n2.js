const array = require('./array.json');

const X = process.env.X ? parseInt(process.env.X, 10) : 8;

let iterations = 0;

const pairs = [];
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    iterations++;
    // not a pair if the same index
    if (i === j || j < i) {
      continue;
    }
    const sum = array[i] + array[j];
    if (X === sum) {
      pairs.push([i, j]);
    }
  }
}

console.log('List of pairs :', pairs);
console.log('Number of iterations: ', iterations);
