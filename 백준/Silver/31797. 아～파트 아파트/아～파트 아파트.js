const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");
const[N,M] = input[0].split(" ").map(Number);

class Queue {
  constructor(data) {
    this.data = data;
    this.head = 0;    
  }
  push(x){
    this.data.push(x);
  }
  shift() {
    return this.data[this.head++];
  }
}

const people = {};
const array = [];

for(let i = 1; i <=M; i++) {
  const hand = input[i].split(" ").map(Number);
  const leftHand = hand[0];
  const rightHand = hand[1];

  array.push(leftHand);
  array.push(rightHand);
  
  people[leftHand] = i; 
  people[rightHand] = i;
}
const apart = new Queue(array.sort((a,b) => a-b));


for(let i = 1; i <= N; i++) {
  const tempHand = apart.shift();
  apart.push(tempHand);
}

console.log(people[apart.data[apart.data.length - 1]]);