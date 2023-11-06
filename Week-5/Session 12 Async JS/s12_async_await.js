async function getExchangeRate(currencyCode) {
  try {
    const response = await fetch(
      `https://api.exchangerate.host/${currencyCode}`
    );
    const jsonData = await response.json();
    const rates = jsonData.rates;

    if (rates.hasOwnProperty(currencyCode)) {
      const exchangeRate = parseFloat(rates[currencyCode]).toFixed(4);
      console.log(
        `The exchange rate of ${currencyCode} for 1 EUR is ${exchangeRate}`
      );
      return exchangeRate;
    } else {
      console.log("Enter valid currency");
      return null;
    }
  } catch (error) {
    console.error("Error :", error);
    return error;
  }
}
getExchangeRate("INR");
