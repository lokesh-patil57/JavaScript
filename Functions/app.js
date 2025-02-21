function die() {
  dieNum = Math.floor(Math.random() * 6) + 1;
  console.log("die rolled:", dieNum);
}
function avg(a, b, c) {
  Average = (a + b + c) / 3;
  console.log("Your average is :", Average);
}

function table(num) {
  for (let i = num; i <= num * 10; i += num) {
    console.log(i);
  }
}

function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2));
console.log(sum(sum(1, 2), 3));

function noSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

// concatenation of string
let str = ["hi", "hello", "bye", "see you"];

function concat(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i];
  }
  return result;
}
