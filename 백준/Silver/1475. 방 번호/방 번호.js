const fs = require('fs');
const n = fs.readFileSync(0).toString().trim().split("").map(Number);
const result = [0,0,0,0,0,0,0,0,0];

n.forEach(number => {
  if (number === 9) {
    number = 6;
  }
  result[number] = result[number] + 1;
});

if (result[6] % 2 === 0) {
  result[6] = result[6] / 2;
}
else {
  result[6] = Math.floor(result[6] / 2) + 1;
}

console.log(Math.max(...result));