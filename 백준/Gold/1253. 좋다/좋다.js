const fs = require('fs');
const input = fs.readFileSync(0)
  .toString()
  .trim()
  .split("\n");


const N = Number(input[0]);
const numbers = input[1].split(" ").map(Number).sort((a,b) => a-b);
let answer = 0;

function twoPointer(i, number) {
  let start = 0;
  let end = N-1;
  while(start < end) {
    if(start === i) {
      start++;
      continue;
    }
    if(end === i) {
      end--;
      continue;
    }
    const sum = numbers[start] + numbers[end];
    if(sum === number) {
      answer++;
      return true;
    }
    else if (sum > number) end--;
    else if (sum < number) start++;
  }
  return false;
}

for (let i = 0; i < N; i++) {
  const number = numbers[i];
  twoPointer(i, number);
}

console.log(answer);
