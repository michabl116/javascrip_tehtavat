'use strict';
let year = prompt('write a year');
year = parseInt(year);

if ((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)) {
    document.querySelector('#year').innerHTML = `${year} es bisiesto`;
} else {
    document.querySelector('#year').innerHTML = `${year} no es bisiesto`;
}
