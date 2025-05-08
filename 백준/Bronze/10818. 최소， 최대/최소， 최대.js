const fs = require('fs');
const init = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(init[0]);
const numbers = init[1].split(" ").map(Number);


console.log(Math.min(...numbers), Math.max(...numbers));
