const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n");
const[N,M] = init.shift().split(" ").map(Number);

// slice 연습
const arr1 = init.slice(0,N);
const arr2 = init.slice(N);
const result = [];
const obj = Object.create(null);

arr1.forEach(element => {
  obj[element] = true;
})

arr2.forEach(element => {
  if(element in obj) {
    result.push(element);
  } 
})

console.log(result.length);
console.log(result.sort().join("\n"));