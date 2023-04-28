(function(){
    'use strict';

    const buttons = document.querySelectorAll('h3');
    const icon = document.querySelector('div');

    icon.innerHTML = `<img src="images/discordicon.png"><h2>Discord</h2>`;

    async function getData(){
        const days = await fetch('data/days.json');
        const data = await days.json();
    }

    function outputHTML(data) {
        let html = `<img src="images/discordicon.png"><h2>Discord</h2>`
    }
})();