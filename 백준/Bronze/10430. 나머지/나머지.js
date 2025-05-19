const fs = require('fs');
const init = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const A = init[0];
const B = init[1];
const C = init[2];


console.log((A+B)%C);
console.log(((A%C)+(B%C))%C);
console.log((A*B)%C);
console.log(((A%C) * (B%C))%C);
