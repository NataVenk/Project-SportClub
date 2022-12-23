console.log('testing contactUs');

var customerSubmitForm = document.querySelector('.customer-submit');

console.log(customerSubmitForm);

//map api to show on the page
var map = L.map('map').setView([39.938161, -75.172099], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([39.938161, -75.172099]).addTo(map);