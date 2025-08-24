const fs = require('fs');
const [str1, str2] = fs.readFileSync(0).toString().trim().split("\n");

const dp = new Array(str2.length).fill(0).map(() => new Array(str1.length).fill(0));


if(str1[0] === str2[0]) {
  dp[0][0] = 1;
}
else {
  dp[0][0] = 0;
}

for(let i = 1; i < str1.length; i++) {
  if(str1[i] === str2[0]) {
    dp[0][i] = 1;
  }
  else {
    dp[0][i] = dp[0][i-1];
  }
}

for(let j = 1; j < str2.length ; j++){
  if(str2[j] === str1[0]) {
    dp[j][0] = 1;
  }
  else {
    dp[j][0] = dp[j-1][0]
  }
}


for(let i = 1; i < str2.length; i++) {
  for(let j = 1; j < str1.length; j++) {
    if(str1[j] === str2[i]) {
      dp[i][j] = dp[i-1][j-1] + 1
    }
    else {
      dp[i][j] = Math.max(dp[i-1][j], dp [i][j-1]);
    }
  }
}
  console.log(dp[str2.length-1][str1.length-1]);
