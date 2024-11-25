'use strict';
function concat(string ) {
    let result = '';
    for (let i = 0; i< string.length; i++) {
        result += string[i];
    }
    return result;
}
let names = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
let concatenat = concat(names);
document.querySelector('#teht8').textContent = concatenat;

