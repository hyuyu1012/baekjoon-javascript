const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n");
const t = Number(init[0]);

const result = [];
for (let i = 1; i<init.length; i = i+Number(init[i])+1) {
  const n = Number(init[i]);
  const obj = new Object(null);
  
  let j = 1;
  while(j<=n) {
    const temp = init[i+j].split(" ");  
    if(temp[1] in obj) {
      obj[temp[1]].push(temp[0]);
    }
    else {
      obj[temp[1]] = [temp[0]];
    }
    j++;
  }

  const arr = Object.values(obj);
  let count = 1;
  for(let k = 0; k < arr.length; k++) {
    count = count * (arr[k].length + 1);

  }
  result.push(count - 1 );
}

console.log(result.join("\n"));