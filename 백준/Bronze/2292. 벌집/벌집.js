const fs = require('fs');
let N = Number(fs.readFileSync(0).toString().trim());

let count = 0;
let minus = 1;
while(true) {
  if(N === 0) break;
  if(N < minus) {
    count++;
    break;
  }
  N = N - minus;
  count++;
  minus = 6 * count;
}

console.log(count);