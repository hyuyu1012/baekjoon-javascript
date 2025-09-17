const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");
const ans = [];
const locker = {}
// 요청의 개수
const M = Number(input[0]);
for(let i = 1; i <=M; i++)  {
  const temp = input[i].split(" ").map(Number);
  if(temp[0] === 1) {
    locker[temp[2]] = Number(temp[1]); 
  }
  else if (temp[0] === 2) {
    ans.push(locker[temp[1]]);
  }

}
console.log(ans.join("\n"));