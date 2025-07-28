// 구할 수 있는 합 중에서 가장 큰 수
const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input.shift());
const array = input[0].split(" ").map(Number);
const dp = [];

dp[0] = array[0];

for(let i = 1; i < n; i++) {
  dp[i] = Math.max(dp[i-1] + array[i], array[i]);
}

console.log(Math.max(...dp));