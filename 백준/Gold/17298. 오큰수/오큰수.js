const fs = require('fs');
const input = fs.readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const array = input[1].split(" ").map(Number);
const stack = [];
const answer = new Array(N).fill(null);

for(let i = 0; i < N; i++) {
  if(stack.length === 0) stack.push(i);
  else if(array[stack[stack.length -1]] >= array[i]) stack.push(i);
  else {
    while(array[stack[stack.length - 1]] < array[i]) {
      const temp = stack.pop(); // 인덱스 pop
      answer[temp] = array[i];
    }
    stack.push(i);
  }
}

answer.forEach((n, index) => {
  if(n === null) answer[index] = -1;
})

console.log(answer.join(" "));