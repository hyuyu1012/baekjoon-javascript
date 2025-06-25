const fs = require('fs');
const [N,K] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const arr = Array.from(new Array(N), (x, i) => i + 1);

let count = 0;
let number = null;

const result = [];

while (arr.length !== 0) {  
  number = arr.shift();
  count+=1;

  if(count === K) {
    count = 0
    result.push(number);
  }
  else {
    arr.push(number);
  }
}

console.log(`<${result.join(", ")}>`);