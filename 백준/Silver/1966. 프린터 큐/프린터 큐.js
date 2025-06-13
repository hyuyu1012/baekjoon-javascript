const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n");

const t = Number(init[0]);


// 최대값이 되었을 때 앞에 같은 것들의 개수를 출력
// 최종 결과는 큰 수 + 앞에 같은 것들의 개수
// N 문서의 개수
// M 몇 번째에 놓여 있는가

for (let i = 1; i<= 2*t; i = i + 2) {
  const [N,M] = init[i].split(" ").map(Number);
  const numbers = init[i+1].split(" ").map(Number)
  let count = 0;  
  let order = 0;

  // setting
  const number = numbers[M];
  const number2 = numbers[M] - 0.1;
  numbers[M] = number2;

  while(true) {
    const max = Math.max(...numbers);
    if(max == number | max === number2) {
      break;
    }
    while(true) {
      if (numbers[0] === max) {
        numbers.shift();
        count = count + 1;
        break;
      }
      else {
        numbers.push(numbers.shift());
      }
    }
  }
  const temp = numbers.indexOf(number2);
  
  for (let j = 0; j<=temp; j++) {
    if (numbers[j]  === number) {
      order = order + 1;
    }
  }

  console.log(count + order + 1);
}