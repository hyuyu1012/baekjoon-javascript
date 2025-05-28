const fs = require('fs');
const str = fs.readFileSync(0).toString().trim().split("");
const dial = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];

let sum = 0;

str.forEach(s => {
  for (let i = 0; i<=7; i++) {
    if (dial[i].includes(s)) {  
      sum = sum + i + 3;
    }
  }
});

console.log(sum);