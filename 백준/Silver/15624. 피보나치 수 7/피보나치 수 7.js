const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

const MOD = 1000000007;

let first = 0;
let second = 1;

for (let i = 2; i <= n; i++) {
  const result = (first + second) % MOD;
  first = second;
  second = result;
}

console.log(n === 0 ? 0 : second % MOD);