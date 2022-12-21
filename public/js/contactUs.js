console.log('testing contactUs');

var customerSubmitForm = document.querySelector('.customer-submit');

console.log(customerSubmitForm);

var map = L.map('map').setView([39.9382, -75.1723],13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([39.9382, -75.1723]).addTo(map);