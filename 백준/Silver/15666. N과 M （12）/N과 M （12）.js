const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const array = input[1].split(" ").map(Number).sort((a,b) => a-b);
const result = [];
const resultHash = {};

const dfs = (n, arr) => {
  if(n === M) {
    const temp = arr.join(" ");
    if(temp in resultHash) {}
    else {
      resultHash[temp] = true;
      result.push(temp);
    }
  
    return;
  }

  for(let i = 0; i <= array.length - 1; i++) {
    if(arr.length === 0 || arr[arr.length -1] <= array[i]) {
      arr.push((array[i]));
      dfs(n+1, arr);
      arr.pop();
    }
  }
}

dfs(0, []);
console.log(result.join("\n"));