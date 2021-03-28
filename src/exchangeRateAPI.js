export default class ExchangeRate {
  static getRate(currency) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}//pair/USD/${currency}/${amount}`)
    .then(function(response){
      if (response.json().result === "error") {
        throw Error(response.json().error-type);
      }
      return response.json();
    })
    .catch(function(error) {
      return Error(error);
    })
  }
}
