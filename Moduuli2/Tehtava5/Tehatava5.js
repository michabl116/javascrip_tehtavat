'use strict';
let num1 = [];

while (true) {
    let num = prompt('Enter a number:');
    num = parseInt(num);
    if (num1.includes(num)) {
        alert('The number has already been given.');
        break;
            }
    num1.push(num);
        }
num1.sort((a, b) => a - b);
console.log('Given numbers');
for (let i = 0; i < num1.length; i++) {
    console.log(num1[i]);
}

