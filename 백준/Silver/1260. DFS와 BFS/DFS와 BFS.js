const fs = require('fs');
const init = fs.readFileSync(0).toString().split("\n");

// N : 정점의 개수, M : 간선의 개수, V : 탐색을 시작할 정점의 번호
const [N, M, V] = init[0].split(" ").map(Number);

// 인접 리스트 초기화
const graph = {};
for (let i = 1; i<=N; i++) {
  graph[i] = [];
}


for(let i = 1; i<=M; i++) {
   const temp = init[i].split(" ").map(Number);
   graph[temp[0]].push(temp[1]);
   graph[temp[1]].push(temp[0]);
}

for (let key in graph) {
  if(graph.hasOwnProperty(key)) {
    graph[key].sort((a,b) => b-a);
  }
}

// console.log(graph);

function dfs(V){
 const visited = new Array(N).fill(false);
 const stack = [];
 const result = [];
 stack.push(V);

 while(stack.length !==0) {
  const node = stack.pop();
  if(visited[node-1] == true) {
    continue;
  }
  visited[node-1] = true; // 방문처리
  result.push(node);

  const temp = graph[node];
  temp.forEach(n=> {
    if(visited[n-1] === false) {
      stack.push(n);
    }
  })
 }
  console.log(result.join(" "));
}


function bfs(V) {
  const visited = new Array(N).fill(false);
  const queue = [];
  const result = [];
  queue.push(V);

  while(queue.length !== 0) {
    const node = queue.shift();
    if(visited[node-1] === true) {
      continue;
    }
    visited[node -1] = true;
    result.push(node);
    const temp = graph[node];

    for(let i = temp.length -1; i>=0; i--) {
      if(visited[temp[i] -1] === false) {
        queue.push(temp[i]);
      }
    }
  }
  console.log(result.join(" "));
}

dfs(V);
bfs(V);