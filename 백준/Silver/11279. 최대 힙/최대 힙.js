const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n").map(Number);
const n = init[0];

class Heap {
  constructor() {
    this.heap = [null];
  }

  insert(value) {
    this.heap.push(value);
    let current = this.heap.length - 1;
    let parent = Math.floor(current/2);
    
    while(parent > 0 && this.heap[current] > this.heap[parent]) {
      [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]];
      current = parent;
      // current 0 이면 자연스럽게 parent도 0이 되기 때문에 상관 없음
      parent = Math.floor(current /2);
    }
  }

  extract() {
    if(this.heap.length === 1) return 0;
    if(this.heap.length === 2) return this.heap.pop();

    const max = this.heap[1];
    this.heap[1] = this.heap.pop();
    let current = 1;

    while(true) {
      let left = current * 2;
      let right = current * 2 + 1;
      let largest = current;
        
      // 바꾸는 조건?
      if(left < this.heap.length && this.heap[left] > this.heap[largest]) {
        largest = left;
      }
      if(right < this.heap.length && this.heap[right] > this.heap[largest]) {
        largest = right;
      }

      if(largest === current) break;
      [this.heap[current], this.heap[largest]] = [this.heap[largest], this.heap[current]];
      current = largest;

    }
    return max;
  }

  peek() {
    return this.heap[1] || 0;
  }
}

const testHeap = new Heap();
const result = []
for(let i = 1; i<=n; i++) {
  if(init[i] === 0) {
    result.push(testHeap.extract());
  }
  else {
    testHeap.insert(init[i]);
  }  
}

console.log(result.join("\n"));