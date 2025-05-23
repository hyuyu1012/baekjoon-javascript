const fs = require('fs')
const init = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const init2 = init[0].split(" ").map(Number);


const A = init2[0];
const B = init2[1];
const C = Number(init[1]);


let hour = A;
let minute = B + C
// if문 처리가 안 될 수도 있으니 숫자형을 넣어줘야 함.
let temp = 0;


// 분 단위 처리
if (minute >= 60) {
  temp = minute / 60;
  minute = minute % 60;
}

hour = hour + temp;

// 시간 단위 처리
if (hour >= 24){
  while(hour >= 24){
    hour = hour - 24;
  }
}

console.log(Math.floor(hour), minute)





