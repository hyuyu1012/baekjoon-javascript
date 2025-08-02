const fs = require('fs');
const year = Number(fs.readFileSync(0).toString().trim());

console.log(year - 2024);