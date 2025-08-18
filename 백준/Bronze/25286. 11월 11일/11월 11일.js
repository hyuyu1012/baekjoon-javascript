const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

const t = Number(input[0]);
const oneArray = [1,3,5,7,8,10,12];
const zeroArray = [4,6,9,11];

const result = [];

for(let i = 1; i<=t; i++) {
  const [y,m] = input[i].split(" ").map(Number);
  let year, month, day;
  if(m-1 > 0) {
    year = y;
    month = m-1;
  }
  else {
    year = y-1;
    month = 12;
  }
  if (oneArray.includes(month)) {
    day = 31;
  }
  else if (zeroArray.includes(month)) {
    day = 30;
  }
  else if (month === 2) {
    if((year % 400 ===0) || ((year % 4 ===0) && (year % 100 !==0))){
      day = 29;
    }
    else {
      day = 28;
    }
  }
  result.push(String(year) + " " + String(month) + " " + String(day)); 
}
console.log(result.join("\n"));