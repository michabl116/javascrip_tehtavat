'use strict';

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
let number = parseInt(prompt('Enter an number: :'));

let result;
if (isPrime(number)) {
    result = number + ' is a prime number.';
} else {
    result = number + ' not is a prime number.';
}

document.querySelector('#tehtava9').textContent = result;

