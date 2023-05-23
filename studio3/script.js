(function(){
    'use strict';

    window.dispatchEvent(new Event('resize'));

    const images = document.querySelectorAll('.gimg');
    const rows = document.querySelectorAll('.image-row');
    const names = [];
    const box = document.querySelector('#lightbox');
    const previous = document.querySelector('#previous');
    const current = document.querySelector('#current');
    const next = document.querySelector('#next');
    let count = 0;
    /*setInterval(function() {
        rows[count].className = 'image-row show';
        count++;
    }, 500);*/
    
    setTimeout(function() {
        rows[0].className = 'image-row show';
    }, 2000);
    setTimeout(function() {
        rows[1].className = 'image-row show';
    }, 3000);
    setTimeout(function() {
        rows[2].className = 'image-row show';
    }, 4000);


    /*for (const row of rows) {
        setTimeout(function() {
            row.className = 'image-row show';
        }, 2000);
    }*/

    for(let i = 0; i < images.length; i++) {
        images[i].addEventListener('mousedown', function(){
            if (i >= 1) {
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
            }
            box.style.display = 'flex';
        });
    }

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