const fs = require('fs')
const init = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const a = init[0];
const b = init[1];
const c = init[2];
// 같은 눈 3개
if (a===b && b===c) {
  console.log(10000 + a * 1000);
}
// 같은 눈 2개
else if (a===b || a===c){
 console.log(1000 + a * 100); 
}
else if (b===c){
 console.log(1000 + b * 100);
}
// 전부 다른 눈
else {
  const max = Math.max(...init);
  console.log(max * 100);
}
