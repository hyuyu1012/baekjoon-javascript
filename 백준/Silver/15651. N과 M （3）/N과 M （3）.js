const fs = require('fs');
const [N,M]= fs.readFileSync(0).toString().trim().split(" ").map(Number);

const result = [];

const dfs = (n, arr) => {
  if(n === M) {
    result.push(arr.join(" "));
    return
  }
  
  for(let j = 1; j < N + 1; j++) {
    arr.push(j);
    dfs(n+1, arr);
    arr.pop();
  }
}

dfs(0, []);
console.log(result.join("\n"));