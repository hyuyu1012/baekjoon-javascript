const fs = require('fs');
const s = fs.readFileSync(0).toString().trim().split("")

if(s.join() === s.reverse().join()) {
  console.log(1);
}
else {
  console.log(0);
}