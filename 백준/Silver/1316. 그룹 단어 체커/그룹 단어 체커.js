const fs = require('fs');
const input = fs.readFileSync(0).toString().split("\n");


let count = 0;
const n = input[0];

for (let i = 1; i <=n; i++) {
  const temp = input[i].split("");
  const obj = {};
  let flag = true;

  for (let i = 0; i <= temp.length -1; i++) {
    if(temp[i] in obj) {
      if(temp[i-1] === temp[i]) {
        continue;
      }
      else {
        flag = false;
        break;
      }
    }
    else {
      obj[temp[i]] = true;
    }
  }

  if(flag === true) count +=1;
}


console.log(count);