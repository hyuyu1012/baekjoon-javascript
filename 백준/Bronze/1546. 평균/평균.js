const fs = require('fs')
const init = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(init[0]);
const grade = init[1].split(" ").map(Number);

const max_number = Math.max(...grade);

let sum = 0;

grade.forEach(number => {
  sum = sum + number / max_number * 100;
});

console.log(sum / n);