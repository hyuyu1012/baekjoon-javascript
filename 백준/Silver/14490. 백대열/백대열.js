const fs = require('fs');
const [n,m] = fs.readFileSync(0).toString().trim().split(":").map(Number);

const getGcd = (a,b) => {
  const r = a % b
  if(r === 0) {
    return b;
  }
  else {
    return getGcd(b,r);
  }
}

const gcd = getGcd(Math.max(n,m), Math.min(n,m));
console.log(n/gcd+":"+m/gcd);
