import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRate from './exchangeRateAPI.js';

function clearFields() {
  $('.showErrors').text("");
  $('.showResult').text("");
  $('.showResultErrors').text("");
}

function getElements(response) {
  if (response.result === "success") {
    $('.showResult').text('Your USD conversion is ${response.conversion_result} ${response.target_code}');
  } else if (response["error-type"] === "unsupported-code") {
    $('.showResutlError').text("Unfortunatly we have encoutered an error");
  } else {
    $('.showErrors').text(`There was an error ${response.message}. Please enter a valid number.`);
  }
}

$(document).ready(function() {
  $('#submitExchange').click(function() {
    let inputUSD = $('input#inputUSD').val();
    let currency = $('#currency').val();
    console.log(inputUSD);
    console.log(currency);
    clearFields();
    ExchangeRate.getRate(currency, inputUSD).then(function(response) {
      getElements(response);
    });
  });
});