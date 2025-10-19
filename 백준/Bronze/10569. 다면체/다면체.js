const fs = require('fs');
const [T, ...input] = fs.readFileSync(0).toString().trim().split("\n");
const answer = [];

for(let i = 0; i < T; i++) {
  const [V,E] = input[i].split(" ").map(Number);
  answer.push(2 - V + E);
}
console.log(answer.join("\n"));