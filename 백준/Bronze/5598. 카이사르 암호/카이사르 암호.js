const fs = require('fs');
const str = fs.readFileSync(0).toString().trim().split("");
const result = [];

for(let i = 0;  i < str.length; i++) {
  let temp = str[i].charCodeAt();
  if(temp<=67) {
    temp = temp + 26;
  }
  result.push(String.fromCharCode(temp - 3)); 
}

console.log(result.join(""));