const fs = require('fs');
const init = fs.readFileSync(0).toString().split("\n");
const [N,M] = init[0].split(" ").map(Number);

let arr = new Array(N).fill().map((arr, i) => {
  return i+1;
})

for (let a = 1; a<=M; a++) {
  const init2 = init[a].split(" ").map(Number);
  const i = init2[0];
  const j = init2[1];
  [arr[i-1], arr[j-1]] = [arr[j-1], arr[i-1]];
}

console.log(arr.join(" "));