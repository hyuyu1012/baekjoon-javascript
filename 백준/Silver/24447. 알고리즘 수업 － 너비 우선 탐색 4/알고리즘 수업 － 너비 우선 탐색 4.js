const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");
const [N,M,R] = input[0].split(" ").map(Number);

const depthArray = new Array(N+1).fill(-1); 
const visitedArray = new Array(N+1).fill(0);

class Queue {
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

// 방문 순서 count

function bfs(V) {
  const queue = new Queue();
  let count = 2;
  queue.push(V);
  visitedArray[V] = 1;
  depthArray[V] = 0;

  while(queue.length > 0) {
    const node = queue.shift();
    for(let i = 0; i < graph[node].length; i++) {
      const next = graph[node][i];
      if(!visitedArray[next]) {
        visitedArray[next] = count;
        depthArray[next] = depthArray[node] + 1; 
        queue.push(next);
        count++;
      }
    }
  }
  let answer = 0;
  for(let i = 1; i < visitedArray.length; i++) {
    answer = answer + visitedArray[i] * depthArray[i];
  }
  console.log(answer);  
}

const graph = Array.from({length : N+1}, () => []);
for(let i = 1; i <= M; i++) {
  const [x,y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}
for(let i = 0; i < graph.length; i++) {
  graph[i].sort((a,b) => a-b);
}

// 오름차순, 방문 순서 * 깊이
bfs(R);