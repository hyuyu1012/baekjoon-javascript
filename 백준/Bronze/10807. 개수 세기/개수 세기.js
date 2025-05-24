const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n");

const n_array = init[1].split(" ");
const v = init[2]

let count = n_array.filter(element => element === v).length;

console.log(count);