const fs = require('fs');
const [N, ...array] = fs.readFileSync(0)
  .toString()
  .trim()
  .split("\n");

let topKor = null, topEng = null, topMath = null, topSci = null;

for(let i = 0; i < array.length; i++) {
  array[i] = array[i].split(" ").map(Number);
}


const customSort = (index) => {
  array.sort((a,b) => {
    if(b[index] === a[index]) {
      return a[0] - b[0];
    }
    return b[index] - a[index];
  });
}

customSort(1);
topKor = array[0][0];

customSort(2);
for(let i = 0; i < array.length; i++) {
  const temp = array[i][0];
  if(temp !== topKor) {
    topEng = temp;
    break;
  }
}

customSort(3);
for(let i = 0; i < array.length; i++) {
  const temp = array[i][0];
  if(temp !== topKor && temp !== topEng) {
    topMath = temp;
    break;
  }
}

customSort(4);
for(let i = 0; i < array.length; i++) {
  const temp = array[i][0];
  if(temp !== topKor && temp !== topEng && temp !== topMath) {
    topSci = temp;
    break;
  }
} 

console.log(topKor, topEng, topMath, topSci);
