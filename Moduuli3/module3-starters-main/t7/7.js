'use strict';
const triger = document.getElementById('trigger');
const Target = document.getElementById('target');
triger.addEventListener('mouseover', (event) => {
    Target.src='img/picA.jpg';
triger.addEventListener('mouseout', () => {
            Target.src = 'img/picB.jpg';
        });

})
