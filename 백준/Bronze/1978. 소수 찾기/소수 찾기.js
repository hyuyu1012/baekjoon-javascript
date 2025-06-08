const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n")

const n = Number(init[0]);
const numbers = init[1].split(" ").map(Number);
let count = 0;

numbers.forEach(number => {
  for(let i=2; i<=number; i++){
    if(number % i === 0) {
      if(number === i ){
        count = count + 1;
      }
      break;      
    }
  }
})

console.log(count);