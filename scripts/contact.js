'use strict';


function validateForm() {

  var inputs = $('#contact input, #contact textarea');

  var validity = [];

  inputs.each(function (index, elem) {
    console.log(elem.name, elem.checkValidity());
    validity.push(elem.checkValidity());
  });

  return validity.reduce(function (total, value) {
    return total && value;
  }, true);
  /*
      var i = 0;
      var result = true;
      while (result && (i< validity.length)) {
        result = resukt && validity[i];
        i++;
      }
      return result;*/
}

//validateForm();

var button = document.querySelector("#contact button").addEventListener('click', function (event) {
  event.preventDefault();

  var result = validateForm();

  console.log('result', result);

  if (!result) return;
  //your code
  ////window.service

  window.service = window.service || {};
  window.service.contact = window.service.contact || {};
  window.service.contact.send = function () {
    return Promise.resolve();
  };

  window.service.contact.send({
    name: $('input[name="name"]').val(),
    email: $('input[name="email"]').val(),
    message: $('input[name="message"]').val()
  }).then(function () {
    alert('Send');
  }).catch(function () {
    aler('Something happend');
  })
});
