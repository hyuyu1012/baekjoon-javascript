const fs = require('fs');
const init = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const t = Number(init[0]);
let result = '';

for(let i = 1; i<=t; i++){
  const init2 = init[i].split(" ").map(Number);
  result = result + (init2[0] + init2[1]) + "\n";
}

console.log(result.trim());