const fs = require('fs');
const input = fs.readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const [N, L] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

const deque = new Array(N); 
let front = 0; 
let rear = 0;  

let result = "";

for (let i = 0; i < N; i++) {
    while (front < rear && deque[front] < i - L + 1) {
        front++;
    }
    while (front < rear && arr[deque[rear - 1]] >= arr[i]) {
        rear--;
    }
    deque[rear] = i;
    rear++;

    if (i === 0) {
        result = arr[deque[front]].toString();
    } else {
        result += " " + arr[deque[front]];
    }
}

console.log(result);
