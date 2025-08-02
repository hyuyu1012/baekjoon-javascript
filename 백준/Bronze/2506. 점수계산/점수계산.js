const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

let count = 1;
let sum = 0;
const n = Number(input[0]);
const array = input[1].split(" ").map(Number);

for(let i = 0; i < n; i++) {
  if(array[i] === 1) {
    sum = sum + count;
    count++;
  }
  else if(array[i] === 0) {
    count = 1; 
  }
}

console.log(sum);