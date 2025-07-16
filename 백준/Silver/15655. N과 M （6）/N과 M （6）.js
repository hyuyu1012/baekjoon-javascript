const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n");

const result = [];
const [N,M] = init[0].split(" ").map(Number);
const array = init[1].split(" ").map(Number).sort((a,b) => a-b);
const visited = new Array(N).fill(false);


const dfs = (n, arr) => {
  if(n === M) {
    const temp = [...arr].sort((a,b) => a-b).join(" ");
    if(result.includes(temp)) {}
    else {
      result.push(arr.join(" "));
    }
    return;
  }
  for(let i = 0; i < N; i++) {
    if(visited[i] === false) {
      visited[i] = true;
      arr.push(array[i]);
      dfs(n+1, arr);
      arr.pop();
      visited[i] = false;
    }
  }

}

dfs(0, []);
console.log(result.join("\n"));