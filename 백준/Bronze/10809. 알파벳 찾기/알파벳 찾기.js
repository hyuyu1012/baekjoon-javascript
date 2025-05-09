const fs = require('fs');
const s = fs.readFileSync("/dev/stdin").toString().trim().split('');

for (let i = 97; i<=122; i++){
  process.stdout.write(s.indexOf(String.fromCharCode(i)).toString());
  process.stdout.write(" ");
}