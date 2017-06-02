'use strict';

function getProducts() {
    window.service.products.getProducts()
        .then(function(responses) {
            insertHTML(responses);
        }).catch(function() {
            console.log('Error loading products');
        });
}

function getProductById(id) {
    var product = window.service.products.getProductById(id);
    console.log(product);
    insertHTMLinModal(product);
}

function insertHTML(data) {
    var products = $('.products');
    $(data).each(function(index, elem) {
        var likeIcon = (elem.liked) ? 'thumbs-up' : 'thumbs-down';
        var size = (index % 3 === 0) ? 'col-lg-12' : 'col-lg-6';
        insertPanelProduct(products, elem, size, likeIcon);
    });
}

function insertPanelProduct(products, elem, size, likeIcon) {
    products.append('<div id="product' + elem.id + '" class="panel panel-default panel-product ' + size + '">' +
        '<div class="panel-body">' +
        '<picture>' +
        '<source srcset="' + elem.images[2] + '" media="(max-width: 768px)">' +
        '<source srcset="' + elem.images[1] + '" media="(min-width: 769px) and (max-width: 1200px)">' +
        '<img class="img-responsive" src="' + elem.images[0] + '">' +
        '</picture>' +
        '<div class="panel-footer">' +
        '<div class="title">' +
        '<p>' + elem.name + '</p>' +
        '<button class="btn btn-default">' + elem.currency + elem.price + '</button>' +
        '</div>' +
        '<div class="subtitle">' +
        '<button class="btn btn-default likes">' +
        '<i class="glyphicon glyphicon-' + likeIcon + '"></i>' +
        elem.likes +
        '</button>' +
        '</div>' +
        '</div>' +
        '</div>'
    );
    $('.panel-product').on('click', function() {
        getProductById(this.id);
        $('#modal').modal();
    });
}

function insertHTMLinModal(elem) {
    var modal = $('#content');
}

$(document).ready(function() {
    getProducts();
});