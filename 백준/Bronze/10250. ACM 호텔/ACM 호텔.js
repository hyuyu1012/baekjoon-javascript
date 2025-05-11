const fs = require('fs');

const init = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(init[0]);
for (let i = 1; i <= T; i++){
  let [H, W, N] = init[i].split(" ").map(Number);
  let height, width;
  let result = '';

  if (Math.trunc(N % H) === 0){
    height = H
  }
  else{
    height = N % H;
  }

  if (Math.trunc(N % H) === 0) {
    width = N / H;
  }
  else {
    width = Math.trunc(N/H) + 1;
  }

  let count = String(W).length - String(width).length;

  
  for (let j = 1; j<=count; j++) {
    result = result + '0';
  }
  
  if (result.length === 0 && String(width).length === 1){
    result = result +'0';
  }
  result = String(height) + result + String(width);
  console.log(result);
}