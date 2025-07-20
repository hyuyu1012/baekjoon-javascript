const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N,M] = input[0].split(" ").map(Number);
const array = input[1].split(" ").map(Number).sort((a,b) => a-b);
const result = [];
const visited = new Array(N).fill(false);

const dfs = (n, arr) => {
  if(n === M) {
    const temp = arr.join(" ");
    if(result.includes(temp)) {}
    else {
      result.push(temp);
    }
    return;
  }
  for(let i = 0; i < array.length; i++){
    if(visited[i] === false) {
      visited[i] = true;
      arr.push(array[i]);
      dfs(n+1, arr);
      visited[i] = false;
      arr.pop();
    }    
  }
}

dfs(0, []);
console.log(result.join("\n"));
