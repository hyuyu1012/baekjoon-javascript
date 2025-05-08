const fs = require('fs');
numbers = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let index = 1;
let max = numbers[0];

for(let i = 1; i < 9;  i++) {
  if(numbers[i] > max) {
    max = numbers[i];
    index = i+1;
  }
} 
console.log(max);
console.log(index);