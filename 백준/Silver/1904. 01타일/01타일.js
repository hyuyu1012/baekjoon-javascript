const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().trim());
const MOD = 15746;

const dp = [];

dp[0] = 0;
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
}

console.log(dp[n] % MOD);