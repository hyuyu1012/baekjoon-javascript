const fs = require('fs');
const init = fs.readFileSync(0).toString().split("\n");

const t = Number(init[0]);
let result = ''

for (let i = 1; i<=t; i++) {
  const temp = init[i].split("");
  const stack = [];    

  for (let i = 0; i<temp.length; i++) {
    if (stack.length === 0) {
      stack.push(temp[i]);
      continue;
    }

    if(temp[i] === '(') {
      stack.push(temp[i]);
    }

    else if(temp[i] === ')') {
      if(stack[stack.length -1] === '(') {
        stack.pop();
      }
      else {
        stack.push(temp[i]);
      }
    }
  } 
 
  if (stack.length === 0) {
    console.log("YES");
  }
  else {
    console.log("NO");
  }
}