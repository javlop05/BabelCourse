'use strict';

(function() {
    var service = {
        root: 'http://www.geognos.com/api/en/countries/info/',
        img: 'http://www.geognos.com/api/en/countries/flag/',
        getCountry: getCountry
    }

    function getCountry(countryCode) {
        return $.ajax({
            type: 'GET',
            dataType: 'json',
            url: this.root + countryCode + '.json'
        });
    }

    window.service = window.service || {};
    window.service.countries = service;

})();
