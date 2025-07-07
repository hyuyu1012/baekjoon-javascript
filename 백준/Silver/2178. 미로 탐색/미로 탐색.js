const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n");
// 4,5
const [N,M] = init.shift().split(" ").map(Number);

// (0,0)에서 출발하여 (N-1, M-1)의 위치로 이동할 때 지나야 하는 최소의 칸 개수
// bfs에서 깊이는 최단 경로와 같다.

init.forEach((str, index) => {
  init[index] = str.split("");
})

//const result = new Array(M).fill(0).map((v) => v = new Array(N).fill(0));
const result = Array.from({ length: N }, () => new Array(M).fill(0));

const queue = [];
queue.push([0,0]);
result[0][0] = 1;

while(queue.length !== 0) {
  const temp = queue.shift();
  let i = temp[0];
  let j = temp[1];

  if(0 <= j-1) {
    if(init[i][j-1] === '1' && result[i][j-1] === 0) {
      result[i][j-1] = result[i][j] + 1; 
      queue.push([i,j-1])
    }
  }
  if(j+1 <=M-1) {
    if(init[i][j+1] === '1' && result[i][j+1] === 0) {
      result[i][j+1] = result[i][j] + 1;
      queue.push([i,j+1]);   
    }
  }
  if(i-1 >=0){
    if(init[i-1][j] === '1' && result[i-1][j] === 0) {
      result[i-1][j] = result[i][j] + 1; 
      queue.push([i-1,j]);
    }
  }
  if(i+1 <=N-1){
    if(init[i+1][j] === '1' && result[i+1][j] === 0) {
      result[i+1][j] = result[i][j] + 1; 
      queue.push([i+1,j]);
    }
  }
}
console.log(result[N-1][M-1]);
