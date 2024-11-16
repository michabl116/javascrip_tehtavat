'use strict';
let dog =[]
for (let i = 0; i < 6; i++) {
    let name =prompt(`Enter the name of dog ${i+1}:` );
    dog.push(name);
}
dog.sort().reverse();

let ul = document.createElement('ul');
for (let i = 0; i < dog.length; i++) {
    let li = document.createElement('li');
    li.textContent = dog[i];
    ul.appendChild(li);
}
document.querySelector('#tehtava3').appendChild(ul);