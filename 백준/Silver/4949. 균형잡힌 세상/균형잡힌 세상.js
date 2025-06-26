const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n").map((line) => line.split(""));
init.pop();
const result = [];

for (let i = 0; i<=init.length-1; i++){
  const stack = [];
  let flag = 1;
  for(let j = 0; j <= init[i].length -1; j++) {

    if (init[i][j] === '(') {
        stack.push(init[i][j]);
    }

    else if (init[i][j] === '[') {
        stack.push(init[i][j]);

    }
    else if (init[i][j] === ']') {
      if (stack[stack.length -1] !== '[' || stack.length === 0) {
        flag = 0;
        break;
      } 
      else {
        stack.pop();
      }
    }

    else if (init[i][j] === ')') {
      if (stack[stack.length -1] !== '(' || stack.length === 0) {
        flag = 0;
        break;        
      }
      else {
        stack.pop();
      }
    }
  }

  if(flag === 1 && stack.length === 0) {
    result.push("yes");
  }
  else {
    result.push("no");
  }
}
console.log(result.join("\n"));