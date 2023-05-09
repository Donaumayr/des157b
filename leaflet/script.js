(function(){
    'use strict';

    // add your script here
    var map = L.map('map').setView([1.290270, 103.851959], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([1.290270, 103.851959]).addTo(map);

    var circle = L.circle([1.290270, 103.9], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500,
    }).addTo(map);

    var polygon = L.polygon([
        [1.300270, 103.811959],
        [1.280270, 103.821959],
        [1.300270, 103.781959]
    ]).addTo(map);

    marker.bindPopup("<b>Singapore</b><br>Southeast Asia.").openPopup();
    circle.bindPopup("<b>Welcome to Singapore!</b>").openPopup();
    polygon.bindPopup("<b>Scroll and explore!</b>").openPopup();
}());