const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

// N : 교실의 개수, K : 학생의 수
// 학생들의 목적지는 모두 달라야 한다.
const [N, K] = input[0].split(" ").map(Number);
const roomArray = input[1].split(" ").map(Number);

const sumArray = [];

sumArray[0] = BigInt(roomArray[0]);

for(let i = 1; i < roomArray.length; i++) {
  sumArray[i] = BigInt(sumArray[i-1]) + BigInt(roomArray[i]);
}

sumArray.sort((a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
});

let answer = BigInt(0);
for(let i = 0; i < K; i++) {
  answer = answer + sumArray[i];
}

console.log(String(answer).replace("n", ""));
