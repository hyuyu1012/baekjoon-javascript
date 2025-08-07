const fs = require('fs');
const input = fs.readFileSync(0).toString().split("\n");

const n = Number(input[0]);
const graph = new Array(n+1).fill(0).map(() => []);
const visited = new Array(n+1).fill(-1);

const dfs = (V, prev) => {
  for(let i = 0; i < graph[V].length; i++) {
    if(visited[graph[V][i][0]] === -1) {
      visited[graph[V][i][0]] = prev + graph[V][i][1];
      dfs(graph[V][i][0], visited[graph[V][i][0]]);
    }
  }
} 

for(let i = 1; i <n ; i++) {
  const [a,b,c] = input[i].split(" ").map(Number);
  graph[a].push([b,c]);
  graph[b].push([a,c]);
}


visited[1] = 0;
dfs(1, 0);
console.log(Math.max(...visited));