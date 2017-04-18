'use strict';

(function() {
    var service = {
        root: 'http://jsonplaceholder.typicode.com',
        getWorks: getWorks
    }

    function getPhotos() {
        return $.ajax({
            type: 'GET',
            dataType: 'json',
            url: this.root + '/photos?_limit=8'
        });
    }

    window.service = window.service || {};
    window.service.works = service;

})();
