let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed on", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying",
];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandom(anyArray) {
  let max = anyArray.length - 1;
  let min = 0;
  let random = getRandomNumber(min, max);
  return anyArray[random];
}

window.onload = function() {
  console.log("Hello World");
  //write your code here
  document.body.innerHTML =
    getRandom(who) +
    " " +
    getRandom(action) +
    " " +
    getRandom(what) +
    " " +
    getRandom(when);
};
