const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const company = {};

for(let i = 1; i<=n; i++) {
  const temp = input[i].split(" ");
  if(temp[1] === 'enter') {
    company[temp[0]] = true;
  }
  else if(temp[1] === 'leave') {
    delete company[temp[0]];
  }
}
console.log(Object.keys(company).sort().reverse().join("\n"));