'use strict';

(function() {
    var service = {
        getProducts: getProducts,
        getProductById: getProductById,
    };

    var products = null;

    function getProductById(id) {
        if (products) {
            return products.filter(function(elem) {
                console.log(elem);
                return elem.id === id;
            })[0];
        }
    }

    function getProducts() {
        return fetch('../assets/mocks/list.json')
            .then(function(response) {
                return response.json();
            }).then(function(data) {
                products = data;
                return data;
            });
    }

    window.service = window.service || {};
    window.service.products = service;
})();