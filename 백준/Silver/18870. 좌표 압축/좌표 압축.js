const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(init[0]);
const arr = init[1].split(" ").map(Number);
const result = [];

const orderObj = Object.create(null);
const sortArray = Array.from(new Set(arr)).sort((a,b) => {return a - b});
sortArray.forEach((num, index) => {
  if(num in orderObj) {

  }
  else {
    orderObj[num] = index;
  }
})

arr.forEach(num => {
  result.push(orderObj[num]);
})

console.log(result.join(" "));