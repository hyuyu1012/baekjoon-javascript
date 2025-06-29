const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n");
let [N,K] = init.shift().split(" ");

const coins = init.map(Number).reverse();
let count = 0;

coins.forEach((coin) => {
  if(K >=coin) {
    while(K >=coin) {
      K = K - coin;
      count = count + 1;
    }
  }
})

console.log(count);

