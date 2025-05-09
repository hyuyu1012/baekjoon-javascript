const fs = require('fs');
const s = fs.readFileSync('/dev/stdin').toString().trim();

if (s ===  "1 2 3 4 5 6 7 8"){
  console.log("ascending");
}
else if (s === "8 7 6 5 4 3 2 1"){
  console.log("descending");
}

else {
  console.log("mixed");
}