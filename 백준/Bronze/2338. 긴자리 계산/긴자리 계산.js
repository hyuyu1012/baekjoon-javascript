const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n").map(BigInt);

console.log((init[0] + init[1]).toString().replace("n", ""));
console.log((init[0] - init[1]).toString().replace("n", ""));
console.log((init[0] * init[1]).toString().replace("n", ""));