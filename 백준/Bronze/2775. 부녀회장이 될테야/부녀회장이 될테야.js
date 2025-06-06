const fs = require('fs');
const init = fs.readFileSync(0).toString().split("\n").map(Number);

const t = init[0];

const arr = new Array(15).fill(1).map(() => new Array(14).fill(1));
arr[0] = arr[0].fill(0).map((v, i) => i + 1);


for (let i = 1; i<=14; i++) {
  for (let j = 1; j<=13; j++) {
    arr[i][j] = arr[i-1][j] + arr[i][j-1];
  }
}




for(let i = 1; i<=t*2-1; i= i+2) {
  const k = init[i];
  const n = init[i+1];
  console.log(arr[k][n-1]);
}
