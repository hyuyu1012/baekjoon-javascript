const fs = require('fs');
const n = Number(fs.readFileSync("/dev/stdin").toString().trim());

let sum = 0;
let i = 1;
while(i <= n){
  sum = sum + i;
  i = i +1;
}
console.log(sum);