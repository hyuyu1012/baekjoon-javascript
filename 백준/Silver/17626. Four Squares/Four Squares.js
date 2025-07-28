const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

const dp = [];
dp[0] = 0;
dp[1] = 1;

for(let i = 2; i <=n; i++) {
  let min = 5;
  for(let j = 1; j*j <=i; j++) {
    const temp = i - j*j;
    min = Math.min(min, dp[temp]);
  }
  dp[i] = min + 1;
}

console.log(dp[n]);