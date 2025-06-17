const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split(" ").map(BigInt);

let result = init[0] + init[1];
console.log(result.toString().trim("n")); 