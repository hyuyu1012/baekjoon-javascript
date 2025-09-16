const fs = require('fs');
const N = Number(fs.readFileSync(0).toString().trim());

let fun = 0;
const arr = [];
arr.push(N);

while(arr.length !== 0) {
  const temp = arr.pop();
  if(temp ===1) continue;
  const a = Math.trunc(temp / 2);
  const b = temp - a;
  fun = fun + a*b;
  arr.push(a,b);
}

console.log(fun);