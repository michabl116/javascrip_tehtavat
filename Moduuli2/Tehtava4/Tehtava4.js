'use strict';
let num1 = [];

while (true) {
    let num = prompt('Enter a number:');
    num = parseInt(num);
    if (num === 0)
        break;
    num1.push(num);
}
num1.sort((a, b) => b - a);
console.log('Numbers is:');
for (let i = 0; i < num1.length; i++) {
    console.log(num1[i]);
}
