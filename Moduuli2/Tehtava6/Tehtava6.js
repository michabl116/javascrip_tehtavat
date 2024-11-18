'use strict';

function Roll1() {
    return Math.floor(Math.random() * 6) + 1;
}
let ul = document.createElement('ul');
let roll;
do {
    roll = Roll1();
    let li = document.createElement('li');
    li.textContent = `Rolled: ${roll}`;
    ul.appendChild(li);
} while (roll !== 6);
document.querySelector('#teh6').appendChild(ul);

