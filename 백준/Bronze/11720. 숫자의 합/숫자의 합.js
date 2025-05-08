const fs = require('fs');
init = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

n = Number(init[0]);
numbers = init[1].split("").map(Number);

let sum = 0;
numbers.forEach(num => {
  sum += num;
})
console.log(sum);