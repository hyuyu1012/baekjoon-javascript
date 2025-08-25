const fs = require('fs');
const graph = fs.readFileSync(0).toString().trim().split("\n");
const[N,M] = graph.shift().split(" ").map(Number);
let count = 0;
  
for(let i = 0; i < graph.length; i++) {
  graph[i] = graph[i].split("");
}

const widthSearch = (i, j) => {  
  graph[i][j] = false;
  if(j === M-1 || graph[i][j+1] !== '-') return;
  widthSearch(i, j+1);
}
const heightSerch = (i, j) => {
  graph[i][j] = false;
  if(i === N-1 || graph[i+1][j] !== '|') return;
  heightSerch(i+1, j);
}

for(let i = 0; i < N; i++) {
  for(let j = 0; j < M; j++) {
    if (!graph[i][j]) {
      continue;
    }
    else if(graph[i][j] === '-') {
      count+=1;
      widthSearch(i,j);
    }
    else if (graph[i][j] === '|') {
      count+=1;
      heightSerch(i,j)
    }
  }
}

console.log(count);