const fs = require('fs');
const str = fs.readFileSync(0).toString().trim().split("");

const result = new Array(26).fill(0);

str.forEach(s => {
  const index = s.charCodeAt() -97 ;
  result[index] = result[index] + 1; 
})

console.log(result.join(" "));