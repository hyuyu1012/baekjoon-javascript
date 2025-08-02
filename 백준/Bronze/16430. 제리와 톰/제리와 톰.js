const fs = require('fs');
const [N, M] = fs.readFileSync(0).toString().split(" ").map(Number);

console.log(M-N,M);