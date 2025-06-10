// 롤링 해시와 모듈러 곱의 성질

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const L = Number(input[0]);
const str = input[1];
const r = 31;
const M = 1234567891;

let result = 0;
let pow = 1;

for (let i = 0; i < L; i++) {
  const charValue = str[i].charCodeAt() - 96;
  result = (result + (charValue * pow) % M) % M;
  pow = (pow * r) % M;
}

console.log(result);