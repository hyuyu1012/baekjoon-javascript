const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("");
let count = 0;

for(let i = 0; i <= input.length -1;  i++) {

  if(input[i] === 'c') {
    if(input[i+1] === '=') {
      i+=1;
    }
    else if(input[i+1] === '-') {
      i+=1;
    }
    count = count + 1;
  }

  else if(input[i] === 'd') {
    if(input[i+1] === '-') {
      i +=1;
    }
    else if (input[i+1] === 'z' && input[i+2] === '=') {
      i +=2;
    }
    count +=1;
  }

  else if(input[i] === 'l') {
    if(input[i+1] === 'j') {
      i +=1;
    }
    count += 1;
  }
  else if(input[i] === 'n') {
    if(input[i+1] === 'j') {
      i +=1;
    }
    count += 1;

  }
  else if(input[i] === 's') {
    if(input[i+1] === '=') {
      i+=1;
    }
    count +=1;
  }

  else if(input[i] === 'z') {
    if(input[i+1] === '=') {
      i+=1;
    }
    count +=1;
  }
  else {
    count +=1;
  }
} 

console.log(count);