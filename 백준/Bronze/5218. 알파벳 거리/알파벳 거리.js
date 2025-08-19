const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const answer = [];

// 알파뱃 대문자로만 이루어져 있음
for (let i =1; i <=n; i++) {
  const temp  = input[i].split(" ");
  const x = temp[0].split("");
  const y = temp[1].split("");
  const result = ["Distances:"];

  for(let j = 0; j < x.length; j++) {
    if(y[j].charCodeAt() >= x[j].charCodeAt()) {
      result.push(y[j].charCodeAt() - x[j].charCodeAt());
    }
    else {
      result.push(y[j].charCodeAt() + 26 - x[j].charCodeAt())
    }
  }
  answer.push(result.join(" "));
}
console.log(answer.join("\n"));