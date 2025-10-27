const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
const answer = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    for (let i = 0; i <  str.length; i++) {
        const c = str[i];
        if(c === c.toUpperCase()) answer.push(c.toLowerCase());
        else if (c === c.toLowerCase()) answer.push(c.toUpperCase());
    }
    console.log(answer.join(""));
});