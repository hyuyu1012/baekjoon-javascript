const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N,M,R] = input[0].split(" ").map(Number);
const graph = Array.from({length : N+1}, () => []);

const depthArray = new Array(N+1).fill(-1);
const orderArray = new Array(N+1).fill(0);
let order = 1;

function dfs(V, depth) {
  orderArray[V] = order;
  order++;
  depthArray[V] = depth;
    for(let i = 0 ; i < graph[V].length; i++) {
      if(orderArray[graph[V][i]] === 0) {
        dfs(graph[V][i], depth+1)
      }
  }
}


for(let i = 1; i <=M; i++) {
  const[x,y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

for(let i = 0; i < graph.length; i++) {
  graph[i].sort((a,b) => a-b);
} 

dfs(R, 0);

let result = 0;
for(let i = 1; i<=N; i++) {
  result = result + depthArray[i] * orderArray[i];
}
console.log(result);