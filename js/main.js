var USD_CURRENCY = 11592;
var RUB_CURRENCY = 127;
var EUR_CURRENCY = 12998;
var GBP_CURRENCY = 14971;
var KZT_CURRENCY = 26;

var elForm = document.querySelector(".js-intro__form");
var elInput = document.querySelector(".js-intro__input");
var elSelect = document.querySelector(".js-intro__select");
var elResult = document.querySelector(".js-intro__result");

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  var userIncomingCurrency = Number(elInput.value);
  var userGettingCurrency;
  if(userIncomingCurrency >= 0) {
    var elSelectValue = elSelect.value;
    if(elSelectValue === "USD") {
      userGettingCurrency = userIncomingCurrency * USD_CURRENCY;
      elResult.textContent = `Siz kiritgan ${elSelectValue} kurs ${userGettingCurrency} UZS ga teng`;
    }
    if(elSelectValue === "RUB") {
      userGettingCurrency = userIncomingCurrency * RUB_CURRENCY;
      elResult.textContent = `Siz kiritgan ${elSelectValue} kurs ${userGettingCurrency} UZS ga teng`;
    }
    if(elSelectValue === "EUR") {
      userGettingCurrency = userIncomingCurrency * EUR_CURRENCY;
      elResult.textContent = `Siz kiritgan ${elSelectValue} kurs ${userGettingCurrency} UZS ga teng`;
    }
    if(elSelectValue === "GBP") {
      userGettingCurrency = userIncomingCurrency * GBP_CURRENCY;
      elResult.textContent = `Siz kiritgan ${elSelectValue} kurs ${userGettingCurrency} UZS ga teng`;
    }
    if(elSelectValue === "KZT") {
      userGettingCurrency = userIncomingCurrency * KZT_CURRENCY;
      elResult.textContent = `Siz kiritgan ${elSelectValue} kurs ${userGettingCurrency} UZS ga teng`;
    }
  }
})