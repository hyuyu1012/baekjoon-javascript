const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n").map(Number);
const n = init.shift();

init.sort((a,b) => {
  return a - b
});

console.log(init.join("\n"));