const fs = require('fs');
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

for (var i = 1; i<=9; i++) {
  // 템플릿 리터럴
  console.log(`${input} * ${i} = ${input * i}`);
}