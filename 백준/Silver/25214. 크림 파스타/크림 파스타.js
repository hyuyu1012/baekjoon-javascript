const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const array = input[1].split(" ").map(Number);

let max = array[0];
let min = array[0];

const dp = [];
dp[0] = 0;

for(let i = 1; i < n; i++) {
  const temp = array[i];
  dp[i] = Math.max(temp-min, dp[i-1]);
  if(temp > max) max = temp;
  if(min > temp) min = temp;
}

console.log(dp.join(" "));