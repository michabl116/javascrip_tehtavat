'use strict';

function num_roll(sides) {
    return Math.floor(Math.random() * sides) + 1;
}
let sides = parseInt(prompt('Enter the number of sides of the die:'));
let ul = document.createElement('ul');
let roll;
do {
    roll = num_roll(sides);
    let li = document.createElement('li');
    li.textContent = `Rolled: ${roll}`;
    ul.appendChild(li);
} while (roll !== sides);

document.querySelector('#tehtava7').appendChild(ul);
