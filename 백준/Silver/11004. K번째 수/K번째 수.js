const fs = require('fs');
const input =fs.readFileSync(0).toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const array = input[1].split(" ").map(Number).sort((a,b) => a-b);
console.log(array[K-1]);