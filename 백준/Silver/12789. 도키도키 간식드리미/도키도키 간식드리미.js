const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const array = input[1].split(" ").map(Number);

const tempArray = [];
const arriveArray = [];
let count = 1;

for(let i = 0; i < array.length; i++) {
  const person = array[i];
  if(person === count) {
    arriveArray.push(person);
    count++;
  }
  else {
    tempArray.push(person);
  }
  while(tempArray.length !== 0)  {
    if(tempArray[tempArray.length -1] === count) {
      arriveArray.push(tempArray.pop());
      count++;
    }
    else break;

  }
}

if(tempArray.length ===0) console.log("Nice");
else {console.log("Sad");}