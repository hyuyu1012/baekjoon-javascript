const fs = require('fs');
const init  = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 영수증에 적힌 금액
let x = init[0];
// 종류 개수
let n = init[1];

for(let i = 2; i<= init.length-1; i++) {
  const list = init[i].split(" ").map(Number);
  const price = list[0];
  const count = list[1];
  x = x - price * count;
}

if (x === 0) {
  console.log("Yes");
}
else {
  console.log("No")
}