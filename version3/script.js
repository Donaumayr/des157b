(function(){
    'use strict';

    Parse.initialize('RnWS304bYpVqK2cBkp5MLSP6OkHY6YiHuWV822rL', '4D1M4gh5pWhn2By0qXyooAqvrG3I90Hi3amizeOY');
    Parse.serverURL = 'https://parseapi.back4app.com/';

    window.dispatchEvent(new Event('resize'));

    const body = document.querySelector('body');
    const gallery = document.querySelector('#gallery');
    const images = document.querySelectorAll('.gimg');
    const images2 = document.querySelectorAll('.oimg');
    const rows = document.querySelectorAll('.image-row');
    const names = [];
    const box = document.querySelector('#lightbox');
    let close = document.querySelector('#x');
    const share = document.querySelector('#share');
    const intro = document.querySelector('#intro');
    const upload = document.querySelector('#upload');
    let clicked = 0;
    /*setInterval(function() {
        rows[count].className = 'image-row show';
        count++;
    }, 500);*/

    document.querySelector('#form').addEventListener('submit', function(event){
        event.preventDefault();

        const fileUploadControl = document.querySelector('#fileupload');
        const name = document.querySelector('#name').value;
        const location = document.querySelector('#location').value;
        const bicycle = document.querySelector('#bicycle').value;
        const description = document.querySelector('#description').value;

        //console.log(fileUploadControl.files[0]);
        if (fileUploadControl.files.length > 0 && name.length > 0 && location.length > 0 && bicycle.length > 0 && description.length > 0) {
            const image = fileUploadControl.files[0];
            const filename = fileUploadControl.files[0].name;
            uploadPhoto(name, location, bicycle, description, image, filename);
        }else{
            alert("It looks like you didn't fill in something!")
        }
    });

    async function uploadPhoto(name, location, bicycle, description, image, filename) {
        const newPhoto = new Parse.Object('Journey');
        newPhoto.set('name', name);
        newPhoto.set('location', location);
        newPhoto.set('bicycle', bicycle);
        newPhoto.set('description', description);
        newPhoto.set('filename', filename);
        newPhoto.set('image', new Parse.File(filename, image));
        try {
            const result = await newPhoto.save();
            console.log(result);
            share.style.display = 'block';
            upload.className = 'hidden'
            gallery.className = '';
            body.style.overflow = 'visible';
            //window.dispatchEvent(new Event('resize'));
            resetFormFields();
            displayPhotos();
            setTimeout(() => {
                upload.style.display = 'none';
            }, 1000);
            
        }catch (error) {
            console.log('Error while uploading the photo: ', error);
        }
    }

    async function displayPhotos() {
        const journeys = Parse.Object.extend('Journey');
        const query = new Parse.Query(journeys);
        
        try {
            const results = await query.find();
            //console.log(results);
            let count = 0;
            box.innerHTML = '<div id="parent"><button id="x"></button></div>';
            results.forEach(function(eachPhoto) {
                console.log(count);
                //const id = eachPhoto.id;
                const name = eachPhoto.get('name');
                const location = eachPhoto.get('location');
                const bicycle = eachPhoto.get('bicycle');
                const description = eachPhoto.get('description');
                const imageURL = eachPhoto.get('image').url();
                //const filename = eachPhoto.get('filename');
                const post = document.createElement("div");
                post.className = 'post';
                post.setAttribute('data-aos', 'fade-up');
                post.setAttribute('data-aos', 'fade-down');
                post.setAttribute('data-aos-offset', '400');
                post.innerHTML = `
                    <img class="oimg" src="${imageURL}">
                    <h1>${name}</h1>
                    <div><h2>${location}</h2><h2>${bicycle} Bike</h2></div>
                    <p>${description}</p>`;
                //console.log(post);
                box.appendChild(post);

                // Row Condition
                if (count%4 == 0) {
                    console.log("new row");
                    gallery.innerHTML += '<section class="image-row"></section>';
                }
                const rows = document.querySelectorAll('.image-row');
                let photo = document.createElement("img");
                photo.className = 'gimg';
                photo.src = `${imageURL}`;
                console.log("rowlen" + rows.length);
                rows[rows.length - 1].appendChild(photo);
                /*photo.addEventListener('click', function(){
                    console.log('listener added');;
                    gallery.className = 'fix';
                    box.style.display = 'flex';
                    box.className = 'show';
                    share.className = 'hidden';
                    post.scrollIntoView();
                });*/
                
                /*rows[rows.length - 1].innerHTML += `<img class="gimg" src="${imageURL}">`;*/
                count++;
            });
            const arrimg = document.querySelectorAll('.gimg');
            const arrpost = document.querySelectorAll('.post');
            for (let i = 0; i < arrimg.length; i++) {
                arrimg[i].addEventListener('click', function(){
                    console.log('listener added');;
                    gallery.className = 'fix';
                    box.style.display = 'flex';
                    box.className = 'show';
                    share.className = 'hidden';
                    arrpost[i].scrollIntoView();
                });
            }
            close = document.querySelector('#x');
            close.addEventListener('click', function(){
                window.scrollTo(0,0);
                arrpost[0].style.opacity = '0';
                gallery.className = ''
                box.className = 'hidden';
                window.dispatchEvent(new Event('resize'));
                setTimeout(function() {
                    box.style.display = 'none';
                    arrpost[0].style.opacity = '1';
                    share.className = 'show';
                }, 500);
            });
            /*for(let i = 0; i < images.length; i++) {
                images[i].addEventListener('click', function(){
                    //$(document).scrollTop(150 * i);
                    //gallery.style.position = 'fixed';
                    gallery.className = 'fix';
                    box.style.display = 'flex';
                    box.className = 'show';
                    share.className = 'hidden';
                    images2[i].scrollIntoView();
                });
            }*/
            window.dispatchEvent(new Event('resize'));
        } catch (error) {
            console.error('Error while fetching Journeys', error);
        }
    }

    displayPhotos();
    window.dispatchEvent(new Event('resize'));

    /*rows[0].className = 'image-row show';
    setTimeout(function() {
        rows[1].className = 'image-row show';
    }, 500);
    setTimeout(function() {
        rows[2].className = 'image-row show';
    }, 1500);*/

    share.addEventListener('click', function(){
        if(clicked == 0) {
            intro.className = 'hidden';
            body.style.overflow = 'visible';
            window.dispatchEvent(new Event('resize'));
            setTimeout(function() {
                intro.style.display = 'none';
                clicked = 1;
            }, 1000);
        }else{
            gallery.className = 'fix';
            body.style.overflow = 'hidden';
            window.dispatchEvent(new Event('resize'));
            upload.style.display = 'flex';
            upload.className = 'show';
            share.style.display = 'none'
        }
    });

    // Helper Functions
    function resetFormFields() {
        document.getElementById("name").value = "";
        document.getElementById("fileupload").value = "";
        document.getElementById("location").value = "";
        document.getElementById("bicycle").value = "";
        document.getElementById("description").value = "";
    }

})();