const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n").map(Number);
init.shift();

const dp = new Array(12);

dp[0] = 0;
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i<dp.length; i++) {
  dp[i] = dp[i-1] + dp[i-2]  +dp[i-3];
}

init.forEach(number => {
  console.log(dp[number]);
}) 