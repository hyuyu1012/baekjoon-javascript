const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n");

const [N,M] = init[0].split(" ").map(Number);
const array = init[1].split(" ").map(Number).sort((a,b) => a-b);
const visited = new Array(N).fill(false);
const result = [];

const dfs = (n, arr) => {
  if(n === M) {
    result.push(arr.join(" "));
    return;
  }

  for(let i= 0; i< N; i++) {
    if(visited[i] === false) {
      arr.push(array[i]);
      visited[i] = true;
      dfs(n+1, arr);
      arr.pop();
      visited[i] = false;     
    }
  }
}
dfs(0, []);
console.log(result.join("\n"));