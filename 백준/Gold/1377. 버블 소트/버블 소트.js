// 버블 정렬을 진행할 때 정렬이 완성된 횟수를 찾아라
const fs = require('fs');
const input = fs.readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const n = Number(input[0])
const array = [];

for(let i = 1; i < input.length; i++) {
  array.push([input[i], i]);
}
array.sort((a,b) => a[0] - b[0]);
let answer = 1;
for(let i = 0; i < array.length; i++) {
  answer = Math.max(answer, array[i][1] - i);
}
console.log(answer);