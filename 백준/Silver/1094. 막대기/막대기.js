const fs = require('fs')
const x = Number(fs.readFileSync(0).toString().trim());
const arr = [64];

if(x === 64) {
  console.log(1);
  return;
}

while(true) {
  const temp = arr.pop();
  arr.push(temp/2, temp/2);
  let sum = 0;
  for(let i = 0; i < arr.length -1; i++) {
    sum = sum + arr[i];
  }

  if(sum < x) continue;
  else if (sum > x) arr.pop();
  else if(sum === x) {
    console.log(arr.length -1)
    break;
  }
}
