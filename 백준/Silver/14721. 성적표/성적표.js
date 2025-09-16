const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = [];

for(let i = 1; i <= n; i++) {
  const temp = input[i].split(" ").map(Number);
  arr.push(temp);    
}

function f(a,b,x) {
  return (a * x + b);
}

let min = Infinity;
let minA = Infinity;
let minB = Infinity;


for(let a = 1; a <= 100; a++) {
  for(let b = 1; b <= 100; b++) {    
    let RSS = 0;
    for(let i = 0; i < arr.length; i++) {
      if(RSS > min) {
        break;
      }
      RSS = RSS + (arr[i][1] - f(a,b,arr[i][0])) ** 2;
    }
    if(RSS < min) {
      min = RSS;
      minA = a;
      minB = b;
    }
  } 
}

console.log(minA, minB);