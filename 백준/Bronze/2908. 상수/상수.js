const fs = require('fs');
const [a,b] = fs.readFileSync(0).toString().trim().split(" ");

const na = Number(a.split("").reverse().join(""));
const nb = Number(b.split("").reverse().join(""));

if (na >=nb) {
  console.log(na);
}
else {
  console.log(nb);
}