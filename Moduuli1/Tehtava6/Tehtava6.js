'use strict';

function solve(number) {
    return Math.sqrt(number);
}

let test = confirm('Should I calculate the square root?');

if (test) {
    let num = prompt('Enter a number');
    let result = solve(num);
    document.querySelector('#square').innerHTML = `The square root of ${num} is ${result}`;
} else {
    document.querySelector('#square').innerHTML = 'The square root is not calculated.';
}
