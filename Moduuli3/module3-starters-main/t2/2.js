'use strict';
const target = document.getElementById('target');
target.classList.add('My-list');
const  items =['First item','Second item','Third item'];
items.forEach(function (itemtext){
    const  list = document.createElement('li');
    list.textContent = itemtext;
    target.appendChild(list);
})