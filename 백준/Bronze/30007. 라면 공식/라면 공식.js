const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const result = [];

for(let i = 1; i <=n; i++) {
  const temp = input[i].split(" ").map(Number);
  const A = temp[0];
  const B = temp[1];
  const X = temp[2];
  result.push(A * (X - 1) + B);
}
console.log(result.join("\n"));