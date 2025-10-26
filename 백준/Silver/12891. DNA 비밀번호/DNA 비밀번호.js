const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [S, P] = input[0].split(' ').map(Number);
const str = input[1];
const count = input[2].split(' ').map(Number);

const countObj = { A: count[0], C: count[1], G: count[2], T: count[3] };
const myCountObj = { A: 0, C: 0, G: 0, T: 0 };

let answer = 0;

// 처음 윈도우 초기화
for (let i = 0; i < P; i++) {
  myCountObj[str[i]]++;
}

// 비교 함수
const compareFunc = (a, b) => {
  for (const key in a) {
    if (a[key] < b[key]) return false;
  }
  return true;
};

// 첫 윈도우 검사
if (compareFunc(myCountObj, countObj)) answer++;

// 슬라이딩 윈도우 이동
for (let i = P; i < S; i++) {
  const newChar = str[i];        // 새로 들어온 문자
  const oldChar = str[i - P];    // 빠져나간 문자
  myCountObj[newChar]++;
  myCountObj[oldChar]--;
  if (compareFunc(myCountObj, countObj)) answer++;
}

console.log(answer);