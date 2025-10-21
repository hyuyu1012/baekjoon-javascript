const fs = require('fs');
const N = Number(fs.readFileSync(0)
  .toString()
  .trim());

let start = 1;
let end = 1;

let count = 0;
const func = (start, end) => {
  const n = end - start + 1;
  const result = (n * (start + end)) / 2; 
  return result;
}

while(start <= N && end <=N) {
  const sum = func(start, end);
  if (sum > N) {
    start++;
  } 
  else if (sum < N) {
    end++;
  } 
  else if(sum === N) {
    start++;
    end++;
    count++;
  }
}
console.log(count);