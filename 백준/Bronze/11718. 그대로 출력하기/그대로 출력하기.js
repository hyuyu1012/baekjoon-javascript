const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n");
console.log(init.join("\n"));