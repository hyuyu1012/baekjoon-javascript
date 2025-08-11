const fs = require('fs');
const [aStr, bStr] = fs.readFileSync(0).toString().trim().split("\n");
const a = BigInt('0b' + aStr);
const b = BigInt('0b' + bStr);

const len = aStr.length;

function pad(str, length) {
  return str.padStart(length, '0');
}

const andStr = pad((a & b).toString(2), len);
const orStr = pad((a | b).toString(2), len);
const xorStr = pad((a ^ b).toString(2), len);
const notAStr = pad((~a & ((1n << BigInt(len)) - 1n)).toString(2), len);
const notBStr = pad((~b & ((1n << BigInt(len)) - 1n)).toString(2), len);

console.log(andStr);
console.log(orStr);
console.log(xorStr);
console.log(notAStr);
console.log(notBStr);