/*(function(){
    'use strict';

    async function getData(){
        const days = await fetch('data/days.json');
        const data = await days.json();
    }

    function outputHTML(data) {
        let html = `<img src="images/discord.png"><h2>Discord</h2>`
    }
})();*/
let globalData;
async function getData() {
    const days = await fetch('data/days.json');
    const data = await days.json();
    globalData = data;

    const buttons = document.querySelectorAll('h3');
    const icon = document.querySelector('section');

    icon.innerHTML = `<img src="images/discord.png"><h2>Discord</h2>`;

    document.querySelector('header').innerHTML = createButtons(data);

    createEvents();
}

function createButtons(data) {
    let html = '';
    const dataPts = Object.keys(data);
    console.log(dataPts);
    dataPts.forEach(function(eachPt){
        html += `<h3 id=${eachPt}>${eachPt.toUpperCase()}</h3>`
    })
    return html;
}

function createEvents(){
    const buttons = document.querySelectorAll('h3');

    for (const button of buttons) {
        button.addEventListener('mouseover', function(event){
            const id = event.target.id;
            document.querySelector('section').innerHTML = updateInterface(id, globalData);
            //document.querySelector('h1').innerHTML = updateInterface2(id, globalData);

            for (const button of buttons) {
                button.style.fontWeight = '400';
                button.style.color = 'rgba(255, 255, 255, 0.5)';
            }
            button.style.fontWeight = '600';
            button.style.color = 'white';
        })
    }
}


function updateInterface(value, jsonData) {
    console.log(value);
    document.querySelector('body').className = jsonData[value].app.toLowerCase();
    let html = `<img src="images/${jsonData[value].app.toLowerCase()}.png">`
    console.log(html);
    let time;
    if (jsonData[value].hours > 0) {
        time = jsonData[value].hours;
        console.log(time);
        html += `<div><h1>${time} hours</h1></div>`;
    }else{
        time = jsonData[value].minutes;
        console.log(time);
        html += `<div><h1>${time} minutes</h1></div>`;
    }
    document.querySelector('h2').innerHTML = jsonData[value].app;
    return html;
}

getData();