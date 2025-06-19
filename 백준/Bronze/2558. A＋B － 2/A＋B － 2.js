const fs = require('fs');

const [A,B] = fs.readFileSync(0).toString().split("\n").map(Number);

console.log(A+B);