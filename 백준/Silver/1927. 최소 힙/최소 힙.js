const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);
const n = input[0];
class Heap {
  constructor() {
    this.heap = [null]; // 계산 편의성을 위해서 처음에 Null 값을 넣는다.
  }

  insert(value) {
    this.heap.push(value);

    let current = this.heap.length -1;
    let parent = Math.floor(current / 2);

    // 작으면 올리는 연산
    while(parent > 0 && this.heap[current] < this.heap[parent]) {
      [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]];
      current = parent;
      parent = Math.floor(current / 2);
    }
  }
  
  // 맨 위, 최소값 정렬
  extract() {
    if(this.heap.length === 1) return 0;
    if(this.heap.length === 2) return this.heap.pop();

    const min = this.heap[1];
    this.heap[1] = this.heap.pop();

    let current = 1;

    while(true) {
      let left = current * 2;
      let right = current * 2 + 1;
      let minest = current;

      if(left < this.heap.length && this.heap[left] < this.heap[minest]) {
        minest = left;
      }

      if(right < this.heap.length && this.heap[right] < this.heap[minest]){
        minest = right;
      }

      if(minest === current)  break;
      [this.heap[current], this.heap[minest]] = [this.heap[minest], this.heap[current]];
      current = minest;
      }
      return min;
  }
}
const heap = new Heap();
const result = [];
for (let i = 1; i<=n; i++) {
  if(input[i]===0) {
    result.push(heap.extract());
  }
  else {
    heap.insert(input[i]);
  }
}

console.log(result.join("\n"));