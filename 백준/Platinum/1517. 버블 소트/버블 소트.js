// 버블 소트의 swap 횟수 count
const fs = require('fs');
const input = fs.readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
let answer = 0;

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  // 절반으로 자르기
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid)); 
  const right = mergeSort(arr.slice(mid)); 
  
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  // 작은 값부터 넣기
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
      answer = answer+left.length-i;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

mergeSort(numbers);
console.log(answer);