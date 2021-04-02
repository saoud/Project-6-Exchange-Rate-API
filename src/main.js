import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRate from './exchangeRateAPI'

function clearFields() {
  $('.showErrors').text("");
  $('.showRate').text("");
  $('.showResultErrors').text("");
}

function getElements(response) {
if (response.result === "success") {
    $('.showRate').text('Your USD conversion is ${response.conversion_result} ${response.target_code}')
  } else if (response["error-type"] === "unsupported-code") {
    $('.showResulError').text("Unfortunatly we have encoutered an error")
  } else {
    $('.showErrors').text(`There was an error ${response.message}. Please enter a valid number.`);
  }
}

$(document).ready(function() {
  $('#submitExchange').click(function() {
    let currency = $('#currency').val();
    let amount = parseInt($('input#inputUSD').val());
    clearFields();
    ExchangeRate.getRate(currency, amount).then(function(response) {
      getElements(response);
    });
  });
});