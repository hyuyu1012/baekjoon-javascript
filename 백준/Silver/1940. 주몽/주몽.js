const fs = require('fs');
const input = fs.readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const M = Number(input[1]);
const array = input[2].split(" ").map(Number);

let start = 0;
let end = N-1;
let count = 0;
array.sort((a,b) => a-b);

while(start < end) {
  const sum = array[start] + array[end];
  if(sum < M) {
    start++;
  }
  else if(sum > M) {
    end--;
  }
  else if (sum === M) {
    start++;
    end--;
    count++;
  }
}

console.log(count);