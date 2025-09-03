const fs = require('fs');
const [N,M] = fs.readFileSync(0).toString().split(" ").map(Number);

const visited = new Array(N).fill(false);
const ansArray = [];

function dfs(n, arr) {
  if(n === M) {
    ansArray.push(arr.join(" "));
    return;
  }

  for(let i = 1; i <= N; i++) {
    if(!visited[i]) {
      visited[i] = true;
      arr.push(i);
      dfs(n+1, arr);
      arr.pop();
      visited[i] = false; 
    }
  }
}

dfs(0, []);
console.log(ansArray.join("\n"));