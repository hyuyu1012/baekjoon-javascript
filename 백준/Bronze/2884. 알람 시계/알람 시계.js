const fs = require('fs');
const init = fs.readFileSync('/dev/stdin').toString().trim().split(" ");

let H = Number(init[0]);
let M = Number(init[1]);

let sum = H * 60 + M;

let result = sum - 45;

if (result < 0){
  result = 1440 + sum - 45;
}

let result_H = Math.trunc(result / 60);
let result_M = result % 60;

console.log(result_H, result_M);

