const fs = require('fs');
const n = parseInt((fs.readFileSync("/dev/stdin").toString().trim()));
let result = '';
let repeat;

if (n % 4 === 0) {
  repeat = n / 4;
  for (let i = 0; i < repeat; i++){
    result = result + ' long';
  }
  result = result + ' int';
  console.log(result.trim());
}

else {
  repeat = n / 4 + 1;
  for (let i = 0; i < repeat; i++){
    result = result + ' long';
  }
  result = result + ' int';
  console.log(result.trim());
}
