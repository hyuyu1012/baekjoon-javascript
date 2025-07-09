const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);
const n = input[0];

class Heap{
  constructor(){
    this.heap = [null];
  }

  insert(data) {
    this.heap.push(data);
    let current = this.heap.length -1;
    let parent = Math.floor(current / 2);

    while(parent > 0)  {
      if(this._compare(this.heap[current], this.heap[parent]) < 0) {
        [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]];
        current = parent;
        parent = Math.floor(current / 2);
      }
      else break;
    }

  }

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
      if(left < this.heap.length && this._compare(this.heap[left], this.heap[minest]) < 0) {
        minest = left;
      }

      if(right < this.heap.length && this._compare(this.heap[right], this.heap[minest]) < 0) {
        minest = right;
      }

      if(minest === current) break;
      [this.heap[current], this.heap[minest]] = [this.heap[minest], this.heap[current]];
      current = minest;
    }
    return min;
  }

  _compare(current,parent){
    const absA = Math.abs(current);
    const absB = Math.abs(parent);

    if(absA !== absB) return absA - absB;
    return current - parent;
  }
}

const heap = new Heap();
const result = [];
for(let i = 1; i<=n; i++) {
  if(input[i] === 0){
    result.push(heap.extract());
  }
  else {
    heap.insert(input[i]);
  }
}
console.log(result.join("\n"));