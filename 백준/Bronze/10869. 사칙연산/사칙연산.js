const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

console.log(input[0] + input[1]);
console.log(input[0] - input[1]);
console.log(input[0] * input[1]);
console.log(Math.trunc(input[0] / input[1]));
console.log(input[0] % input[1]);