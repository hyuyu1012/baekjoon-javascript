const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n");
const init2 = init[0].split(" ").map(Number);

const basket = init2[0];
const ball = init2[1];

let arr = new Array(basket).fill(0);

for (let a = 1; a<=ball; a++){
  const init3 = init[a].split(" ").map(Number);
  const i = init3[0];
  const j = init3[1];
  const k = init3[2];
  
  arr = arr.fill(k, i-1, j);
}

console.log(arr.join(" "));
