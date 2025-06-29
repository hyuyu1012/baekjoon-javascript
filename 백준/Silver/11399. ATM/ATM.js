const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(init[0]);
const arr = init[1].split(" ").map(Number).sort((a,b) => a-b);

for(let i =1; i<arr.length; i++) {
  arr[i] = arr[i] + arr[i-1];
}

console.log(arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0));