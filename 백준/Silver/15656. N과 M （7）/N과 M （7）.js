const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n");

const [N,M] = init[0].split(" ").map(Number);
const numbers = init[1].split(" ").map(Number).sort((a,b) => a-b);
const result = [];


const dfs = (n, arr) => {
  if(n===M) {
    result.push(arr.join(" "));
    return;
  }

  for(let i = 0; i< N; i++) {
    arr.push(numbers[i]);
    dfs(n+1, arr);
    arr.pop();
  }
  
}

dfs(0, []);
console.log(result.join("\n"));