const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n").map(Number);

const stack = [];
const k = init[0];

for (let i = 1; i<=k; i++) {
  if (init[i] === 0 ) {
    stack.pop();
  }
  else {
    stack.push(init[i]);
  }
}

if(stack.length === 0 ) {
  console.log(0);
}
else {
  
 console.log(stack.reduce((a,b)=> a+b));
}