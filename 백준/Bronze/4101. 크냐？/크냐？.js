const fs = require('fs');
const input = fs.readFileSync(0).toString().split("\n");
const result = [];

for(let i = 0; i < input.length; i++) {
  const temp = input[i].split(" ").map(Number);
  if(temp[0] === 0 && temp[1] === 0) {
    break;
  }
  if(temp[0] > temp[1]) {
    result.push("Yes");
  }
  else {
    result.push("No");
  }
}

console.log(result.join("\n"));