const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(init[0]);
const m = Number(init[1]);
const computers = {};
for(let i = 1; i<=n; i++) {
  computers[i] = [];
}

for(let i = 2; i<2 + m; i++) {
  const temp = init[i].split(" ").map(Number);
  computers[temp[0]].push(temp[1]);
  computers[temp[1]].push(temp[0]);
}

for (let i in computers) {
  if(computers.hasOwnProperty(i)) {
  computers[i].sort((a,b) => a-b);
  }
}

const visited = new Array(n).fill(false);
const queue =[];

queue.push(1);

while(queue.length !== 0) {
  const computer = queue.shift();

  if(visited[computer - 1] === true) {
    continue;
  }
  visited[computer - 1] = true;

  computers[computer].forEach(element => {
    if(visited[element -1] === false) {
      queue.push(element);
    }
  })
}

const answer = visited.reduce((cnt, element) => cnt + (true === element), 0) - 1;
console.log(answer);