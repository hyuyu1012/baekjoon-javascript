const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());

// 분모와 분자의 합이 2인 분수는 1개, 3인 분수는 2개 
// n이 4라면
let i = 1;
while(true) {
  if(n <= i) {
    break;
  }
  n = n - i;
  i++;
}

// 합이 n+1인 것 중에서 몇 번째?

if(i % 2 === 0) {
  const temp = i + 1;
  let up = n;
  let down = temp - up;
  console.log(up + '/' + down);

}
else {
  const temp = i + 1;
  let down = n;
  let up = temp - down;
  console.log(up + '/' + down);
}