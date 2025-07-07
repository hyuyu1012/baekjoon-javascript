const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n");
const t = Number(init[0]);
let line = 1;

for(let i = 1; i <=t; i++) {
  // 배추밭의 가로길이 : M , 배추밭의 세로길이 : N, 배추가 심어져 있는 위치의 개수 : K
  const[M,N,K] = init[line++].split(" ").map(Number);
  const graph = Array.from({length : N}, () => new Array(M).fill(0));
  
  for(let j = 1; j <= K; j++){
    const [x,y] = init[line++].split(" ").map(Number);
    graph[y][x] = 1;
  }

  let count = 0;
  const dx = [0,0,-1,1];
  const dy = [-1, 1, 0, 0];

  const dfs = (x,y) => {
    if(x < 0 || x >= M || y < 0 || y >= N) return;
    if(graph[y][x] === 0) return;

    graph[y][x] = 0;
    for(let i = 0; i<4; i++) {
      dfs(x + dx[i], y+dy[i]);
    }
  };

  for(let y=0; y<N; y++) {
    for(let x=0; x<M; x++) {
      if(graph[y][x] === 1) {
        dfs(x,y);
        count++;
      }
    }
  }

  console.log(count);
}