// /dev/stdin
const fs = require('fs');

// fs 모듈의 readFileSync는 Buffer 객체를 받아오므로 .toString을 이용해 문자열로 받아줘야 한다.
// trim() 메소드는 문자열의 양끝 공백을 제거해주는 역할을 한다.
// split() 문자열을 특정 구분자로 잘라서 배열을 만들어주는 메소드
// map() 기존 배열을 가공해서 새 배열을 만들어내는 함수

const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
if(input[0] > input[1]) {
  console.log(">");
}

else if(input[0] < input[1]) {
  console.log("<");
}

else if(input[0] === input[1]){
  console.log("==");
}