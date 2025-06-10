const fs = require('fs');
const init = fs.readFileSync(0).toString().split("\n");

const L = Number(init[0]);
const str = init[1].split("");
const r = 31;
const M = 1234567891;
let sum = 0
let result = 0


for (let i = 0; i < L; i++) {
  const temp = (str[i].charCodeAt()-96) * (r ** i);
  sum = sum + temp;
}

result = sum % M;

console.log(result);