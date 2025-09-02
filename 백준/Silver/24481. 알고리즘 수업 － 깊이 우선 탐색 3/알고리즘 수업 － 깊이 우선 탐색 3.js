const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");
const[N,M,R] = input[0].split(" ").map(Number);
const visited = new Array(N+1).fill(-1);
const answer = [];

function bfs(V, depth) {
  visited[V] = depth;
  for(let i = 0; i < graph[V].length; i++) {
    if(visited[graph[V][i]] === -1){
      bfs(graph[V][i], depth+1);
    }
  }
}

const graph = Array.from({length : N + 1}, () => []);

for(let i =1; i <=M; i++) {
  const[x,y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
} 

for(let i = 0; i < graph.length; i++) {
  graph[i].sort((a,b) => a-b);
}

bfs(R, 0);
for(let i = 1; i < visited.length; i++) {
  answer.push(visited[i]);
}
console.log(answer.join("\n"));
