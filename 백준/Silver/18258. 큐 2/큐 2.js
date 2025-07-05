const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n");
const result = [];

class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next  = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    const newNode = new Node(data);
    if(this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  

  pop() {
    if(this.length === 0) {
      result.push(-1);
      return; 
    } 
    const temp = this.head.data;
    
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
    result.push(temp);
  }

  size() {
    result.push(this.length);
  }

  empty() {
    if(this.length ===0){
      result.push(1);
    }
    else {
      result.push(0)
    }
  }

  front() {
    if(this.length === 0 ) {
      result.push(-1);
    }
    else {
      result.push(this.head.data);
    }
  }
  
  back() {
    if(this.length === 0 ) {
      result.push(-1);
    }
    else {
      result.push(this.tail.data);
    }
  }
}

const n = Number(init[0]);
const queue = new Queue();

for (let i = 1; i<=n; i++) {
  switch(init[i]) {
    case 'pop' : 
      queue.pop();
      break;
    case 'size' :
      queue.size();
      break;
    case 'empty' :
      queue.empty();
      break;
    case 'front' :
      queue.front();
      break;
    case 'back' :
      queue.back();
      break;
    default : 
      const pushTemp = init[i].split(" ");
      queue.push(pushTemp[1]);
  }
}
console.log(result.join("\n"));