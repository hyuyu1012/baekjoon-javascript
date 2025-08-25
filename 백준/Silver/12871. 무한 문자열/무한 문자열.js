const fs = require('fs');
const [str1, str2] = fs.readFileSync(0).toString().split("\n");
let lcm;
const str1Array = [];
const str2Array = [];

const getGcd = (a,b) => {
  const r = a % b;
  if(r === 0) {
    return b;
  }
  return getGcd(b,r);
}
const a = str1.length;
const b = str2.length;

(a > b) ? lcm = a * b / getGcd(a,b): lcm = a * b / getGcd(b,a);

for(let i = 0 ; i < lcm / a; i++) {
  str1Array.push(str1);
}
for(let i = 0; i < lcm / b; i++) {
  str2Array.push(str2);
}

if (str1Array.join("") === str2Array.join("")) {
  console.log(1);
}
else if (str1Array.join("") !== str2Array.join("")) {
  console.log(0); 
}