const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const answer = [];
    for(let i = 0; i < str.length; i++) {
        answer.push(str[i]);
    }
    console.log(answer.join("\n"));
});