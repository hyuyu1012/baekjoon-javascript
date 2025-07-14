const fs = require('fs');
const [N,M] = fs.readFileSync(0).toString().split(" ").map(Number);

const ansArray = [];
const visited = new Array(N+1).fill(0);

const dfs = (n, arr) => {
  if( n===M ) {
    ansArray.push([...arr]);
    return;
  }
  for(let j = 1; j < N+1; j++) {
   if(visited[j] === 0) { 
    visited[j] = 1;
    arr.push(j);
    dfs(n+1, arr);
    arr.pop();    
    visited[j] = 0;
   } 
  }
}

dfs(0, []);

ansArray.forEach((s, index) => {
  ansArray[index] = s.join(" ");
})

console.log(ansArray.join("\n"));