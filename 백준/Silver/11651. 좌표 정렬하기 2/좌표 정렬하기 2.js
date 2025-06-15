const fs = require('fs');
const init = fs.readFileSync(0).toString().split("\n");
const n = Number(init.shift());
const temp = [];
let result = '';

for (let i = 0; i<n; i++) {
  temp.push(init[i].split(' ').map(Number));
}

temp.sort((a,b) => {
  if(a[1] !== b[1]) {
    return a[1]-b[1];
  }
  return a[0] - b[0];
})

temp.forEach(arr=> {
  result = result +  `${arr[0]} ${arr[1]}\n`
})

console.log(result.trim());