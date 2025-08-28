const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");
//M : 가로, N : 세로
const[M,N] = input[0].split(" ").map(Number);
for(let i = 1; i <=N; i++) {
  input[i] = input[i].split(" ").map(Number);
}

class Queue {
  constructor() {
    this.data = [];
    this.head = 0;
  }
  push(item) {
    this.data.push(item);
  }
  shift() {
    return this.data[this.head++];
  }
  get length() {
    return this.data.length - this.head;
  }
}

const queue = new Queue();
for(let i = 1; i <=N; i++){
  for(let j = 0; j < M; j++) {
    if(input[i][j] === 1) {
      queue.push([i,j,1]);
    }
  }
}
dy = [-1,1,0,0];
dx = [0,0,-1,1];
let max = 1;

while(queue.length > 0) {
  const [y, x, value] = queue.shift()
  // if(input[y][x] === 0) {
  //   input[y][x] = value;
  // }
  for(let i = 0; i < 4; i++) {
    const ny = dy[i] + y;
    const nx = dx[i] + x;
    if(ny >=1 && ny <= N && nx >= 0 && nx<M){
      if(input[ny][nx] === 0) {
        queue.push([ny, nx, value+1]);
        input[ny][nx] = value + 1;
        max = value + 1;
      }
    }
  }
}

let isAllRiped = true;
for (let i = 1; i <= N; i++) {
  if (input[i].includes(0)) {
    isAllRiped = false;
    break;
  }
}

if (!isAllRiped) {
  console.log(-1);
} else {
  console.log(max - 1);
}