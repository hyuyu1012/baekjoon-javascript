const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
const dp = new Array(n+1).fill(0);

dp[0] = 0;
dp[1] = 0;

for (let i = 2; i <=n; i++) {
  const temp = [];
  
  if(i%3 === 0) {
    temp.push(dp[i/3] + 1);
  }
  if(i%2 ===0 ) {
    temp.push(dp[i/2] + 1);
  }
  temp.push(dp[i-1] + 1);
  
  dp[i] = Math.min(...temp);
}

console.log(dp[n]);

