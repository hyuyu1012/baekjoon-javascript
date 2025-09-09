const fs = require('fs');
const [n, k] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const LIMIT = 100001;
const dist = new Array(LIMIT).fill(Infinity); // 최단 거리 기록
const ways = new Array(LIMIT).fill(0);        // 해당 위치까지 오는 경우의 수 기록

class Queue {
  constructor() {
    this.data = [];
    this.head = 0;
  }
  push(x) { this.data.push(x); }
  shift() { return this.data[this.head++]; }
  get length() { return this.data.length - this.head; }
}

const queue = new Queue();
dist[n] = 0;
ways[n] = 1;
queue.push(n);

while (queue.length > 0) {
  const cur = queue.shift();

  for (const next of [cur - 1, cur + 1, cur * 2]) {
    if (next < 0 || next >= LIMIT) continue;

    // 처음 방문하는 경우 → 거리 갱신, 경우의 수 그대로 전달
    if (dist[next] === Infinity) {
      dist[next] = dist[cur] + 1;
      ways[next] = ways[cur];
      queue.push(next);
    }
    // 이미 최단 거리로 도착한 경우 → 경우의 수 누적
    else if (dist[next] === dist[cur] + 1) {
      ways[next] += ways[cur];
    }
  }
}

console.log(dist[k]);
console.log(ways[k]);