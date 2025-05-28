const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split(" ");
const answer = [1,1,2,2,2,8]

let result = [];
for (let i = 0; i<init.length; i++) {
  result[i] = answer[i] - init[i];
}

console.log(result.join(" "));