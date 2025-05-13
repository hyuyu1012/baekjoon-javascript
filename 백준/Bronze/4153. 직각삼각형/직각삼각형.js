const fs = require('fs')
const init = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let i = 0;


while(true){
  let init2 = init[i].split(" ").map(Number);
  init2.sort((a, b) => a - b);
  let hypotenuse = init2[2]
  let a = init2[0];
  let b = init2[1];
  if (a === 0  && b === 0 && hypotenuse === 0){
    break;
  }
  if(a ** 2 + b ** 2 === hypotenuse ** 2){
    console.log("right");
  }
  else {
    console.log("wrong");
  }
  i = i + 1;
}
