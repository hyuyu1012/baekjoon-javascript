const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let sum = 0;

for (let i = 0; i <= input.length-1; i++) {
  sum = sum + input[i];
}
console.log(sum);