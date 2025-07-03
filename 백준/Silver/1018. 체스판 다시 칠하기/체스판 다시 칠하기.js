const fs = require('fs');
let init = fs.readFileSync(0).toString().trim().split("\n");
const [N,M] = init.shift().split(" ").map(Number);
init = init.map((i) => i.split(""));

const whiteFirstBoard = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const blackFirstBoard = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];
 
function whiteFirstPaint(x, y) {
  let count = 0;
  for (let i = 0; i< 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (init[x + i][y + j] !== whiteFirstBoard[i][j]) {
        count ++;
      }      
    }
  }
  return count;
}

function blackFirstPaint(x, y) {
  let count = 0;
  for (let i = 0; i< 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (init[x + i][y + j] !== blackFirstBoard[i][j]) {
        count ++;
      }      
    }
  }
  return count;
}

const temp = [];

for (let i = 0; i < N - 7; i++){
  for (let j = 0; j  < M - 7; j++) {
      temp.push(whiteFirstPaint(i,j));
      temp.push(blackFirstPaint(i,j));
  }
}

console.log(Math.min(...temp));

