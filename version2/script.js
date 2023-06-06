(function(){
    'use strict';

    window.dispatchEvent(new Event('resize'));

    const gallery = document.querySelector('#gallery');
    const images = document.querySelectorAll('.gimg');
    const images2 = document.querySelectorAll('.oimg');
    const rows = document.querySelectorAll('.image-row');
    const names = [];
    const box = document.querySelector('#lightbox');
    const previous = document.querySelector('#previous');
    const current = document.querySelector('#current');
    const next = document.querySelector('#next');
    const close = document.querySelector('#x');
    const share = document.querySelector('#share');
    const intro = document.querySelector('#intro');
    let clicked = 0;
    /*setInterval(function() {
        rows[count].className = 'image-row show';
        count++;
    }, 500);*/
    
    rows[0].className = 'image-row show';
    setTimeout(function() {
        rows[1].className = 'image-row show';
    }, 500);
    setTimeout(function() {
        rows[2].className = 'image-row show';
    }, 1500);

    share.addEventListener('click', function(){
        if(clicked == 0) {
            intro.className = 'hidden';
            setTimeout(function() {
                intro.style.display = 'none';
            }, 1000);
            
        }
        clicked = 1;
    })

    for(let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function(){
            /*if (i >= 1) {
                previous.innerHTML = `<img src="images/bike${i}.jpg">`;
            }else{
                previous.innerHTML = '';
            }
            current.innerHTML = `<img src="images/bike${i+1}.jpg">
                                 <h1>Bike Camping Trip!</h1>`;
            if (i < images.length - 1) {
                next.innerHTML = `<img src="images/bike${i + 2}.jpg">`;
            }else{
                next.innerHTML = '';
            }*/
            //$(document).scrollTop(150 * i);
            //gallery.style.position = 'fixed';
            gallery.style.position = 'fixed';
            box.style.display = 'flex';
            box.className = 'show';
            images2[i].scrollIntoView();
        });
    }

    close.addEventListener('click', function(){
        window.scrollTo(0,0);
        images2[0].style.opacity = '0';
        gallery.style.position = '';
        box.className = 'hidden';
        setTimeout(function() {
            box.style.display = 'none';
            images2[0].style.opacity = '1';
        }, 500);
    });
    /*for (const img of images) {
        img.addEventListener('mousedown', function(){
            count += 1;
            if (count >= 2) {
                previous.innerHTML = `<img src="images/bike${count - 1}.jpg">`;
            }else{
                previous.innerHTML = '';
            }
            current.innerHTML = `<img src="images/bike${count}.jpg">
                                 <h1>Bike Camping Trip!</h1>`;
            if (count < images.length) {
                next.innerHTML = `<img src="images/bike${count + 1}.jpg">`;
            }else{
                next.innerHTML = '';
            }
            box.style.display = 'flex';
        });
    }*/

})();