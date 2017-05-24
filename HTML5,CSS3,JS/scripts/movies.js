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
                return total + '<article class="col-lg-xs-12 col-md-6 col-lg-3" draggable="true"><img draggable="false" src="' + response.url + '"alt="' + response.title + '"><h2>' + response.title + '</h2><p>lorem lorem</p></article>';
            }, '');
            $('#movies div').append(html);
            moviesDragInit();
        }).catch(function() {
            console.log(arguments);
        });
    }, 3000);

})();
