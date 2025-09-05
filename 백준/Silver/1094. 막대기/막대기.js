const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());

let index = 0;
const array = [64, 32, 16, 8, 4, 2, 1];
let count = 0;

while(n !== 0) {
  if(n < array[index]) {
    index++;
    continue;
  }
  n = n - array[index];
  count++;
}

console.log(count);