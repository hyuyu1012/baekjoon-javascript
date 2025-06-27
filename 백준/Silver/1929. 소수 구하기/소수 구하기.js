// 소수 구하기
// 에라토스테네스의 체

const fs = require('fs');
const [M,N] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let arr = Array.from(new Array(N-M+1), (x, i) => i + M).filter((number) => number !== 1);
const end = Math.sqrt(N).toFixed(0);

for (let i = 2; i<=end; i++) {
   arr.forEach((number, index) => {
    if(number % i === 0 && number !== i) {
      delete arr[index];
    }
   })
}
arr = arr.filter((element) => element !== undefined);
console.log(arr.join("\n"));
