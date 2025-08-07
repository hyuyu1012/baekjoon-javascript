const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M, R] = input[0].split(" ").map(Number);
const depth = new Array(N+1).fill(-1);
const graph = new Array(N+1).fill(0).map(() => []);
const result = [];


const dfs = (R, d) => {
  depth[R] = d;
  for(let i = 0; i < graph[R].length; i++) {
    if(depth[graph[R][i]] === -1) {
      dfs(graph[R][i], d+1);
    }
  }
}

for(let i = 1; i <=M; i++) {
  const [x,y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

for(let i = 1; i < graph.length; i++) {
  graph[i].sort((a,b) => b-a);
}

dfs(R, 0);
for(let i = 1; i < depth.length; i++) {
  result.push(depth[i]);
}
console.log(result.join("\n"));