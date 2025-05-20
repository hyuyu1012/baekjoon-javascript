const fs = require('fs')
const init = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

console.log(init[0] + init[1] + init[2]); 