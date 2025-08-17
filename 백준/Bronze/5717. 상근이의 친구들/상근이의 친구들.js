const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");
const result = [];

for(let i = 0; i < input.length; i++) {
  const temp = input[i].split(" ").map(Number);
  const sum = temp[0] + temp[1];
  
  if(sum !== 0) {
    result.push(sum);
  }
}

console.log(result.join("\n"));