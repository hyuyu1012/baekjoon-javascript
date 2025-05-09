const fs = require('fs');
const init = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = init[0];

for(let i = 1; i <= T; i++){
  let score = 0;
  let count = 1;
  let result = init[i].split('');

  result.forEach(str => {
    if (str === 'O'){
      score = score + count;
      count = count + 1;
    }
    else{
      count = 1;
    }
  })
  console.log(score);
}