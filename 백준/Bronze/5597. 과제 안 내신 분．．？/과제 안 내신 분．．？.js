const fs = require('fs');
const init = fs.readFileSync(0).toString().split("\n").map(Number);

for (let i = 1; i <=30; i++){
  if (init.includes(i) === false){
    console.log(i);
  }
}