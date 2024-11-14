
'use strict';

function leap_year (year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
let year1 = prompt('Enter the start year:');
let year2 = prompt('Enter the end year:');

year1 = parseInt(year1);
year2 = parseInt(year2);

let ul = document.createElement('ul');

for (let year = year1; year <= year2; year++) {
    if (leap_year(year)) {
        let li = document.createElement('li');
        li.textContent = year;
        ul.appendChild(li);
           }
}
document.querySelector('#year2').appendChild(ul);

