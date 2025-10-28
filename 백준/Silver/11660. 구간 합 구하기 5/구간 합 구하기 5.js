const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");
const [N,M] = input[0].split(" ").map(Number);

const array = [];

// 배열 입력받기
for(let i = 1; i <= N; i++) {
  const temp = input[i].split(" ").map(Number);
  array.push(temp);
}

// dp 초기화
const dp = new Array(N).fill(0).map(() => new Array(N).fill(0));

dp[0][0] = array[0][0];

for(let i = 1; i < N; i++) {
  dp[0][i] = dp[0][i-1] + array[0][i];
  dp[i][0] = dp[i-1][0] + array[i][0];
}

for(let i = 1; i < N; i++) {
  for(let j = 1; j < N; j++) {
    dp[i][j] = dp[i-1][j] + dp[i][j-1] - dp[i-1][j-1] + array[i][j];
  }
}
const answer = [];
for(let i = N+1; i <= N+M; i++) {
  let [x1, y1, x2, y2] = input[i].split(" ").map(Number);
  x1--;
  y1--;
  x2--;
  y2--;
  const sum = dp[x2][y2]
            - (y1 > 0 ? dp[x2][y1-1] : 0)
            - (x1 > 0 ? dp[x1-1][y2] : 0)
            + (x1 > 0 && y1 > 0 ? dp[x1-1][y1-1] : 0);
  answer.push(sum);

}
console.log(answer.join("\n"));