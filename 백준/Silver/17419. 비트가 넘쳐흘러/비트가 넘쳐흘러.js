const fs = require('fs');
const [N, K] = fs.readFileSync(0)
  .toString()
  .trim()
  .split("\n")

const count = K.split("1").length -1;
console.log(count);