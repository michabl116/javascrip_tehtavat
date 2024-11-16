'use strict';

let num = prompt(' number of participants:');
num = parseInt(num);
let pNames = [];

for (let i = 0; i < num; i++) {
    let name1 = prompt(` Name of participant ${i + 1}:`);
    pNames.push(name1);
    }
pNames.sort();

let ol = document.createElement('ol');
for (let i = 0; i <pNames.length; i++) {
    let li = document.createElement('li');
    li.textContent = pNames[i];
    ol.appendChild(li);
}
document.querySelector('#participants').appendChild(ol);
