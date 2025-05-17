const fs = require('fs');
const init = fs.readFileSync("/dev/stdin").toString().trim();
console.log(init+"??!");