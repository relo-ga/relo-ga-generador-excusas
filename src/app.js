/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["eat", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function excuses() {
  var whoAleatorio = who[Math.floor(Math.random() * 3)];
  var actionAleatorio = action[Math.floor(Math.random() * 3)];
  var whatAleatorio = what[Math.floor(Math.random() * 3)];
  var whenAleatorio = when[Math.floor(Math.random() * 3)];

  let str =
    whoAleatorio +
    " " +
    actionAleatorio +
    " " +
    whatAleatorio +
    " " +
    whenAleatorio;

  var str2 = (document.getElementById("excuse").innerHTML =
    "<h1>" + str + "</h1>");
  console.log(str);
  return str2;
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  excuses();
};
