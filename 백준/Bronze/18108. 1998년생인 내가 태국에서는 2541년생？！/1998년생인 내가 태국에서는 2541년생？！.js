const fs = require('fs')
const init = Number(fs.readFileSync("/dev/stdin").toString().trim());

console.log(init-543);