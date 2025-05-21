"use strict";
function timou(sum) {
    setTimeout(sum, 5000);
}
function sum(num1, num2) {
    console.log(num1 + num2);
}
console.log("started");
timou(() => sum(4, 6));
