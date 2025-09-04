const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");
const answer = [];
class Queue  {
  constructor() {
    this.data = [];
    this.head = 0;
  }
  push(element) {
    this.data.push(element);
  } 
  shift() {
    return this.data[this.head++];
  }
  get length() {
    return this.data.length - this.head;
  }
}

function bfs(V) {
  const queue = new Queue();
  const visited = new Array(N+1).fill(false);
  const depthArray = new Array(N+1).fill(-1);
  
  depthArray[V] = 0;
  queue.push(V);
  visited[V] = true;

  while(queue.length > 0){
    const node = queue.shift();   
    for(let i = 0; i < graph[node].length; i++) {
      if(visited[graph[node][i]] === false) {
        queue.push(graph[node][i]);
        visited[graph[node][i]] = true;      
        depthArray[graph[node][i]] = depthArray[node] + 1;
      }
    }
  }
  for(let i = 1; i <depthArray.length; i++) {
    answer.push(depthArray[i]);
  }
  console.log(answer.join("\n"));
}

const [N,M,R] = input[0].split(" ").map(Number);
const graph = Array.from({length : N+1}, () => []);
for(let i = 1; i <= M; i++) {
  const [x,y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

for(let i = 0; i < graph.length; i++) {
  graph[i].sort((a,b) => a-b);
}

bfs(R);