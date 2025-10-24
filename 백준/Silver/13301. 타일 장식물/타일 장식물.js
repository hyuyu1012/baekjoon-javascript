const fs = require('fs');
const N = Number(fs.readFileSync(0).toString().trim());

const dp = [];
dp[0] = BigInt(0);
dp[1] = BigInt(1);
dp[2] = BigInt(1);

let width, length;

for(let i = 3; i <= N; i++) {
  dp[i] = dp[i-1] + dp [i-2];
}

width = dp[N] + dp[N-1];
length = dp[N];

const answer = width * BigInt(2) + length * BigInt(2);
console.log(String(answer).replace("n", ""));