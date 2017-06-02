'use strict';

(function() {

    var cookiesAccepted = sessionStorage.getItem('cookies');
    var cookies = document.querySelector('.cookies button');

    if (cookiesAccepted && cookies) {
        console.log('cookies aceptadas');
        hideCookiesBar();
    }


    if (cookies) {
        cookies.addEventListener('click', function() {
            hideCookiesBar();
            sessionStorage.setItem('cookies', 'accepted');
        });
    }

    function hideCookiesBar() {
        document.getElementsByClassName('cookies')[0].classList.add('ok');
    }
})();