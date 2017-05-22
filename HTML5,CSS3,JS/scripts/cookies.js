'use strict';

(function(){

    var cookiesAccepted = sessionStorage.getItem('cookies');
    
    if (cookiesAccepted) {
        console.log('cookies aceptadas');
        hideCookiesBar();
    } 

    var cookies = document.querySelector('.cookies button');
    cookies.addEventListener('click', function() {
        hideCookiesBar();
        sessionStorage.setItem('cookies', 'accepted');
    });

    function hideCookiesBar() {
        document.getElementsByClassName('cookies')[0].classList.add('ok');
    }
})();