const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");
let line = 0;
const answer = [];

// 배열의 크기
const [N,M] = input[line++].split(" ").map(Number);
const array = [];
for(let i = 1; i <=N; i++) {
  array.push(input[line].split(" ").map(Number));
  line++;
}

const K = input[line++];
for(let a = 1; a <=K; a++) {
  let[i,j,x,y] = input[line++].split(" ").map(Number);
  i--;
  j--;
  x--;
  y--;

  let startYIndex, endYIndex, startXIndex, endXIndex;
  if(i >=x) {
    startYIndex = x;
    endYIndex = i;    
  }
  else{
    startYIndex = i;
    endYIndex = x;
  }

  if(j >= y) {
    startXIndex = y;
    endXIndex = j;
  }
  else {
    startXIndex = j;
    endXIndex = y;
  }
  let count = 0;
  for(let yIndex = startYIndex; yIndex <=endYIndex; yIndex++) {
    for(let xIndex = startXIndex; xIndex <=endXIndex; xIndex++) {
      count = count + array[yIndex][xIndex];
    }
  }
  answer.push(count);
}

console.log(answer.join("\n"));