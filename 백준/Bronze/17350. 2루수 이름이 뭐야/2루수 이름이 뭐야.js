const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"example.txt").toString().trim().split("\n");

const n = Number(input[0]);

let flag = false;
for(let i = 1; i <=n; i++) {
  if(input[i] === "anj") {
    flag = true;
    console.log("뭐야;")
  }
}

if(flag === false) {
  console.log("뭐야?");
}