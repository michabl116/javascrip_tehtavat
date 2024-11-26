'use strict';
const names = ['John', 'Paul', 'Jones'];
const target = document.getElementById('target');
let content = '';
for (let i = 0; i < names.length; i++) {
    content += `<li>${names[i]}</li>`;
}
target.innerHTML = content;