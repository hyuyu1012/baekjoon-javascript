const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const dp = [];
dp[0] = 1;

for(let i = 1; i < n; i++) {
  let temp = 0;
  for(let j = i -1 ; j>=0; j--) {
    if(arr[j] < arr[i] && dp[j] > temp)  {
      temp = dp[j];
    }
  }
  dp[i] = temp + 1;
}

console.log(Math.max(...dp));