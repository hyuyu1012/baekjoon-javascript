const fs = require('fs');
const [N, ...array] = fs.readFileSync(0)
  .toString()
  .trim()
  .split("\n");

for(let i = 0; i < N; i++) {
  const tempArray = array[i].split("");

  if(tempArray.join(" ") === tempArray.reverse().join(" ")) {
    console.log(tempArray.join(""));
    continue;
  }

  tempArray.reverse();

  for(let j = 0; j < tempArray.length; j++) {
    const addArray = [];
    
    for(let k = 0; k <= j; k++) {
      addArray.push(tempArray[k]);
    }
    const s1 = tempArray.join("") + addArray.reverse().join("")
    if(s1 === s1.split("").reverse().join("")) {
      console.log(s1);
      break;
    }
  }
}