const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n");
const t = Number(init[0]);

for (let i = 1; i<=t; i++){
  const s = init[i];
  const result = '' + s.charAt(0) + s.charAt(s.length-1);
  console.log(result);
  // console.log(s);
  // console.log(s.charAt(0));
  // charAt은 -1 인자를 허용하지 않는다.
  // console.log(s.charAt(-1));
}

