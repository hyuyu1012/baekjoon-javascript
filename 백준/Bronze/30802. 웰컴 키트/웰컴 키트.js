const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(init[0]);
const tArray = init[1].split(" ").map(Number);
const [T,P] = init[2].split(" ").map(Number);

let tResult = 0;

tArray.forEach((number) => {
  let temp = Math.trunc(number/T);
  if(number % T !==0) {
    temp = temp + 1
  }
  tResult = tResult + temp;
})

console.log(tResult);
console.log(Math.trunc(N/P), N%P);