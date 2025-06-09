const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const a = init[0];
const b = init[1];
const a_list = [];
const b_list = [];
const c_list = [];
// 최대 공약수 구하기
for (let i = 1; i<=a; i++){
  if(a%i===0) {
    a_list.push(i); 
   }
}
for (let i = 1; i<=b; i++) {
  if(b%i===0) {
    b_list.push(i);
  }
}
b_list.forEach(n => {
  if (a_list.includes(n)) {
    c_list.push(n)
  }
});

const max = Math.max(...c_list);
const min = max * a/max * b/max;

console.log(max);
console.log(min);
