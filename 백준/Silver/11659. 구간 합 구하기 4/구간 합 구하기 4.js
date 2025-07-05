const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = init[0].split(" ").map(Number);
const arr = init[1].split(" ");
const result = [];

arr[0] = Number(arr[0]);
for(let i = 1; i <N; i++) {
  arr[i] = Number(arr[i]);  
  arr[i] = arr[i] + arr[i-1];
}
 
for (let k = 0; k < M; k++) {
  let [i,j] = init[k + 2].split(" ").map(Number);

  i = i-1;
  j = j-1;

  if(i === 0 ) {
    result.push(arr[j]);
  }
  else {
  result.push(arr[j] - arr[i-1]);
  }
}
console.log(result.join("\n"));