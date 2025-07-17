const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N,M] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number).sort((a,b) => a-b);
const result = [];

const dfs = (n, arr) => {
  if(n===M) {
    result.push(arr.join(" "));
    return;
  }

  for(let i = 0; i < N; i++) {
    if(arr.length ===0. || arr[arr.length -1] <= numbers[i]){
      arr.push(numbers[i]);
      dfs(n+1, arr);
      arr.pop();
    }

  }
}

dfs(0, []);

console.log(result.join("\n"));