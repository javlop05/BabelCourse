'use strict';

(function() {

    setTimeout(function() {
        window.service.photo.getPhotos({
            limit: document.getElementById('movies').dataset.lenght
            //limit: $('movies).data('lenght')
        }).then(function(responses) {
            console.log(responses);
            var html = responses.reduce(function(total, response, index, list) {
                console.log(arguments);
                return total + '<article><img src="' + response.url + '"alt="' + response.title + '"><h2>' + response.title + '</h2><p>lorem lorem</p></article>';
            }, '');
            $('#movies div').append(html);
        }).catch(function() {
            console.log(arguments);
        });
    }, 3000);

})();
