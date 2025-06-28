const fs = require('fs');
const numbers = fs.readFileSync(0).toString().trim().split("\n").map(Number);

//numbers 배열의 크기
const n = numbers.shift();

// stack에 넣을 원소 배열 모음
const arr = Array.from(new Array(n), (x,i) => i + 1);

const stack = [];
let start = 0;
const result = [];
let flag = true

for(let i = 0; i<numbers.length; i++) {
  const number = numbers[i];
  if(number < start) {
    flag = false;
    break;
  }

  while (number !== stack[stack.length - 1]) {
    stack.push(arr.shift())
    result.push("+");
  }
  stack.pop();
  result.push("-");
  start = stack[stack.length -1];
}

if (flag === true) {
  console.log(result.join("\n"));
}
else {
  console.log("NO");
}