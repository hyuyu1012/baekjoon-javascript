const fs = require('fs');
const input = fs.readFileSync(0)
  .toString()
  .trim()
  .split("\n")

// K : K초 이상의 시간 동안 소변기 앞에 있으면 사용중
// L : 사용중이라고 기록된 시간부터 L초 동안 없다면 완료라고 기록
// N : 센서 기록
const [K,L,N] = input[0].split(" ").map(Number);
const array = input[1].split("").map(Number);
const answer = [];

let senser = false;
let usingCount = 0;
let finishCount = 0;

for (let i = 0; i < array.length; i++) {
  const cur = array[i];
  if (senser === false) {
    if(cur === 1) {
      usingCount++;
      if(usingCount >= K) {
        senser = true;
        usingCount = 0;
      }
    }
    else if (cur === 0) usingCount = 0;
  }

  else if (senser === true) {
    if(cur === 0) {
      finishCount++;
      if(finishCount >= L) {
        senser = false;
        answer.push(i+1);
        finishCount = 0;
      }
    }
    else if (cur === 1) {
      finishCount = 0; 
    }
  }
}

if(senser === true) {
  answer.push(array.length + L - usingCount - finishCount);
}

if(answer.length === 0 ) {
  console.log("NIKAD");
}
else {
  console.log(answer.join("\n")); 
}
