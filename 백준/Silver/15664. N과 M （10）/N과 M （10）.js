const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const array = input[1].split(" ").map(Number).sort((a,b) => a-b);
const result = [];

const visited = new Array(N+1).fill(false);

const dfs = (n, arr) => {
  if(n === M) {
    const temp = [...arr].sort((a,b) => a-b).join(" ");
    if(result.includes(temp)){}
    else {
      result.push(temp);     
    }
    return;
  }

  for(let i = 0; i <= array.length - 1; i++) {
    if(visited[i] === false) {
      arr.push(array[i]);    
      visited[i] = true;
      dfs(n+1, arr);
      arr.pop();
      visited[i] = false;
    }
  }
}
dfs(0, []);
console.log(result.join("\n"));