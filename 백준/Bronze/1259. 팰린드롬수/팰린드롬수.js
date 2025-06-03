const fs = require('fs');

const init = fs.readFileSync(0).toString().trim().split("\n");

init.forEach(number => {
  const arr = number.split("").reverse();

  if (number ==='0') {
    // if 조건문을 비워두면 python의 pass처럼 작동한다.
  }
  else if(arr.join("") === number) {
    console.log("yes");
  }

  else {
    console.log("no");
   }
});