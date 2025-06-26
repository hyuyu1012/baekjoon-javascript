const fs = require('fs');
const init  = fs.readFileSync(0).toString().trim().split("\n").map(line => line.split(" ").map(Number));
const N = Number(init.shift());
let result = [];

for (let i = 0; i<init.length; i++) {
  let count = 0;
  for (let j = 0; j<init.length; j++) {
    if (i===j) continue;
    if (init[i][0] < init[j][0] && init[i][1] < init[j][1]) {
      count++;
    }
  }
  result.push(count + 1);
}

console.log(result.join(" "));