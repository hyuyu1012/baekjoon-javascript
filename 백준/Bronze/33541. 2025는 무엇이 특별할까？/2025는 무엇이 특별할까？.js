const fs = require('fs');
const X = Number(fs.readFileSync(0).toString().trim());
let flag = false;

for(let i = X+1; i <= 9999; i++) {
  const temp = String(i).split("");
  if((Number(temp[0]+temp[1]) + Number(temp[2] + temp[3])) ** 2 === i){
    console.log(i);
    flag = true;
    break;
  }
}

if(flag === false) {
  console.log(-1);
}