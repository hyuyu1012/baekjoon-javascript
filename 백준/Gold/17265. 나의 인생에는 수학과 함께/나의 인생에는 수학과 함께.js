const fs = require('fs');
const map = fs.readFileSync(0).toString().trim().split("\n");

const N = Number(map.shift());

for(let i = 0; i < N; i++) {
  map[i] = map[i].split(" ");
}
const dx = [1, 0];
const dy = [0, 1];

const calcByOperation = (preVal, curVal, op) => {
  let result = 0;
  if (op === '+') {
    result = BigInt(preVal) + BigInt(curVal);
  } else if (op === '-') {
    result = BigInt(preVal) - BigInt(curVal);
  } else if (op === '*') {
    result = BigInt(preVal) * BigInt(curVal);
  }
  return result;
};

const setMinMaxValueInMap = (x, y, curResult, operation) => {
  // 마지막 종료조건
  if (x === N - 1 && y === N - 1) {
    maxOfCalculation = (maxOfCalculation > curResult ? maxOfCalculation :curResult)
    minOfCalculation = (minOfCalculation < curResult ? minOfCalculation :curResult)
    return;
  }
  for (let i = 0; i < 2; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
    let isNumber = !isNaN(map[nx][ny]);
    if (isNumber) {
      let calculationResult = calcByOperation(curResult, parseInt(map[nx][ny]), operation);
      setMinMaxValueInMap(nx, ny, calculationResult, operation);
    } else {
      setMinMaxValueInMap(nx, ny, curResult, map[nx][ny]);
    }    
  }
};

let [maxOfCalculation, minOfCalculation] = [-Number.MAX_VALUE, Number.MAX_VALUE];
setMinMaxValueInMap(0, 0, parseInt(map[0][0]), '');
console.log(Number(maxOfCalculation), Number(minOfCalculation));