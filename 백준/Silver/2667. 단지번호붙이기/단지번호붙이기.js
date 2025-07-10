const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = [];

let count = 0;
const result =[];

for (let i = 1; i<=n; i++) {
  arr.push(input[i].split("").map(Number));
}

for(let y = 0; y<n; y++) {
  for(let x = 0; x<n; x++) {
    if(arr[y][x] === 1 ) {
      arr[y][x] = 0;
      result.push(dfs(y,x));
      count = count + 1;
    }
  }
}
result.sort((a,b) => a-b);
console.log(count);
console.log(result.join("\n"));

function dfs(y,x) {
  const dx = [-1,1,0,0];
  const dy = [0,0,-1,1];
  const stack = [[y,x]];
  let size = 1;

  while(stack.length !== 0){
    const temp = stack.pop();    
    for(let i = 0; i<=3; i++){
      let ny = temp[0]
      let nx = temp[1]
      ny = ny + dy[i];
      nx = nx + dx[i];
      if(nx <0 || nx >=n || ny < 0 || ny >= n) continue;
      if(arr[ny][nx] === 1) {
        size = size + 1;
        stack.push([ny,nx]);
        arr[ny][nx] = 0;
      }
    }
  }
  return size;

}