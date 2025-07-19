const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");
const paper = new Array(100).fill(undefined).map((element) => new Array(100).fill(false));

const n = Number(input[0]);

for(let i = 1; i <=n; i++) {
  const temp = input[i].split(" ").map(Number);
  for(let j = 0; j < 10; j++) {
    for(let k = 0; k < 10; k++) {
      if(paper[temp[1] + j][temp[0] + k] === false) {
        paper[temp[1] + j][temp[0] + k]  = true;   
      }
    }
  }
}

let count = 0;
for(let i = 0; i < 100; i++) {
  for(let j = 0; j < 100; j++) {
    if(paper[i][j] === true) {
      count+=1;
    }
  }
}


console.log(count);