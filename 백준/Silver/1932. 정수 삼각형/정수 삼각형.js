const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);

for(let i = 1; i<=n; i++) {
  input[i] = input[i].split(" ").map(Number); 
}

for(let i = 2; i <=n; i++) { 
  input[i].forEach((n, index) => {
    if(index === 0) {
      input[i][index] = input[i-1][index] + n;
    }
    else if(index === input[i].length-1) {
      input[i][index] = input[i-1][index-1] + n;
    }
    else {
      input[i][index] = Math.max(n + input[i-1][index-1], n+input[i-1][index]);
    }
  }) 
}

console.log(Math.max(...input[n]));