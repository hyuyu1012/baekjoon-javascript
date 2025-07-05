const fs = require('fs');
const exp = fs.readFileSync(0).toString().trim().split(/([+-])/);
const resulExp = [];

let sum = 0;
for (let i = 0; i < exp.length; i++) {
  if(exp[i] === '-') {
    resulExp.push(sum);
    resulExp.push('-');
    sum = 0;
  }
  else if (exp[i] === '+') {

  }
  else {
    sum = sum + Number(exp[i]);
  }
}
resulExp.push(sum);

let result = resulExp[0];

for(let i = 1; i < resulExp.length; i++) {
  if(resulExp[i] === '-') {
    result = result - resulExp[i+1];
    i++;
  }
  else {
    result = result + resulExp[i];
  }
}

console.log(result);