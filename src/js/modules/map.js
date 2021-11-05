'use strict'

const mapToken = 'pk.eyJ1IjoidmxhZHp5c2hjaHVrIiwiYSI6ImNrdmlqb2hnbzF4NXkycHE1NTVrbmZrZ3QifQ.ZfbAG0ofjwfLXfEB4EiT_w';

export const initMap = (firstCoordination, secondCoordination) => {
    const mymap = L.map('map').setView([firstCoordination, secondCoordination], 16);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: mapToken,
    }).addTo(mymap);

    L.marker([firstCoordination, secondCoordination]).addTo(mymap)
}
