const fs = require('fs');
const init = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const T = init[0];

for (let i = 1; i <= T; i++){
  let result = '';
  let testcase = init[i].split(' ');
  
  let r = Number(testcase[0])
  let c_array = testcase[1].split('');

  c_array.forEach(str => {
    for (let j = 0; j < r; j++){
      result = result + str;
    }
  })
  
  console.log(result);

}