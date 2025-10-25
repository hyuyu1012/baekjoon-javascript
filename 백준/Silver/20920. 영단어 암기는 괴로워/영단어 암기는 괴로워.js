const fs = require('fs');
const input = fs.readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const [N,M] = input[0].split(" ").map(Number);
const dict = {};
for(let i = 1; i < input.length; i++) {
  const str = input[i];
  if(str.length >=M) {
    if(str in dict) {
      dict[str] +=1;
    }
    else {
      dict[str] = 1;
    }
  }
}

const array = Object.entries(dict).sort((a,b) => {
  if(a[1] > b[1]) return -1;
  else if(a[1] < b[1]) return 1;
  else {
    if(a[0].length > b[0].length)  return -1;
    else if(a[0].length < b[0].length) return 1;
    else {
      if(a[0] > b[0]) return 1;
      else if(a[0] < b[0]) return -1;
    }
  }
});

const ans = [];
for(let i = 0; i < array.length; i++) {
  ans.push(array[i][0]);
}
console.log(ans.join("\n"));
