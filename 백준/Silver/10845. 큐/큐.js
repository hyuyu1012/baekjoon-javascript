const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n");
const queue = [];
const n = init[0];
const result = [];
for (let i = 1; i<=n; i++) {
  const temp = init[i].split(" ");
  const cmd = temp[0];
  
  if(cmd ==="push"){
    queue.push(temp[1])
  }
  else if(cmd ==="pop"){
    if(queue.length===0) {
      result.push(-1);
    }
    else {
      result.push(queue.shift());
    }
  }
  else if (cmd === "size") {
    result.push(queue.length);
  }
  else if (cmd === "empty") {
    if (queue.length === 0) {
      result.push(1);
    } 
    else {
      result.push(0);
    }
  }
  else if (cmd === "front") {
    if (queue.length === 0){
      result.push(-1)
    }
    else {
    result.push(queue[0]);
    }
  }
  else if (cmd === "back") {
    if (queue.length === 0){
      result.push(-1)
    }
    else {
    result.push(queue[queue.length -1 ]);
    }
  }

}
console.log(result.join("\n"));


