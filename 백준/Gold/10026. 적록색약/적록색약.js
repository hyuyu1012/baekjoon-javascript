const fs = require('fs');
const normalArray = fs.readFileSync(0).toString().split("\n");
const n = Number(normalArray.shift());
const blindArray = normalArray.slice();

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
  get length(){
    return this.data.length - this.head;
  }
}

for(let i = 0 ; i < n; i++) {
  normalArray[i] = normalArray[i].split("");
}
for(let i = 0; i < n; i++) {
  blindArray[i] = blindArray[i].split("");
}


let normalCount = 0;
let blindCount = 0;

const dy = [-1, 1, 0, 0];
const dx = [0,0,-1,1];

const normalBfs = (i,j) => {
  const queue = new Queue();
  queue.push([i,j]);
  const temp = normalArray[i][j];

  while(queue.length > 0) {
    const [y,x] = queue.shift();
    for(let a = 0; a <4; a++) {
      const ny = y + dy[a];
      const nx = x + dx[a];
      if(ny >=0 && ny < n && nx >= 0 && nx < n) {
        if(normalArray[ny][nx] === temp) {
          queue.push([ny, nx]);
          normalArray[ny][nx] = false;
        }
      }
    }
  }
}

const blindBfs = (i,j) => {
  const queue = new Queue();
  queue.push([i,j]);
  const temp = blindArray[i][j];

  while(queue.length > 0) {
    const[y,x] = queue.shift();
    for(let a = 0; a <4; a++) {
      const ny = y + dy[a];
      const nx = x + dx[a];

      if(ny >=0 && ny < n && nx >=0 && nx < n) {
        if(temp === 'R' || temp === 'G') {
            if(blindArray[ny][nx] === 'R' || blindArray[ny][nx] === 'G') {
            queue.push([ny,nx]);
            blindArray[ny][nx] = false;
          }
        }
        else {
          if(blindArray[ny][nx] === temp) {
            queue.push([ny,nx]);
            blindArray[ny][nx] = false;
          }
        }
      }
    }
  }
}


//normal
for(let i = 0; i < n; i++) {
  for(let j = 0 ; j < n; j++) {
    if(normalArray[i][j] !== false) {
      normalBfs(i,j);
      normalCount++;
    }
  } 
}
//blind
for(let i = 0; i < n; i++) {
  for(let j = 0; j < n; j++) {
    if(blindArray[i][j] !== false) {
      blindBfs(i,j);
      blindCount++;
    }
  }
}

console.log(normalCount, blindCount);
