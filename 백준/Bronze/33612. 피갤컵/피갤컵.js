const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
// 쭉 계산해야된다면? // 이차원 배열?
// 8 9 10 11 12 1 2 3 4 5 6 7 8 9 10
let year = 2024;
let month = 1;

for(let i = 1; i <=n; i++) {
  month = month + 7
  if(month > 12) {
    year = year + 1;
    month = month - 12;
  }
}
console.log(year, month);