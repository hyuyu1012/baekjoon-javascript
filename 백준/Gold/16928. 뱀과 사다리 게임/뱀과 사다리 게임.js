const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");
const [N,M] = input[0].split(" ").map(Number);

const teleport = {}
const map = new Array(101).fill(Infinity);

class Queue {
  constructor() {
    this.data = []
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

for(let i = 1; i <= N+M; i++) {
  const [a,b] = input[i].split(" ").map(Number);
  teleport[a] = b;
}

// 초기값 설정
const queue = new Queue();
map[1] = 0;
queue.push(1);


// 종료 조건은? : bfs로 그래프를 탐색하므로 100번지를 방문하면 종료
while(queue.length > 0) {
  const cur = queue.shift();
  
  const currentValue = map[cur];
  const nextValue = map[cur] + 1;

  if(teleport[cur]) {
    if(map[teleport[cur]] > map[cur]) {
      const arrive = teleport[cur];
      map[arrive] = currentValue;
      queue.push(arrive);
    }
    continue;
  }
  for(const next of [cur + 1, cur + 2, cur + 3, cur + 4, cur + 5, cur + 6]) { 
    if(map[next] > nextValue) {
      map[next] = nextValue
      queue.push(next);
    }
  }
}

console.log(map[100]);