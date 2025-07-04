const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(init[0]);
const stack =[];
const result = [];

for(let i = 1; i<=n; i++) {
  switch(init[i]) {
    case '2':
      if(stack.length !== 0) {
        result.push(stack.pop());
      }
      else {
        result.push(-1);
      }
      break;

    case '3':
      result.push(stack.length);
      break;
    
    case '4':
      if(stack.length === 0) {
        result.push(1);
      }
      else {
        result.push(0);
      }
      break;

    case '5':
      if(stack.length !== 0) {
        result.push(stack[stack.length -1]);
      }
      else {
        result.push(-1);
      }
      break;
    
    default:
      const temp = init[i].split(" ").map(Number);
      stack.push(temp[1]);  
  } 
}

console.log(result.join("\n"));