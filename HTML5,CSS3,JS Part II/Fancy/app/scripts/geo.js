'use strict';

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        successHandler,
        function() {}, {}
    );
}

function successHandler(data) {
    var coords = data.coords;

    var API_KEY = 'AIzaSyAA87l-5PLq-XRvNdRURYNgyIbwuPAdP3A';
    var iframe = document.createElement('iframe');

    iframe.src = 'https://www.google.com/maps/embed/v1/place?key=' +
        API_KEY + '&q=' + coords.latitude + ',' + coords.longitude;

    $(iframe).click(function() {
        console.log('click');
        $(iframe).attr('pointer-events', 'all');
    });

    $(iframe).mouseout(function() {
        console.log('mouseout');
        $(iframe).attr('pointer-events', 'none');
    });
    var map = document.body.getElementsByClassName('map')[0];
    if (map) {
        map.appendChild(iframe);
    }
}