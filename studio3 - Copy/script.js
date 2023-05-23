(function(){
    'use strict';

    const images = document.querySelectorAll('.gimg');
    const rows = document.querySelectorAll('.image-row');
    const names = [];
    const box = document.querySelector('#lightbox');
    const previous = document.querySelector('#previous');
    const current = document.querySelector('#current');
    const next = document.querySelector('#next');

    lightGallery(document.getElementById('lightgallery'), {
        plugins: [lgThumbnail],
        licenseKey: '0000-0000-000-0000',
        speed: 500,
        width: "100%",
        height: "100%",
        thumbHeight: "200px",
    });

    for (const row of rows) {
        row.className = 'image-row show';
    }

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