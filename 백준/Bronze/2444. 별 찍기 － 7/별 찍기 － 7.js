const fs = require('fs');
const n  = Number(fs.readFileSync(0).toString().trim());

for (let i = 1; i <=n; i++) {
  let result = '';
  for (let j = 1; j<=n-i; j++) {
    result = result + ' ';
  }
  for (let j = 1; j <=2*i-1; j++){
    result = result + '*';
  }
  console.log(result);
} 


for (let i = n-1; i>=1; i--) {
  let result = ''
  for (let j = 1; j<=n-i; j++) {
    result = result + ' ';
  }
  for (let j = 1; j<=i*2-1; j++) {
    result = result + '*';
  }
  console.log(result);
}

