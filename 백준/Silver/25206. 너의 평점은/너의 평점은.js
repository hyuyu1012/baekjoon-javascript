const fs = require('fs');
const input = fs.readFileSync(0).toString().split("\n");
let sum = 0;
let count = 0;

for(let i = 0; i< input.length -1; i++) {
  const temp = input[i].split(" ");
  let n = 0;

  switch(temp[2]) {
    case 'A+':         
      n = 4.5 * Number(temp[1]);
      count+=Number(temp[1]);
      break;
    case 'A0':
      n = 4.0 * Number(temp[1]);
      count+=Number(temp[1]);
      break;
    case 'B+':
      n = 3.5 * Number(temp[1]);
      count+=Number(temp[1]);
      break;    
    case 'B0':
      n = 3.0 * Number(temp[1]);
      count+=Number(temp[1]);
      break;    
    case 'C+':
      n = 2.5 * Number(temp[1]);
      count+=Number(temp[1]);
      break;   
    case 'C0':
      n = 2.0 * Number(temp[1]);
      count+=Number(temp[1]);
      break;
    case 'D+':
      n = 1.5 * Number(temp[1]);
      count+=Number(temp[1]);
      break;    
    case 'D0':
      n = 1.0 * Number(temp[1]);
      count+=Number(temp[1]);
      break;
    case 'F':
      n = 0 * Number(temp[1]);
      count+=Number(temp[1]);
      break;    
    case 'P':
      break;
  }
  sum = sum + n
}

console.log(sum / count);