const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

class Queue {
  constructor() {
    this.data = []; 
    this.head = 0;
    this.tail = 0;
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
  get front() {
    return this.data[this.head];
  }
}

const [N,M] = input[0].split(" ").map(Number);
const temp1 = input[1].split(" ").map(Number);
const temp2 = input[2].split(" ").map(Number);
const firstArray = new Queue();
const secondArray = new Queue();
const answer = [];
temp1.forEach((n) => firstArray.push(n));
temp2.forEach((n) => secondArray.push(n));

while(true) {
  if(firstArray.length === 0 && secondArray.length ===0) break;
  if(firstArray.length ===0 ) {
    while(secondArray.length != 0) {
      answer.push(secondArray.shift());
    }
    break;
  }
  if(secondArray.length ===0) {
  while(firstArray.length !== 0) {
    answer.push(firstArray.shift());
  }
  break;
  }


  if(firstArray.front<= secondArray.front) {
    answer.push(firstArray.shift());
  }
  else {
    answer.push(secondArray.shift());
  }
}

console.log(answer.join(" "));