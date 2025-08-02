const fs = require('fs');
const input = fs.readFileSync(0).toString().split("\n");
const n = Number(input[0]);

const result = [];
for (let i = 1; i <= n; i++) {
  if(input[i].length >=6 &&  input[i].length <=9) {
    result.push("yes");
  }
  else {
    result.push("no");
  }
}

console.log(result.join("\n"));