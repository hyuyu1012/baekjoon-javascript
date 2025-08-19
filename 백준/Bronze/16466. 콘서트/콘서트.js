const fs = require('fs');
const input = fs.readFileSync(0).toString().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number).sort((a,b) => a-b);
const obj = Object.create(null);
const maxNumber = arr[arr.length -1];

for(let i =1; i<=1000000; i++) {
  obj[i] = false;
}

arr.forEach(n => {
  obj[n] = true;
})

for(let i = 1; i<=1000000; i++) {
  if(obj[i] === false) {
    console.log(i);
    break;
  } 
}