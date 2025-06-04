const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

const arr = Array.from({length:n}, (v,i)=>i+1);

for (let i = 0; i<arr.length; i++) {
  const temp = arr[i].toString().split("").map(Number);

  arr[i] = arr[i] + temp.reduce((a,b) => a+b);
}

console.log(arr.indexOf(n) + 1);