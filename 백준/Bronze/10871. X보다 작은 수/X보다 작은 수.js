const fs = require('fs');
const init = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

nx = init[0].split(" ").map(Number);
const n = nx[0];
const x = nx[1];

numbers = init[1].split(" ").map(Number);

const filtered = numbers.filter(num => num < x);
const result = filtered.join(" ");
process.stdout.write(result);