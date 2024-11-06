'use strict';
let num1;
let num2;
let num3;
num1 = prompt('Enter a number');
num2 = prompt('Enter a number');
num3 = prompt('Enter a number');
let sum = parseInt(num1) + parseInt(num2) + parseInt(num3);
let average = sum/3;
document.querySelector('#suma').innerHTML = `${num1} + ${num2} + ${num3} <br> suma is :${sum} <br> Average is : ${average} `;


