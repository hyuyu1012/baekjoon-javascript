const fs = require('fs');
const [n,k] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
const maxRange = Math.max(n,k);

const graph = new Array(maxRange * 2 + 1).fill(Infinity);


class Queue {
  constructor() {
    this.data = [];
    this.head = 0;
  }
  push(data) {
    this.data.push(data);
  }
  shift() {
    return this.data[this.head++];
  }
  
  get length() {
    return this.data.length - this.head;  
  }
}

graph[n] = 0;
const queue = new Queue();
queue.push(n);

while(graph[k] === Infinity) {  
  const temp = queue.shift();
  if(graph[temp -1] === Infinity) {
    graph[temp - 1] = graph[temp] + 1;
    queue.push(temp-1);
  }
  if(graph[temp + 1] === Infinity) {
    graph[temp + 1] = graph[temp] + 1;
    queue.push(temp+1);
  }
  if(graph[temp * 2] === Infinity) {
    graph[temp * 2] = graph[temp] + 1;
    queue.push(temp * 2);
  }
}

console.log(graph[k]);