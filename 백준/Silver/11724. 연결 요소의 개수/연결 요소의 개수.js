const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n");
const [N, M] = init[0].split(" ").map(Number);

class Node{
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class Queue{
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data){
    const newNode = new Node(data);
    if(this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }
  shift() {
    const data = this.tail.data;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return data;
  }
}

const obj = {};
for (let i = 1; i<=N; i++) {
  obj[i] = [];
}


for (let i = 1; i<init.length; i++) {
  const temp = init[i].split(" ").map(Number);
  obj[temp[0]].push(temp[1]);
  obj[temp[1]].push(temp[0]);
}

// console.log(obj);
// 요소 정렬
for (let key in obj) {
  obj[key].sort((a,b) => a-b);
}

let answer = 0;
let visitedCount = 0;
const visited = new Array(N).fill(false);
const queue = new Queue();

while(true) {
  if(visitedCount === N) {
    break;
  }
  for(let i = 0; i < visited.length; i++) {
    if(visited[i] === false){
      queue.push(i + 1);
      break;
    }
  }
  while(queue.length !==0 ) {
    const node = queue.shift();
    if(visited[node - 1] === true) {
      continue;
    }
   
    visited[node - 1] = true;
    visitedCount++;

    obj[node].forEach(element => {
      if(visited[element -1] === false) {
        queue.push(element);
      }
    })
  }
  answer++;
}

console.log(answer);

