const fs = require('fs');
const input  = fs.readFileSync(0).toString().trim().split("\n");

const [N,M] = input[0].split(" ").map(Number);

const obj = Object.create(null);

for(let i = 1; i<=N; i++) {
  obj[input[i]] = true;
}

let count = 0;
for(let i = N+1; i <= input.length-1; i++) {
  if(input[i] in obj) {
    count +=1;
  }
}

console.log(count);