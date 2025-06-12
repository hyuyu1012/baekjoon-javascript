const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n");
const n = init[0];
const stack = [];
let result = '';

function push(stack, number) {
  stack.push(number);
}

function pop(stack) {
  if(empty(stack) === 1) {
    return -1
  }
  else {
    return stack.pop();
  }
}

function size(stack) {
  return stack.length;
}

function empty(stack) {
  if(stack.length === 0) {
    return 1;
  }
  else {
    return 0;
  }
}

function top(stack) {
  if (empty(stack) === 1) {
    return -1;
  }
  else {
    return stack[stack.length -1];
  }
}

for(let i = 1; i<=n; i++) {
  const init2 = init[i].split(" ")
  const cmd = init2[0]

  if(cmd === "push") {
    push(stack, init2[1]);
  }
  else if (cmd === "pop") {
    result = result + pop(stack);
  }
  else if (cmd === "size") {
    result = result + size(stack);
  }
  else if (cmd === "empty") {
    result = result + empty(stack);
  }
  else if (cmd === "top") {
    result = result + top(stack);
  }

  if (cmd !== "push") 
    result = result + "\n";
  
}

console.log(result);