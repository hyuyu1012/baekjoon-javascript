const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let sum = 0;

for(var i = 0; i<input.length; i++){
  sum = sum + input[i] ** 2;
}

console.log(sum % 10);