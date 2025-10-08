const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

// mt에 참가한 사람의 수
const n = Number(input[0]);
// 일 수
const e = Number(input[1]);

const ans = [];

const people = new Array(n+1).fill(0).map(() => new Set());

for (let i = 2; i <= e+1; i++) {
  // 일차별 참가자 배열
  const temp = input[i].split(" ").map(Number); 
  temp.shift();
  // 선영이가 참가했다면, 참가자들의 set에 노래 추가
  if(temp.includes(1)) {
    temp.forEach(person => {
      people[person].add(i);
    })
  }
  // 선영이가 참가하지 않았다면 totalSet을 만들어서 노래 공유
  else {
    const totalSet = new Set();
    temp.forEach(person => {
      people[person].forEach(song => totalSet.add(song));
    })
    temp.forEach(person => {
      people[person] = new Set([...totalSet]);
    })
  }
}

people.forEach((person, index) => {
  if(person.size === people[1].size) ans.push(index);
})

console.log(ans.join("\n"));