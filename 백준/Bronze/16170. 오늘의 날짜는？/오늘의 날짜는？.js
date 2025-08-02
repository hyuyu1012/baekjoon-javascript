// 연도, 월, 일 출력
let date = new Date();

let hours = date.getHours();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();


if(hours - 9 < 0) {
  day  = day - 1;
}
if(day <= 0) {
  month = month -1;
}
if(month <=0) {
  year = year -1;
}

console.log(year);
(String(month).length === 1) ? console.log('0'+ month) : console.log(month);
(String(day).length === 1) ? console.log('0' + day) : console.log(day); 