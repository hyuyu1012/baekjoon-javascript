const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let number = 665;
let count = 0;

while(true) {
  if (String(number).includes('666')) {
    count +=1;
  }
  if(count === n) {
    console.log(number);
    break;
  }
  number+=1;
}