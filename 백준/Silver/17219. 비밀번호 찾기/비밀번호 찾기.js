const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = init.shift().split(" ").map(Number);
const obj = Object.create(null) // 해쉬로 사용하기 위해서
const result = [];

for(let i = 0; i<N; i++) {
  const temp = init[i].split(" ");
  obj[temp[0]] = temp[1];
}

for(let i = N; i<init.length; i++) {
  // console.log(obj[init[i]]);
  result.push(obj[init[i]]);
}

console.log(result.join("\n"));

