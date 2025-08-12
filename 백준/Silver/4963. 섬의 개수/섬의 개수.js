const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

const result = [];
let line = 0;

while(true) {
  const [w,h] = input[line++].split(" ").map(Number);
  if(w === 0 && h === 0) break;

  const graph = [];
  let count = 0;  
  for(let i = 1; i <= h; i++){
    graph.push(input[line++].split(" ").map(Number));
  }
  const dy = [-1,-1,-1,0,0,1,1,1];
  const dx = [0,1,-1,1,-1,0,-1,1];

  const dfs = (y,x) => {
    if(y < 0 || x < 0 || y >= h || x>= w) return;
    if(graph[y][x] === 0) return;

    graph[y][x] = 0
    for(let a = 0; a<8; a++) {
      dfs(dy[a]+y, dx[a]+x);
    }
  }
  for(let y = 0; y < h; y++) {
    for(let x = 0; x < w; x++) {
      if(graph[y][x] === 1)  {
        count++;
        dfs(y,x);
      }
    }
  }
  result.push(count);
}

console.log(result.join("\n"));