const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);

let sum = 0;

for(let i = 1; i <= n; i++) {
  const [a,b] = input[i].split(" ").map(Number);
  sum = sum + (a*b);
}

console.log(sum);