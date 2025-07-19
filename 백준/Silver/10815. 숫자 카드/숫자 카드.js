const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

// 상근이가 가지고 있는 숫자 카드의 개수
const N = Number(input[0]);
// 상근이가 가지고 있는 카드
const sangenuCards = input[1].split(" ").map(Number);
const obj = Object.create(null);

// hash에 등록
for(let i = 0; i < N ; i++) {
  if(sangenuCards[i] in obj) continue;
  else {
    obj[sangenuCards[i]] = 1;
  }  
}

const result = [];

const M = Number(input[2]);
const cards = input[3].split(" ").map(Number);
for(let i = 0; i < M ; i++) {
  if(cards[i] in obj) result.push(1);
  else {
    result.push(0);
  }  
}

console.log(result.join(" "));