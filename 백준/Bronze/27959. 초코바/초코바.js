const fs = require('fs');
const [N, M] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

if(N * 100 >= M) {
  console.log("Yes");
}
else {
  console.log("No");
}