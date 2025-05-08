const fs = require('fs');
const numbers = fs.readFileSync("/dev/stdin").toString().trim().split("\n");


// Js에서 Number + String 연산을 진행하게 되면 문자열 연산이 일어나게 된다.
// - 연산은 String 연산을 Number로 변환
console.log(Number(numbers[0]) + Number(numbers[1]) - numbers[2]);
console.log(numbers[0] + numbers[1] - numbers[2]);