const fs = require('fs');
n = Number(fs.readFileSync("/dev/stdin").toString().trim());


for(let i = 1; i <=n ; i++) {
  let result = ''
  
  for (let j = 1; j <= n-i; j++) {
    result = result + ' ';
  }
  for (let j = 1; j <= i; j++ ) {
    result = result + '*';
  }
  console.log(result);
}
