const fs = require('fs')
const init = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(BigInt);
const a = init[0];
const b = init[1];

console.log((a*b).toString())

