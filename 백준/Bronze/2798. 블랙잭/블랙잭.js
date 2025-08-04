const fs = require('fs');
const init = fs.readFileSync(0).toString().split("\n");

const [N,M] = init[0].split(" ").map(Number);
const numbers = init[1].split(" ").map(Number);

let max = 0;
for (let i = 0; i<=N-1; i++) {
  for (let j = i+1; j <= N-1; j++){
    for (let k = j+1; k <= N-1; k++) {
      const result = numbers[i] + numbers[j] + numbers[k];
      if (result > max && result <= M){
          max = result;
      }
    }
  }
}
console.log(max);