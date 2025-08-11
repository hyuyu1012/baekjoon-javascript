const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"example.txt")
  .toString().trim();


const matchTable = [
  (a,b,c) => a + b === c && `${a}+${b}=${c}`,
  (a,b,c) => a - b === c && `${a}-${b}=${c}`,
  (a,b,c) => a * b === c && `${a}*${b}=${c}`,
  (a,b,c) => a / b === c && `${a}/${b}=${c}`,
  (a,b,c) => a === b + c && `${a}=${b}+${c}`,
  (a,b,c) => a === b - c && `${a}=${b}-${c}`,
  (a,b,c) => a === b * c && `${a}=${b}*${c}`,
  (a,b,c) => a === b / c && `${a}=${b}/${c}`,  
]
const [a,b,c] = input.split(" ").map(Number);

for(let i = 0; i < matchTable.length; i++) {
  if(matchTable[i](a,b,c)) {
    console.log(matchTable[i](a,b,c)); 
    break;
  }
}