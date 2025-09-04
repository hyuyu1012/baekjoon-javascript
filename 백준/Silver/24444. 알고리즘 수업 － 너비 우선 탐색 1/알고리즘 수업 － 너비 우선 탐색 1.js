const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

const answer = [];

class Queue {
  constructor() {
    this.head = 0;
    this.data = [];
  }
  push(data) {
    this.data.push(data);
  }
  shift() {
    const node = this.data[this.head++];
    return node;
  }
  get length() {
    return this.data.length - this.head;
  }  
}

function bfs(V) {
  const queue = new Queue();
  queue.push(V);
  let count = 1;
  const visited = new Array(N+1).fill(0);
  while(queue.length > 0) {
    const node = queue.shift();
    if(visited[node]) continue;
    visited[node] = count;
    count++;
    for(let i = 0; i < graph[node].length; i++) {
      if(!visited[graph[node][i]]) queue.push(graph[node][i]);
    }
  }
  for(let i=1; i<visited.length; i++) {
    answer.push(visited[i]);
  }
  console.log(answer.join("\n"))
}

const [N,M,R] = input[0].split(" ").map(Number);
const graph = Array.from({length : N+1}, () => []);
for(let i = 1; i <=M; i++) {
  const[x,y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}
for(let i = 1; i < graph.length; i++) {
  graph[i].sort((a,b) => a-b);
}

bfs(R);
