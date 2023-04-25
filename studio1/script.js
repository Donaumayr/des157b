(function(){
    'use strict';
    const m = document.querySelector('main');
    const s = document.querySelector('span');
    const sec = document.querySelector('section');
    const v = document.querySelector('.myVideo');
    const loading = document.querySelector('.fa-bicycle');
    v.addEventListener('playing', function(){
        loading.style.display = 'none';
    });
    s.addEventListener('mouseover', function(){
        m.className = 'blacken';
        v.className = 'myVideo darken';
        sec.style.width = '100vw';
        s.className = 'change';
        console.log('darkened');
    });
    s.addEventListener('mouseout', function(){
        console.log('undarkened');
    });
})();