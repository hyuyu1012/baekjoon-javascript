const fs = require('fs');
const input = fs.readFileSync(0)
  .toString()
  .trim()
  .split("\n")

const answer = [];
const array = input[1].split("*");
array[1] = array[1].split("").reverse();

// console.log(array[0]);
// console.log(array[1]);


const checkStr = (str) => {
  for(let j = 0; j < array[0].length; j++) {
    if(str.length < array[0].length + array[1].length) return false;
    if(str[j] !== array[0][j]) {
      // console.log(str[j]);
      return false;
    }
  }  
  for(let j = 0; j < array[1].length ; j++) {
    const weight = (j * -1) -1; 
    if(array[1][j] !== str[str.length + weight]) {
      return false;
   }
  }
  return true;
}

for(let i = 2; i < input.length; i++) {
  const temp = input[i];
  checkStr(temp) ? answer.push("DA") : answer.push("NE");
}

console.log(answer.join("\n"));