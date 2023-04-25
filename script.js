(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner');
    const sections = document.querySelectorAll('section');
    const phone = document.querySelector('#phone');
    const phonehover = document.querySelector('#phonehover');
    const phonedark = document.querySelector('#phonedark');
    const paper = document.querySelector('#name');
    let mode = 'light';

    phone.addEventListener('mouseover', function() {
        if (mode === 'light') {
            phone.className = 'hidden';
            phonehover.removeAttribute('class');
        }
    });
    phone.addEventListener('mouseout', function() {
        if (mode === 'light') {
            phone.removeAttribute('class');
            phonehover.className = 'hidden';
        }
    });
    button.addEventListener('click', function() {
        if (mode === 'light') {
            body.className = 'switch';
            banner.className = 'switch';
            phone.className = 'hidden';
            phonedark.removeAttribute('class');
            phonedark.style.transition = 'opacity 4s linear';
            button.className = 'switch';
            paper.className = 'switch';
            for (const section of sections) {
                section.className = 'switch';
            }
            mode = 'dark';
        } else {
            body.removeAttribute('class');
            banner.removeAttribute('class');
            button.removeAttribute('class');
            paper.removeAttribute('class');
            phone.removeAttribute('class');
            phonedark.className = 'hidden';
            phonedark.style.transition = 'opacity 0.3s linear';
            for (const section of sections) {
                section.removeAttribute('class');
            }
            mode = 'light'
        }
    });
})();