'use strict';

$('#country').change(function() {

    var value = $(this).val();
    var countryImg = $('#countryImg');

    if (value != 0) {

        countryImg.css("display", "block");

        countryImg.attr('src', service.countries.img + value + '.png');

        window.service.countries.getCountry(value).then(function(responses) {
            $('#prefixNumber').html('+' + responses.Results.TelPref);
        });
    } else {
        countryImg.css("display", "none");
    }
});
