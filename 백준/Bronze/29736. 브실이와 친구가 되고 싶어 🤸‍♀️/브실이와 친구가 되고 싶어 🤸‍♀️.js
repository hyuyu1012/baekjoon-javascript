const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

const [A,B] = input[0].split(" ").map(Number);
const [K,X] = input[1].split(" ").map(Number);
let count = 0;

for (let i = K-X; i<= K+X; i++) {
  if(i >= A && i <= B) {
    count = count + 1;
  }
}

if(count === 0) {
   console.log("IMPOSSIBLE");
}
else {
   console.log(count);    
}

