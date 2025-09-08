const fs = require('fs');
const [n, k] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const LIMIT = 100001;
const graph = new Array(LIMIT).fill(Infinity);

class Queue {
  constructor() {
    this.data = [];
    this.head = 0;
  }
  push(x) { this.data.push(x); }
  shift() { return this.data[this.head++]; }
  get length() { return this.data.length - this.head; }
}

const queue = new Queue();
graph[n] = 0;
queue.push(n);

while(queue.length > 0) {
  const cur = queue.shift();
  if(cur === k) {
    console.log(graph[cur]);
    break;
  }
  for(const next of [cur - 1, cur + 1, cur * 2]) {
    if(next >= 0 && next < LIMIT && graph[next] === Infinity) {
      graph[next] = graph[cur] + 1;
      queue.push(next);
    }
  }
}