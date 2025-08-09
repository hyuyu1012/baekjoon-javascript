const fs = require('fs');
const n = Number(fs.readFileSync(0).toString())

const dp = [];
dp[0] = 0;
dp[1] = 1;
dp[2] = 1;
dp[3] = 1;

for(let i = 4; i<=n; i++) {
  dp[i] = BigInt(dp[i-1]) + BigInt(dp[i-3]);
}

console.log(String(dp[n]).replace("n", ""));