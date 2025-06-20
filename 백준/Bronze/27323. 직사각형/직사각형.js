const fs = require('fs');;
const [X, Y] = fs.readFileSync(0).toString().trim().split("\n").map(Number);
console.log(X * Y);