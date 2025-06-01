const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(init[0]);
const arr = init[1].split(" ").map(Number);
const x = Number(init[2]);

let count = 0;

arr.sort(function(a,b) {
  return a - b;
})

let start = 0;
let end = arr.length-1;

while(start < end) { 
  let temp = arr[start] + arr[end];

  if(temp === x) {
    count++;
    start++;
    end--;
  }
  else if (temp > x) {
    end--;
  }
  else {
    start++;
  }
}

console.log(count);

