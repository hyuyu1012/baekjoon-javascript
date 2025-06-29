const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const nameToNumber = Object.create(null); // 이름 → 번호
const numberToName = []; // 번호 → 이름

for (let i = 0; i < N; i++) {
  const name = input[i];
  nameToNumber[name] = i + 1;
  numberToName[i + 1] = name;
}

for (let i = N; i < input.length; i++) {
  const q = input[i];
  if (!isNaN(q)) {
    console.log(numberToName[Number(q)]);
  } else {
    console.log(nameToNumber[q]);
  }
}