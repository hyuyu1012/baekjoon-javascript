const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n").map(Number);
const n = init.shift();

if(init.length === 0) {
  console.log(0)
}

else {
init.sort((a,b) => { return a-b });

//아무 의견이 없다면 문제의 난이도는 0으로 결정한다. // 의견이 하나 이상 있다면 문제의 난이도는 모든 사람의 난이도 의견에 30% 절사ㅕ평균
const temp = Math.round(n * (15/100));
const people = n - 2 * temp;

const start = temp;
const end = init.length - temp;
const newArr = init.slice(start, end)


const sum = newArr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 0);

console.log(Math.round(sum/people));
}