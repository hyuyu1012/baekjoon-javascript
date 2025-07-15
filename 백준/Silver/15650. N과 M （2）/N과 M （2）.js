const fs = require('fs');
const [N,M] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
const ans = [];
const visited = new Array(N+1).fill(0);

const dfs = (n, arr) => {
  if(n===M) {
    const temp = [...arr];
    temp.sort((a,b) => a-b);
    if(ans.includes(temp.join(" "))){}
    else {
      ans.push(arr.join(" "));
    }
    return;
  }

  for(let j = 1; j<N+1; j++) {
    if(visited[j] ===0) {
      visited[j] = 1;
      arr.push(j);
      dfs(n+1, arr);
      visited[j] = 0;
      arr.pop();
    }
  }

}

dfs(0, []);
console.log(ans.join("\n"));