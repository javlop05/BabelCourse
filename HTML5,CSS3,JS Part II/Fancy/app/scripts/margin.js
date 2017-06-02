'use strict';

$(document).ready(function() {

    responsiveMain();

    function responsiveMain() {
        var margin = $('.navbar').height();
        margin += 'px';
        $('main').css('margin-top', 'calc( 15px + ' + margin + ' )');
    }

    $(window).resize(function() {
        responsiveMain();
    });
});