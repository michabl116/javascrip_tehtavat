
'use strict';
function rolls() {
    return Math.floor(Math.random() * 6) + 1;
}

let number = prompt('Enter the number :');
number = parseInt(number);
let sum = 0;
for (let i = 0; i < number; i++) {
    sum += rolls();
}
document.querySelector('#result').innerHTML = `The sum of the dice rolls is ${sum}.`;

