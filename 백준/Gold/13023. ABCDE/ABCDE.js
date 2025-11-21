const fs = require('fs');
const input = fs.readFileSync(0)
  .toString()
  .trim()
  .split("\n");

// N : 사람 수(노드 개수), M : 친구 관계의 수(간선의 개수)
const [N,M] = input[0].split(" ").map(Number);
const graph = new Array(N).fill(0).map(() => []);
const visited = new Array(N).fill(false);


function dfs(V, depth) {
    if(depth === 5) return true;
    for(let i = 0; i < graph[V].length; i++) {
      const node = graph[V][i];
      if(visited[node] === false) {
        const next = depth + 1;
        visited[node] = true;
        if(dfs(node, next)) return true;
        visited[node] = false;
      }
    }
    return false;
}

for (let i = 1; i <= M; i++) {
  const [p1, p2] = input[i].split(" ").map(Number);
  graph[p1].push(p2);
  graph[p2].push(p1);
}

let flag = false;

for (let i = 0; i < N; i++) {
  visited[i] = true;
  if(dfs(i, 1)) {
    flag = true;
    break;
  }
  visited[i] = false;
}

if(flag === true) {
  console.log(1);
}
else {
  console.log(0);
}
