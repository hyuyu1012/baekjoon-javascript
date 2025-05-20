const fs = require('fs')
const init = fs.readFileSync("/dev/stdin").toString().trim().split("\n")


const n1 = Number(init[0]);

const n2Array = init[1].split("").map(Number);
for (let i = n2Array.length-1; i >=0; i--) {
  console.log(n1 * n2Array[i]);
}
console.log(n1 * Number(init[1]));

