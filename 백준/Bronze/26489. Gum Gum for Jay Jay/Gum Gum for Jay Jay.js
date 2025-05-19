const fs = require('fs');
const init = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
console.log(init.length);