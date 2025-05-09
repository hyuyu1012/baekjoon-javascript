const fs = require('fs');
const numbers = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const result = [];

numbers.forEach(num => {
  result.push(num % 42);
})

const result_Set = new Set(result);
console.log(result_Set.size)