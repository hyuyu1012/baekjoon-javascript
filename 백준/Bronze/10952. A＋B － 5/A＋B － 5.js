const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

input.some(nums => {
  numbers = nums.split(" ").map(Number);
  if(numbers[0] === 0 && numbers[1] === 0) {
    return true;
  }
  else{
    console.log(numbers[0] + numbers[1]);
  }
})