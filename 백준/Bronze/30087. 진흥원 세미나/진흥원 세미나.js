const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = Number(input.shift());
const result = [];


for(let i = 0; i < input.length; i++) {
  const temp = input[i];
  if(temp === "Algorithm") {
    result.push("204");
  }
  else if (temp === "DataAnalysis") {
    result.push("207");
  }
  else if (temp === "ArtificialIntelligence") {
    result.push("302")
  }
  else if (temp === "CyberSecurity") {
    result.push("B101");
  }
  else if (temp === "Network") {
    result.push("303");
  }
  else if (temp === "Startup") {
    result.push("501");
  }
  else if (temp === "TestStrategy") {
    result.push("105");
  }  
}

console.log(result.join("\n"));