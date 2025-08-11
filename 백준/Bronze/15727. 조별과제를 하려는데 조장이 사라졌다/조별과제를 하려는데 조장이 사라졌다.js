const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let answer = (n % 5 === 0) ? n/5 : Math.trunc(n/5) + 1;

console.log(answer);