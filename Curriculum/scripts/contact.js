'use strict';

$('#country').change(function() {

    var value = $(this).val();
    var countryImg = $('#countryImg');
    var prefixNumber = $('#prefixNumber');

    if (value != 0) {

        countryImg.css("display", "block");
        prefixNumber.css('display', 'inline');

        countryImg.attr('src', service.countries.img + value + '.png');

        window.service.countries.getCountry(value).then(function(responses) {
            $('#prefixNumber').html('+' + responses.Results.TelPref);
        });
    } else {
        countryImg.css("display", 'none');
        prefixNumber.css('display', 'none');
    }
});

function validateForm() {

    var inputs = $('#contact input, #contact textarea, #contact select');

    var validity = [];

    inputs.each(function(index, elem) {
        console.log(elem.name, elem.checkValidity());
        validity.push(elem.checkValidity());
    });

    return validity.reduce(function(total, value) {
        return total && value;
    }, true);
}

var button = document.querySelector("#contact button").addEventListener('click', function(event) {
    event.preventDefault();

    var result = validateForm();

    console.log('result', result);

    if (!result) {
        alert('Error en los campos');
        return;
    }
    //your code
    ////window.service

    window.service = window.service || {};
    window.service.contact = window.service.contact || {};
    window.service.contact.send = function() {
        return Promise.resolve();
    };

    window.service.contact.send({
        name: $('input[name="name"]').val(),
        email: $('input[name="email"]').val(),
        telephone: $('input[name="telephone"]').val(),
        message: $('textarea[name="message"]').val(),
        country: $('select[name="country"]').val()
    }).then(function() {
        alert('sended!');
    }).catch(function() {
        alert('something happend!');
    })
});
