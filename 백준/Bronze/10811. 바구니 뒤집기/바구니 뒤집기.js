const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n");
const [N,M] = init[0].split(" ").map(Number);


// 배열 초기화
let arr = new Array(N).fill().map((arr, i) => {
  return i + 1;
});

// swap
for (let a = 1; a <=M; a++) {
  let [i,j] = init[a].split(" ").map(Number);
  while(true) {
    if (i===j || i>j) {
      break;
    }
    [arr[i-1] , arr[j-1]] = [arr[j-1], arr[i-1]];
    i++;
    j--;
  }
}

console.log(arr.join(" "));