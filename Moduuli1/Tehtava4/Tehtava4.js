'use strict';
const name = prompt('What is your name?');
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let num = getRandomInt(1, 4);
if(num == 1){
    document.querySelector('#resp').innerHTML = `${name} you are Gryffindor `;
} else if(num == 2){
    document.querySelector('#resp').innerHTML = `${name} you are Slytherin `;
} else if(num == 3){
    document.querySelector('#resp').innerHTML = `${name} you are Hufflepuff `;
} else if(num == 4){
    document.querySelector('#resp').innerHTML = `${name} you are Revenclaw `;
}
