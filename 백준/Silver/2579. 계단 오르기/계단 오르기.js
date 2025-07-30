const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

const n = input[0];
const dp = [];
dp[0] = 0;
dp[1] = input[1];
dp[2] = input[1] + input[2];

for(let i = 3; i <=n; i++) {
  const temp = Math.max(dp[i-3] + input[i-1], dp[i-2]);
  dp[i] = temp + input[i];
}

console.log(dp[n]);

