const fs = require('fs');
const [N, K] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const dp = new Array(N+1).fill(Infinity);
dp[0] = 0;

for(let i = 1; i<=N; i++) {
  dp[i] = Math.min(dp[i-1] + 1, dp[i]);
  
  let temp = i + Math.trunc(i/2);
  if(temp <= N) {
    dp[temp] = Math.min(dp[temp], dp[i] + 1);
  }
}

if(dp[N] <= K) {
  console.log("minigimbob");
}
else {
  console.log("water");
}