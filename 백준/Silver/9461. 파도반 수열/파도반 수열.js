const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

const result = [];
const dp = [];
const t = input[0];
dp[0] = 0;
dp[1] = 1;
dp[2] = 1;

for(let i =3; i<=100; i++) {
  dp[i] = dp[i-2] + dp[i-3];
}

for(let i = 1; i <=t; i++) {
  result.push(dp[input[i]]);  
}

console.log(result.join("\n"))